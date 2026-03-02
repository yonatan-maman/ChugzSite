import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Star,
  Users,
  MapPin,
  Sparkles,
  GlassWater,
  Music,
  ChevronDown,
  Instagram,
  Twitter,
  Facebook,
  Video,
  Flame,
  Zap,
  PartyPopper,
  Gamepad2
} from "lucide-react";

// ============================================================
//  🖼️  תמונות — רק כאן צריך לשנות!
//  החלף את הנתיבים בנתיבים האמיתיים של התמונות שלך
// ============================================================
// Use BASE_URL to construct paths that work with any base path
const baseUrl = import.meta.env.BASE_URL;
const getImagePath = (path: string) => {
  // Remove leading slash from path and combine with baseUrl
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};

const IMAGES = {
  // רקע הדף הראשי — תמונת אווירת לילה רחבה (1920×1080 מומלץ)
  heroBg: getImagePath("images/hero-bg.png"),

  // מסך האפליקציה בתוך הפלאפון (320×650 מומלץ, פורטרט)
  phoneMockup: getImagePath("images/phone-mockup.jpg"),

  // סקשן דייטינג — זוג/אנשים בבר (800×450 מומלץ)
  datingScene: getImagePath("images/datingMeeting.png"),

  // סקשן משחקים — חברים/בר/משחק (800×600 מומלץ)
  gamesScene: getImagePath("images/gamesScene.png"),

  // סקשן אווירה — תמונה ראשונה: חברים מרימים צ'ייסרים (600×350 מומלץ)
  lifestyle1: getImagePath("images/lifestyle-1.png"),

  // סקשן אווירה — תמונה שנייה: קבוצה בבר (600×400 מומלץ)
  lifestyle2: getImagePath("images/lifestyle-2.png"),

  // אווטארים של סיפורי הצלחה — 100×100 מומלץ (ריבוע/עיגול)
  reviewMaya:   getImagePath("images/review-maya.jpg"),
  reviewDaniel: getImagePath("images/review-daniel.jpg"),
  reviewShiran: getImagePath("images/review-shiran.jpg"),

  // אווטארים קטנים צפים בהרו (3 תמונות עגולות, 100×100)
  floatingUser1: getImagePath("images/user-1.jpg"),
  floatingUser2: getImagePath("images/user-2.jpg"),
  floatingUser3: getImagePath("images/user-3.jpg"),
};
// ============================================================

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

const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isEnglish, setIsEnglish] = React.useState(false);

  const content = {
    nav: {
      benefits: isEnglish ? "Why CHUGZ?" : "למה CHUGZ?",
      dating: isEnglish ? "Dating" : "דייטינג",
      games: isEnglish ? "Games" : "משחקים",
      reviews: isEnglish ? "Reviews" : "ביקורות",
      download: isEnglish ? "Download Now" : "הורד עכשיו"
    },
    hero: {
      title: isEnglish ? "Your Night," : "הלילה שלך,",
      subtitle: isEnglish ? "Your Way" : "בדרך שלך",
      desc: isEnglish ? "Turn every night out into an unforgettable adventure. Meet, play, and discover the best of nightlife." : "הפוך כל יציאה להרפתקה בלתי נשכחת. תכיר, תשחק ותגלה את הטוב ביותר שיש לחיי הלילה להציע.",
      downloadAppStore: isEnglish ? "Download on the" : "הורד מ-",
      getGooglePlay: isEnglish ? "Get it on" : "השג ב-"
    },
    benefits: {
      title: isEnglish ? "Why" : "למה",
      subtitle: isEnglish ? "We're not just another app. We're the new way to experience the night." : "אנחנו לא סתם עוד אפליקציה. אנחנו הדרך החדשה לחוות את הלילה.",
      items: [
        {
          title: isEnglish ? "Never Have a Boring Night Again" : "לעולם לא יהיה לך עוד לילה משעמם",
          desc: isEnglish ? "Every outing becomes an adventure. Discover what's happening, who's where, and join the fun instantly." : "כל יציאה הופכת להרפתקה. גלה מה קורה, מי נמצא איפה, והצטרף לכיף באופן מיידי."
        },
        {
          title: isEnglish ? "Meet People Who Get It" : "תכיר אנשים שמבינים עניין",
          desc: isEnglish ? "Connect with people who love nightlife just like you. Real connections, real moments." : "התחבר עם אנשים שאוהבים את חיי הלילה בדיוק כמוך. חיבורים אמיתיים, רגעים אמיתיים."
        },
        {
          title: isEnglish ? "The Best Nights Start Here" : "הלילות הטובים ביותר מתחילים כאן",
          desc: isEnglish ? "From finding the perfect spot to meeting new friends - Chugz makes it all happen." : "ממציאת המקום המושלם ועד להכרת חברים חדשים - Chugz גורם להכל לקרות."
        },
        {
          title: isEnglish ? "Your Nightlife, Upgraded" : "חיי הלילה שלך, משודרגים",
          desc: isEnglish ? "Exclusive access to the hottest spots, special deals, and experiences you won't find anywhere else." : "גישה בלעדית למקומות החמים ביותר, מבצעים מיוחדים וחוויות שלא תמצא בשום מקום אחר."
        }
      ]
    },
    dating: {
      title: isEnglish ? "Dating That Actually" : "דייטינג שבאמת",
      highlight: isEnglish ? "Happens" : "קורה",
      desc: isEnglish ? "The app that gets you off your screen and meets you with people right next to you." : "האפליקציה שמוציאה אותך מהמסך ומפגישה אותך עם אנשים שנמצאים ממש לידך.",
      items: [
        {
          title: isEnglish ? "Matches with people who are there, now" : "מאצ'ים עם אנשים שנמצאים שם, עכשיו",
          desc: isEnglish ? "You're already in the same place - the hard part is behind you." : "אתם כבר באותו מקום - החלק הקשה מאחוריכם."
        },
        {
          title: isEnglish ? "Instant connections - meet now" : "חיבורים מיידיים - נפגשים עכשיו",
          desc: isEnglish ? "15-minute matches create spontaneity. No waiting, no wondering." : "מאצ'ים של 15 דקות יוצרים ספונטניות. בלי לחכות, בלי לתהות."
        },
        {
          title: isEnglish ? "Real places, real moments" : "מקומות אמיתיים, רגעים אמיתיים",
          desc: isEnglish ? "Break the ice naturally - you both already went out to have fun." : "שברו את הקרח בטבעיות - שניכם כבר יצאתם כדי ליהנות."
        }
      ],
      cta: isEnglish ? "Start Meeting Tonight" : "התחילו להכיר הערב"
    },
    games: {
      title: isEnglish ? "Games That Connect" : "משחקים שמחברים",
      highlight: isEnglish ? "Tables" : "שולחנות",
      desc: isEnglish ? "Play against other tables in the bar, see them on live video, and raise a chaser together through the screen." : "שחקו מול שולחנות אחרים בבר, תראו אותם בווידאו לייב, ותרימו צ'ייסר ביחד מבעד למסך.",
      items: [
        {
          title: isEnglish ? "Live Video Rooms" : "חדרי וידאו בלייב",
          desc: isEnglish ? "See the competing table in real time, catch the vibe and laugh together." : "רואים את השולחן המתחרה בזמן אמת, קולטים את הווייב וצוחקים יחד."
        },
        {
          title: isEnglish ? "Raise and Drink Together" : "מרימים ושותים ביחד",
          desc: isEnglish ? "Lost a round? Everyone raises a glass and drinks together through the app." : "הפסדתם בסיבוב? כולם מרימים כוסית ושותים ביחד דרך האפליקציה."
        },
        {
          title: isEnglish ? "Table vs Table" : "שולחן מול שולחן",
          desc: isEnglish ? "Compete against other partygoers who are right in the same bar, a few meters away from you." : "התחרו מול בליינים אחרים שנמצאים ממש באותו הבר, במרחק כמה מטרים מכם."
        }
      ],
      cta: isEnglish ? "Join a Table and Play" : "הצטרפו לשולחן ושחקו"
    },
    lifestyle: {
      title: isEnglish ? "Your Next Big Night Is" : "הלילה הגדול הבא שלך",
      highlight: isEnglish ? "Waiting" : "מחכה",
      desc: isEnglish ? "Don't stay home when everyone is out. Join the most vibrant community of partygoers and rediscover the city." : "אל תישארו בבית כשכולם בחוץ. הצטרפו לקהילה התוססת ביותר של בליינים וגלו את העיר מחדש.",
      items: [
        isEnglish ? "Underground parties and secret events" : "מסיבות מחתרת ואירועים סודיים",
        isEnglish ? "Exclusive perks at top bars" : "הטבות בלעדיות בברים המובילים",
        isEnglish ? "Spontaneous encounters with like-minded people" : "הכרויות ספונטניות עם אנשים באותו ראש"
      ]
    },
    reviews: {
      title: isEnglish ? "What" : "מה",
      highlight: isEnglish ? "Partygoers" : "הבליינים",
      suffix: isEnglish ? "Say" : "אומרים",
      items: [
        {
          name: isEnglish ? "Maya Cohen" : "מאיה כהן",
          role: isEnglish ? "Tel Aviv" : "תל אביב",
          text: isEnglish ? "Best night out I've had! Met amazing people through the app and ended up at a party we would never have found." : "היציאה הכי טובה שהייתה לי! הכרתי אנשים מדהימים דרך האפליקציה והגענו למסיבה שלא היינו מוצאים בחיים."
        },
        {
          name: isEnglish ? "Daniel Levi" : "דניאל לוי",
          role: isEnglish ? "Herzliya" : "הרצליה",
          text: isEnglish ? "This app completely changed how we go out. No more 'where are we going tonight?', everything is just there." : "האפליקציה הזאת שינתה לגמרי את איך שאנחנו יוצאים. אין יותר 'לאן הולכים היום?', הכל פשוט שם."
        },
        {
          name: isEnglish ? "Shiran Avraham" : "שירן אברהם",
          role: isEnglish ? "Rishon LeZion" : "ראשון לציון",
          text: isEnglish ? "Highly recommend! The perks at the bars are insane and the community vibe is just electric." : "ממליצה בחום! ההטבות בברים שוות בטירוף והאווירה של הקהילה פשוט מחשמלת."
        }
      ]
    },
    download: {
      title: isEnglish ? "Ready to make your night" : "מוכנים להפוך את הלילה",
      highlight: isEnglish ? "unforgettable?" : "לבלתי נשכח?",
      desc: isEnglish ? "Download now for free and start rediscovering nightlife." : "הורידו עכשיו בחינם והתחילו לגלות את חיי הלילה מחדש.",
      scanIos: isEnglish ? "Scan to download (iOS)" : "סרוק להורדה (iOS)",
      scanAndroid: isEnglish ? "Scan to download (Android)" : "סרוק להורדה (Android)"
    },
    footer: {
      desc: isEnglish ? "Make your night unforgettable. The app that's changing the face of nightlife in Israel." : "הפוך את הלילה שלך לבלתי נשכח. האפליקציה שמשנה את פני חיי הלילה בישראל.",
      linksTitle: isEnglish ? "Links" : "קישורים",
      links: [
        { text: isEnglish ? "About Us" : "אודותינו", url: "/about" },
        { text: isEnglish ? "Contact" : "צור קשר", url: "mailto:info@chugz.app" },
        { text: isEnglish ? "Terms of Use" : "תנאי שימוש", url: "/terms" },
        { text: isEnglish ? "Privacy Policy" : "מדיניות פרטיות", url: "/privacy" }
      ],
      ownersTitle: isEnglish ? "Bar Owners?" : "בעלי ברים?",
      ownersDesc: isEnglish ? "Join the revolution and bring more partygoers to your venue." : "הצטרפו למהפכה והביאו יותר בליינים למקום שלכם.",
      rights: isEnglish ? "All rights reserved." : "כל הזכויות שמורות."
    }
  };

  React.useEffect(() => {
    document.documentElement.dir = isEnglish ? "ltr" : "rtl";
    document.documentElement.lang = isEnglish ? "en" : "he";
  }, [isEnglish]);

  return (
    <div className={`min-h-screen bg-bg-dark text-text-primary overflow-hidden selection:bg-brand-primary selection:text-white ${isEnglish ? 'font-sans' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-brand text-3xl tracking-wider text-brand-primary">
            CHUGZ
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#benefits" className="hover:text-brand-primary transition-colors">{content.nav.benefits}</a>
            <a href="#dating" className="hover:text-brand-primary transition-colors">{content.nav.dating}</a>
            <a href="#games" className="hover:text-brand-primary transition-colors">{content.nav.games}</a>
            <a href="#reviews" className="hover:text-brand-primary transition-colors">{content.nav.reviews}</a>
          </div>
          <a href="#download" className="bg-brand-primary hover:bg-brand-container text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(176,114,220,0.3)] hover:shadow-[0_0_30px_rgba(176,114,220,0.5)]">
            {content.nav.download}
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark/80 to-bg-dark z-10" />
          {/* 🖼️ hero-bg.jpg */}
          <img
            src={IMAGES.heroBg}
            alt="Nightlife atmosphere"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-container/20 rounded-full blur-[150px] mix-blend-screen" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <h1 className="font-brand text-6xl md:text-8xl lg:text-9xl text-brand-primary mb-4 tracking-wider drop-shadow-lg">
                CHUGZ
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {content.hero.title} <br className="hidden md:block" />
                <span className="text-gradient">{content.hero.subtitle}</span>
              </h2>
              <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
                {content.hero.desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#download" className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                  <AppleIcon className="w-7 h-7" />
                  <div className={`leading-none ${isEnglish ? 'text-left' : 'text-right'}`}>
                    <div className="text-[10px] font-normal">{content.hero.downloadAppStore}</div>
                    <div>App Store</div>
                  </div>
                </a>
                <a href="#download" className="flex items-center justify-center gap-3 bg-bg-surface-2 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-bg-surface-3 hover:scale-105 transition-all">
                  <PlayStoreIcon className="w-6 h-6" />
                  <div className={`leading-none ${isEnglish ? 'text-left' : 'text-right'}`}>
                    <div className="text-[10px] font-normal">{content.hero.getGooglePlay}</div>
                    <div>Google Play</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Phone Mockup */}
              <div className="w-[320px] h-[650px] mx-auto bg-bg-surface-1 rounded-[3rem] border-8 border-bg-surface-3 shadow-[0_0_50px_rgba(176,114,220,0.3)] overflow-hidden relative">
                {/* 🖼️ phone-mockup.jpg */}
                <img
                  src={IMAGES.phoneMockup}
                  alt="App screenshot"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-0 right-0 px-6 text-center z-10">
                  <div className="glass-panel rounded-2xl p-4 inline-block">
                    <div className="font-brand text-2xl text-brand-primary mb-1">CHUGZ</div>
                    <div className="text-sm font-bold">הלילה מתחיל עכשיו</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -right-10 glass-panel p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold"> התאמה חדשה </div>
                <div className="text-xs text-text-secondary">נפתח חלון זמן של 15 דקות </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-40 -left-10 glass-panel p-4 rounded-2xl flex items-center gap-3"
            >
              <div className="flex -space-x-2 -space-x-reverse">
                {/* 🖼️ user-1.jpg / user-2.jpg / user-3.jpg */}
                <img src={IMAGES.floatingUser1} className="w-8 h-8 rounded-full border-2 border-bg-surface-1 object-cover" alt="User" />
                <img src={IMAGES.floatingUser2} className="w-8 h-8 rounded-full border-2 border-bg-surface-1 object-cover" alt="User" />
                <img src={IMAGES.floatingUser3} className="w-8 h-8 rounded-full border-2 border-bg-surface-1 object-cover" alt="User" />
              </div>
              <div className="text-sm font-bold"> 5 חברים בפנים</div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-text-secondary">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {content.benefits.title}{" "}
              <span className="text-brand-primary font-brand tracking-wider">CHUGZ</span>
              {isEnglish ? "" : "?"}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">{content.benefits.subtitle}</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Flame className="w-7 h-7" />, color: "brand-primary", item: content.benefits.items[0] },
              { icon: <Zap className="w-7 h-7" />, color: "brand-accent", item: content.benefits.items[1] },
              { icon: <PartyPopper className="w-7 h-7" />, color: "status-success", item: content.benefits.items[2] },
              { icon: <Gamepad2 className="w-7 h-7" />, color: "brand-container", item: content.benefits.items[3] },
            ].map((card, i) => (
              <FadeIn key={i} delay={(i + 1) * 0.1}>
                <div className={`bg-bg-surface-1 rounded-[24px] p-8 h-full border border-white/5 hover:border-${card.color}/30 transition-colors group`}>
                  <div className={`w-14 h-14 rounded-2xl bg-${card.color}/10 flex items-center justify-center text-${card.color} mb-6 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{card.item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{card.item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dating Section */}
      <section id="dating" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              {/* 🖼️ dating-scene.jpg */}
              <div className="w-full rounded-[32px] overflow-hidden border border-brand-primary/30 shadow-[0_0_50px_rgba(176,114,220,0.15)]" style={{ aspectRatio: "16/9" }}>
                <img
                  src={IMAGES.datingScene}
                  alt="Dating scene"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {content.dating.title} <span className="text-brand-primary">{content.dating.highlight}</span>
              </h2>
              <p className="text-2xl text-text-secondary mb-10 font-light">{content.dating.desc}</p>
              <div className="space-y-8 mb-10">
                {[
                  { icon: <MapPin className="w-6 h-6" />, color: "brand-primary", item: content.dating.items[0] },
                  { icon: <Sparkles className="w-6 h-6" />, color: "brand-accent", item: content.dating.items[1] },
                  { icon: <Users className="w-6 h-6" />, color: "status-success", item: content.dating.items[2] },
                ].map((row, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-12 h-12 shrink-0 rounded-2xl bg-${row.color}/10 flex items-center justify-center text-${row.color}`}>
                      {row.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{row.item.title}</h3>
                      <p className="text-text-secondary">{row.item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#download" className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-container text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(176,114,220,0.3)] hover:shadow-[0_0_30px_rgba(176,114,220,0.5)]">
                {content.dating.cta}
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-32 relative bg-bg-surface-1/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <FadeIn className="order-2 lg:order-1">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {content.games.title} <span className="text-brand-accent">{content.games.highlight}</span>
              </h2>
              <p className="text-2xl text-text-secondary mb-10 font-light">{content.games.desc}</p>
              <div className="space-y-8 mb-10">
                {[
                  { icon: <Video className="w-6 h-6" />, color: "brand-primary", item: content.games.items[0] },
                  { icon: <GlassWater className="w-6 h-6" />, color: "brand-accent", item: content.games.items[1] },
                  { icon: <Users className="w-6 h-6" />, color: "status-success", item: content.games.items[2] },
                ].map((row, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`w-12 h-12 shrink-0 rounded-2xl bg-${row.color}/10 flex items-center justify-center text-${row.color}`}>
                      {row.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{row.item.title}</h3>
                      <p className="text-text-secondary">{row.item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn className="order-1 lg:order-2">
              {/* 🖼️ games-scene.jpg */}
              <div className="w-full rounded-[32px] overflow-hidden border border-brand-accent/30 shadow-[0_0_50px_rgba(255,181,70,0.15)]" style={{ aspectRatio: "4/3" }}>
                <img
                  src={IMAGES.gamesScene}
                  alt="Games scene"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "אף פעם לא", subtitle: "Never Have I Ever" },
              { title: "אמת או שקר", subtitle: "Truth or Lie" },
              { title: "טריוויה", subtitle: "Trivia" },
              { title: "סיימון", subtitle: "Simon Says" }
            ].map((game, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-bg-surface-2 rounded-2xl p-4 border border-white/5 text-center hover:border-white/20 transition-colors">
                  <h4 className="font-bold text-lg">{game.title}</h4>
                  <div className="text-xs text-text-secondary font-brand tracking-wider">{game.subtitle}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <a href="#download" className="inline-flex items-center justify-center bg-bg-surface-2 border border-white/10 hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              {content.games.cta}
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 skew-y-3 transform origin-bottom-left z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                {/* 🖼️ lifestyle-1.jpg */}
                <div className="rounded-[32px] overflow-hidden w-full h-[300px] mt-12 shadow-2xl border border-white/10">
                  <img src={IMAGES.lifestyle1} alt="Friends cheering" className="w-full h-full object-cover" />
                </div>
                {/* 🖼️ lifestyle-2.jpg */}
                <div className="rounded-[32px] overflow-hidden w-full h-[350px] shadow-2xl border border-white/10">
                  <img src={IMAGES.lifestyle2} alt="Group at bar" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -inset-4 bg-brand-primary/20 blur-[100px] -z-10 rounded-full" />
            </FadeIn>

            <FadeIn className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {content.lifestyle.title}{" "}
                <span className="text-brand-primary">{content.lifestyle.highlight}</span>
              </h2>
              <p className="text-2xl text-text-secondary mb-8 font-light">{content.lifestyle.desc}</p>
              <ul className="space-y-4 mb-10">
                {content.lifestyle.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-32 bg-bg-surface-1/50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {content.reviews.title} <span className="text-brand-primary">{content.reviews.highlight}</span> {content.reviews.suffix}
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { review: content.reviews.items[0], img: IMAGES.reviewMaya },
              { review: content.reviews.items[1], img: IMAGES.reviewDaniel },
              { review: content.reviews.items[2], img: IMAGES.reviewShiran },
            ].map(({ review, img }, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass-panel p-8 rounded-[24px]">
                  <div className="flex gap-1 text-brand-accent mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg mb-8 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    {/* 🖼️ review-maya.jpg / review-daniel.jpg / review-shiran.jpg */}
                    <img src={img} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-text-secondary">{review.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-brand-primary/30 blur-[150px] rounded-full -z-10" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {content.download.title} <br />
              <span className="text-gradient">{content.download.highlight}</span>
            </h2>
            <p className="text-2xl text-text-secondary mb-12 max-w-2xl mx-auto">{content.download.desc}</p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-10 py-5 rounded-[24px] font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                <AppleIcon className="w-9 h-9" />
                <div className={`leading-none ${isEnglish ? 'text-left' : 'text-right'}`}>
                  <div className="text-xs font-normal mb-1">{content.hero.downloadAppStore}</div>
                  <div>App Store</div>
                </div>
              </a>
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-4 bg-bg-surface-2 border-2 border-white/10 text-white px-10 py-5 rounded-[24px] font-bold text-xl hover:bg-bg-surface-3 hover:scale-105 transition-all">
                <PlayStoreIcon className="w-8 h-8" />
                <div className={`leading-none ${isEnglish ? 'text-left' : 'text-right'}`}>
                  <div className="text-xs font-normal mb-1">{content.hero.getGooglePlay}</div>
                  <div>Google Play</div>
                </div>
              </a>
            </div>

            <div className="mt-16 flex justify-center gap-8 opacity-60">
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-white rounded-2xl p-2">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://chugz.app/ios" alt="iOS QR" className="w-full h-full" />
                </div>
                <span className="text-sm">{content.download.scanIos}</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 bg-white rounded-2xl p-2">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://chugz.app/android" alt="Android QR" className="w-full h-full" />
                </div>
                <span className="text-sm">{content.download.scanAndroid}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-surface-1 border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="font-brand text-4xl text-brand-primary mb-6">CHUGZ</div>
              <p className="text-text-secondary max-w-sm mb-8">{content.footer.desc}</p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-bg-surface-3 flex items-center justify-center hover:bg-brand-primary transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{content.footer.linksTitle}</h4>
              <ul className="space-y-4 text-text-secondary">
                {content.footer.links.map((link, i) => (
                  <li key={i}>
                    {link.url.startsWith('mailto:') ? (
                      <a href={link.url} className="hover:text-white transition-colors">{link.text}</a>
                    ) : (
                      <Link to={link.url} className="hover:text-white transition-colors">{link.text}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{content.footer.ownersTitle}</h4>
              <p className="text-text-secondary mb-4">{content.footer.ownersDesc}</p>
              <a href="https://wa.me/972556826309" className="inline-flex items-center gap-2 text-status-success hover:text-white transition-colors font-bold">
                WhatsApp: +972-55-682-6309
              </a>
              <div className="mt-8">
                <a href="mailto:info@chugz.app" className="text-text-secondary hover:text-white transition-colors">info@chugz.app</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-text-secondary">
            <p>© {new Date().getFullYear()} Chugz. {content.footer.rights}</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button onClick={() => setIsEnglish(false)} className={`transition-colors ${!isEnglish ? 'text-white font-bold' : 'hover:text-white'}`}>עברית</button>
              <span>|</span>
              <button onClick={() => setIsEnglish(true)} className={`transition-colors ${isEnglish ? 'text-white font-bold' : 'hover:text-white'}`}>English</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
