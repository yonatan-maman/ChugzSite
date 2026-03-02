import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import fs from 'fs';

// #region agent log
const logPath = '.cursor/debug.log';
const log = (data: any) => {
  try {
    const logEntry = JSON.stringify({...data, timestamp: Date.now()}) + '\n';
    fs.appendFileSync(logPath, logEntry);
  } catch (e) {}
};
// #endregion

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  // Use relative paths for deployment (works with file:// and web servers)
  // Set VITE_BASE_PATH=/ChugzSite/ if you need GitHub Pages subdirectory
  const basePath = process.env.VITE_BASE_PATH || './';
  // #region agent log
  log({location: 'vite.config.ts:build-start', message: 'Build configuration', data: {base: basePath, mode}});
  // #endregion
  return {
    base: basePath,
    plugins: [
      react({
        jsxRuntime: 'automatic',
      }),
      tailwindcss(),
      {
        name: 'debug-html-transform',
        transformIndexHtml(html) {
          // #region agent log
          const scriptMatch = html.match(/<script[^>]*src="([^"]+)"/);
          const manifestMatch = html.match(/<link[^>]*rel="manifest"[^>]*href="([^"]+)"/);
          const cssMatch = html.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"/);
          log({
            location: 'vite.config.ts:transformIndexHtml',
            message: 'HTML transformation',
            data: {
              hasScript: !!scriptMatch,
              scriptSrc: scriptMatch?.[1],
              manifestHref: manifestMatch?.[1],
              cssHref: cssMatch?.[1],
              basePathInScript: scriptMatch?.[1]?.includes('/ChugzSite/'),
              basePathInManifest: manifestMatch?.[1]?.includes('/ChugzSite/'),
            },
            hypothesisId: 'A'
          });
          // #endregion
          
          // Fix manifest link to use absolute path with base path
          if (basePath !== './' && basePath !== '/') {
            // Replace relative manifest paths with absolute paths
            html = html.replace(
              /(<link[^>]*rel="manifest"[^>]*href=")(\.\/site\.webmanifest)(")/g,
              `$1${basePath.replace(/\/$/, '')}/site.webmanifest$3`
            );
          }
          
          return html;
        },
        closeBundle() {
          // Fix manifest link in the final HTML file after build
          const htmlPath = path.join(__dirname, 'dist', 'index.html');
          const manifestPath = path.join(__dirname, 'dist', 'site.webmanifest');
          
          if (fs.existsSync(htmlPath)) {
            let htmlContent = fs.readFileSync(htmlPath, 'utf-8');
            
            // Fix manifest link if it's still relative
            const manifestMatch = htmlContent.match(/<link[^>]*rel="manifest"[^>]*href="([^"]+)"/);
            if (manifestMatch && manifestMatch[1].startsWith('./')) {
              // Detect base path from script tag
              const scriptMatch = htmlContent.match(/<script[^>]*src="([^"]+)"/);
              if (scriptMatch && scriptMatch[1].includes('/ChugzSite/')) {
                // Extract base path from script tag
                const detectedBasePath = scriptMatch[1].split('/assets/')[0] + '/';
                htmlContent = htmlContent.replace(
                  /(<link[^>]*rel="manifest"[^>]*href=")(\.\/site\.webmanifest)(")/g,
                  `$1${detectedBasePath}site.webmanifest$3`
                );
                // Write the fixed HTML back
                fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
                
                // #region agent log
                const finalScriptMatch = htmlContent.match(/<script[^>]*src="([^"]+)"/);
                const finalManifestMatch = htmlContent.match(/<link[^>]*rel="manifest"[^>]*href="([^"]+)"/);
                log({
                  location: 'vite.config.ts:closeBundle',
                  message: 'Fixed manifest link in HTML',
                  data: {
                    scriptSrc: finalScriptMatch?.[1],
                    manifestHref: finalManifestMatch?.[1],
                    basePathInScript: finalScriptMatch?.[1]?.includes('/ChugzSite/'),
                    basePathInManifest: finalManifestMatch?.[1]?.includes('/ChugzSite/'),
                  },
                  hypothesisId: 'B'
                });
                // #endregion
              }
            }
            
            // Fix manifest file content - transform relative paths to absolute with base path
            if (fs.existsSync(manifestPath)) {
              const scriptMatch = htmlContent.match(/<script[^>]*src="([^"]+)"/);
              if (scriptMatch && scriptMatch[1].includes('/ChugzSite/')) {
                const detectedBasePath = scriptMatch[1].split('/assets/')[0] + '/';
                let manifestContent = fs.readFileSync(manifestPath, 'utf-8');
                
                try {
                  const manifest = JSON.parse(manifestContent);
                  
                  // Fix start_url
                  if (manifest.start_url && manifest.start_url.startsWith('./')) {
                    manifest.start_url = detectedBasePath + manifest.start_url.slice(2);
                  }
                  
                  // Fix icon paths
                  if (manifest.icons && Array.isArray(manifest.icons)) {
                    manifest.icons = manifest.icons.map((icon: any) => {
                      if (icon.src && icon.src.startsWith('./')) {
                        icon.src = detectedBasePath + icon.src.slice(2);
                      }
                      return icon;
                    });
                  }
                  
                  // Write the fixed manifest back
                  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
                  
                  log({
                    location: 'vite.config.ts:closeBundle',
                    message: 'Fixed manifest file paths',
                    data: {
                      basePath: detectedBasePath,
                      startUrl: manifest.start_url,
                    },
                    hypothesisId: 'C'
                  });
                } catch (e) {
                  console.error('Error parsing manifest:', e);
                }
              }
            }
          }
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
      dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
    },
    preview: {
      port: 4173,
      strictPort: true,
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
