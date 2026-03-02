// #region agent log
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logPath = '.cursor/debug.log';
const log = (data) => {
  try {
    const logEntry = JSON.stringify({...data, timestamp: Date.now()}) + '\n';
    fs.appendFileSync(logPath, logEntry);
  } catch (e) {}
};
// #endregion

const distHtmlPath = path.join(__dirname, 'dist', 'index.html');
if (!fs.existsSync(distHtmlPath)) {
  console.error('❌ dist/index.html does not exist. Run npm run build first.');
  process.exit(1);
}

const html = fs.readFileSync(distHtmlPath, 'utf-8');

// #region agent log
log({
  location: 'verify-build.js:start',
  message: 'Build verification started',
  data: {htmlLength: html.length},
  hypothesisId: 'C'
});
// #endregion

const checks = {
  basePath: '/ChugzSite/',
  scriptTag: html.match(/<script[^>]*src="([^"]+)"/)?.[1] || '',
  manifestTag: html.match(/<link[^>]*rel="manifest"[^>]*href="([^"]+)"/)?.[1] || '',
  cssTag: html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/)?.[1] || '',
};

// #region agent log
log({
  location: 'verify-build.js:checks',
  message: 'Path verification',
  data: {
    scriptHasBasePath: checks.scriptTag.includes(checks.basePath),
    manifestHasBasePath: checks.manifestTag.includes(checks.basePath),
    cssHasBasePath: checks.cssTag.includes(checks.basePath),
    scriptTag: checks.scriptTag,
    manifestTag: checks.manifestTag,
    cssTag: checks.cssTag,
  },
  hypothesisId: 'C'
});
// #endregion

const errors = [];
const warnings = [];

// Verify script tag
if (!checks.scriptTag) {
  errors.push('❌ Script tag not found in built HTML');
} else if (!checks.scriptTag.includes(checks.basePath)) {
  errors.push(`❌ Script tag missing base path: ${checks.scriptTag}`);
} else {
  console.log(`✅ Script tag: ${checks.scriptTag}`);
}

// Verify manifest
if (!checks.manifestTag) {
  errors.push('❌ Manifest link not found in built HTML');
} else if (!checks.manifestTag.includes(checks.basePath)) {
  errors.push(`❌ Manifest link missing base path: ${checks.manifestTag}`);
} else {
  console.log(`✅ Manifest: ${checks.manifestTag}`);
}

// Verify CSS
if (!checks.cssTag) {
  warnings.push('⚠️  CSS link not found (might be inlined)');
} else if (!checks.cssTag.includes(checks.basePath)) {
  errors.push(`❌ CSS link missing base path: ${checks.cssTag}`);
} else {
  console.log(`✅ CSS: ${checks.cssTag}`);
}

// Check for source file references
if (html.includes('/src/main.tsx')) {
  errors.push('❌ Source file reference found in built HTML (should be transformed)');
}

// Check for relative paths that should be absolute
const relativeManifest = html.match(/href="\.\/site\.webmanifest"/);
if (relativeManifest) {
  errors.push('❌ Manifest uses relative path instead of absolute with base path');
}

// Verify manifest file exists
const manifestPath = path.join(__dirname, 'dist', 'site.webmanifest');
if (!fs.existsSync(manifestPath)) {
  errors.push('❌ site.webmanifest not found in dist folder');
} else {
  console.log('✅ site.webmanifest exists in dist');
}

// #region agent log
log({
  location: 'verify-build.js:results',
  message: 'Verification complete',
  data: {
    errorCount: errors.length,
    warningCount: warnings.length,
    hasErrors: errors.length > 0,
  },
  hypothesisId: 'C'
});
// #endregion

if (warnings.length > 0) {
  warnings.forEach(w => console.log(w));
}

if (errors.length > 0) {
  console.error('\n❌ Build verification failed:');
  errors.forEach(e => console.error(e));
  process.exit(1);
}

console.log('\n✅ Build verification passed! All paths are correct.');
process.exit(0);
