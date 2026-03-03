import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowRight, Users, MapPin, Smartphone } from "lucide-react";

export default function JoinBar() {
  const [searchParams] = useSearchParams();
  const barId = searchParams.get('barId');
  const tableId = searchParams.get('tableId');
  
  const [isEnglish, setIsEnglish] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [appInstalled, setAppInstalled] = useState(false);

  const content = {
    title: isEnglish ? "Join the Table" : "הצטרף לשולחן",
    subtitle: isEnglish 
      ? "Get ready to play and connect!" 
      : "התכונן לשחק ולהתחבר!",
    checking: isEnglish ? "Checking for app..." : "בודק אפליקציה...",
    opening: isEnglish ? "Opening app..." : "פותח אפליקציה...",
    notInstalled: isEnglish ? "App not installed" : "האפליקציה לא מותקנת",
    downloadTitle: isEnglish ? "Download CHUGZ" : "הורד את CHUGZ",
    downloadDesc: isEnglish 
      ? "Install the app to join tables, play games, and meet new people at bars near you."
      : "התקן את האפליקציה כדי להצטרף לשולחנות, לשחק משחקים ולהכיר אנשים חדשים בברים לידך.",
    downloadAppStore: isEnglish ? "Download on the" : "הורד מ-",
    getGooglePlay: isEnglish ? "Get it on" : "השג ב-",
    backToHome: isEnglish ? "Back to Home" : "חזרה לעמוד הבית"
  };

  // Custom SVG Icons for App Stores
  const AppleIcon = ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.67.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.85 2.01-1.68 3.32-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );

  const PlayStoreIcon = ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.98 1.98 0 0 1-.41-.122V1.936a1.98 1.98 0 0 1 .409-.122zM20.25 10.96L15.208 8.04l-2.833 2.833 2.833 2.833 5.042-2.92a1.16 1.16 0 0 0 0-2.01zM14.375 7.56l-9.833-5.7A1.98 1.98 0 0 0 3.61 1.814l8.765 8.765 2-3.02zM3.61 22.186a1.98 1.98 0 0 0 .932-.046l9.833-5.7-2-3.02-8.765 8.765z" />
    </svg>
  );

  // Build query string for deep links
  const buildQueryString = () => {
    const params = new URLSearchParams();
    if (barId) params.set('barId', barId);
    if (tableId) params.set('tableId', tableId);
    return params.toString();
  };

  // Redirect to custom scheme URL immediately
  useEffect(() => {
    const queryString = buildQueryString();
    
    // Custom URL Scheme - redirect immediately
    const customSchemeUrl = `chugz://join?${queryString}`;
    
    // Store URLs for download buttons
    const iosAppStoreUrl = "https://apps.apple.com/app/chugz/id123456789"; // Replace with actual App Store ID
    const androidPlayStoreUrl = "https://play.google.com/store/apps/details?id=com.chugz.app"; // Replace with actual package name
    
    // Detect device type
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isAndroid = /android/i.test(userAgent);
    
    // Store redirect URLs for download buttons
    (window as any).iosAppStoreUrl = iosAppStoreUrl;
    (window as any).androidPlayStoreUrl = androidPlayStoreUrl;
    (window as any).isIOS = isIOS;
    (window as any).isAndroid = isAndroid;
    (window as any).customSchemeUrl = customSchemeUrl;
    
    // Redirect to custom scheme URL immediately
    if (isIOS || isAndroid) {
      // Try to open the app immediately with custom scheme
      window.location.href = customSchemeUrl;
      
      // Set a timeout to detect if app opened
      const timeout = setTimeout(() => {
        // If app didn't open, show download options
        setAppInstalled(false);
        setIsChecking(false);
      }, 2000);
      
      // If page loses focus, app likely opened - clear timeout
      const handleBlur = () => {
        clearTimeout(timeout);
        setAppInstalled(true);
        setIsChecking(false);
        window.removeEventListener('blur', handleBlur);
        window.removeEventListener('visibilitychange', handleVisibilityChange);
      };
      
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(timeout);
          setAppInstalled(true);
          setIsChecking(false);
          window.removeEventListener('blur', handleBlur);
          window.removeEventListener('visibilitychange', handleVisibilityChange);
        }
      };
      
      window.addEventListener('blur', handleBlur);
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      setIsChecking(true);
    } else {
      // Desktop - show download options immediately
      setAppInstalled(false);
      setIsChecking(false);
    }
  }, [barId, tableId]);

  // Countdown timer removed - no auto-redirect to app stores

  const tryOpenApp = () => {
    // Redirect directly to custom scheme URL
    const customSchemeUrl = (window as any).customSchemeUrl || `chugz://join?${buildQueryString()}`;
    window.location.href = customSchemeUrl;
  };

  const redirectToDownload = () => {
    const isIOS = (window as any).isIOS;
    const isAndroid = (window as any).isAndroid;
    const iosAppStoreUrl = (window as any).iosAppStoreUrl || "https://apps.apple.com/app/chugz/id123456789";
    const androidPlayStoreUrl = (window as any).androidPlayStoreUrl || "https://play.google.com/store/apps/details?id=com.chugz.app";
    
    if (isIOS) {
      window.location.href = iosAppStoreUrl;
    } else if (isAndroid) {
      window.location.href = androidPlayStoreUrl;
    } else {
      // Desktop - show download options
      window.open(iosAppStoreUrl, '_blank');
    }
  };

  React.useEffect(() => {
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
    document.documentElement.lang = isEnglish ? "en" : "he";
  }, [isEnglish]);

  return (
    <div className={`min-h-screen bg-bg-dark text-text-primary ${isEnglish ? 'font-sans' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-brand text-3xl tracking-wider text-brand-primary">
            CHUGZ
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsEnglish(false)} 
              className={`text-sm transition-colors ${!isEnglish ? 'text-white font-bold' : 'text-text-secondary hover:text-white'}`}
            >
              עברית
            </button>
            <span className="text-text-secondary">|</span>
            <button 
              onClick={() => setIsEnglish(true)} 
              className={`text-sm transition-colors ${isEnglish ? 'text-white font-bold' : 'text-text-secondary hover:text-white'}`}
            >
              English
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Loading/Checking State */}
            {isChecking && (
              <div className="glass-panel p-12 rounded-[32px] mb-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-6 border-4 border-brand-primary border-t-transparent rounded-full"
                />
                <h2 className="text-3xl font-bold mb-4">{content.checking}</h2>
                <p className="text-text-secondary">{content.opening}</p>
              </div>
            )}

            {/* App Not Installed / Download Section */}
            {!isChecking && !appInstalled && (
              <>
                <div className="glass-panel p-12 rounded-[32px] mb-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-brand-primary/20 rounded-full flex items-center justify-center">
                    <Smartphone className="w-12 h-12 text-brand-primary" />
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">{content.downloadTitle}</h1>
                  <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                    {content.downloadDesc}
                  </p>

                  {/* Try Opening App Button */}
                  <div className="mb-8">
                    <button
                      onClick={tryOpenApp}
                      className="w-full sm:w-auto mx-auto flex items-center justify-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-[20px] font-bold text-lg hover:bg-brand-container transition-colors shadow-lg"
                    >
                      <Smartphone className="w-5 h-5" />
                      {isEnglish ? "Open in CHUGZ App" : "פתח באפליקציית CHUGZ"}
                    </button>
                  </div>

                  {/* Bar/Table Info */}
                  {(barId || tableId) && (
                    <div className="bg-bg-surface-1 rounded-2xl p-6 mb-8 max-w-md mx-auto">
                      {barId && (
                        <div className="flex items-center gap-4 justify-center mb-4">
                          <MapPin className="w-6 h-6 text-brand-primary" />
                          <span className="text-lg font-bold">
                            {isEnglish ? "Bar" : "בר"}: {barId}
                          </span>
                        </div>
                      )}
                      {tableId && (
                        <div className="flex items-center gap-4 justify-center">
                          <Users className="w-6 h-6 text-brand-accent" />
                          <span className="text-lg font-bold">
                            {isEnglish ? "Table" : "שולחן"}: {tableId}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                    <button
                      onClick={redirectToDownload}
                      className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-[24px] font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                    >
                      <AppleIcon className="w-9 h-9" />
                      <div className={`leading-none ${isEnglish ? 'text-left' : 'text-right'}`}>
                        <div className="text-xs font-normal mb-1">{content.downloadAppStore}</div>
                        <div>App Store</div>
                      </div>
                    </button>
                    <button
                      onClick={redirectToDownload}
                      className="w-full sm:w-auto flex items-center justify-center gap-4 bg-bg-surface-2 border-2 border-white/10 text-white px-10 py-5 rounded-[24px] font-bold text-xl hover:bg-bg-surface-3 hover:scale-105 transition-all"
                    >
                      <PlayStoreIcon className="w-8 h-8" />
                      <div className={`leading-none ${isEnglish ? 'text-left' : 'text-right'}`}>
                        <div className="text-xs font-normal mb-1">{content.getGooglePlay}</div>
                        <div>Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* App Installed / Opening State */}
            {!isChecking && appInstalled && (
              <div className="glass-panel p-12 rounded-[32px]">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-24 h-24 mx-auto mb-6 bg-status-success/20 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Smartphone className="w-12 h-12 text-status-success" />
                  </motion.div>
                </motion.div>
                <h2 className="text-3xl font-bold mb-4">{content.opening}</h2>
                <p className="text-text-secondary">
                  {isEnglish 
                    ? "The app should open shortly. If it doesn't, make sure CHUGZ is installed."
                    : "האפליקציה אמורה להיפתח בקרוב. אם לא, ודא ש-CHUGZ מותקנת."}
                </p>
              </div>
            )}

            {/* Back to Home Link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-container mt-8 transition-colors"
            >
              <ArrowRight className={`w-5 h-5 ${isEnglish ? 'rotate-180' : ''}`} />
              {content.backToHome}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
