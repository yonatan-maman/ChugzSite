import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Users, Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [isEnglish, setIsEnglish] = React.useState(false);

  const content = {
    title: isEnglish ? "About Us" : "אודותינו",
    subtitle: isEnglish 
      ? "We're revolutionizing nightlife, one night at a time"
      : "אנחנו מהפכנים את חיי הלילה, לילה אחד בכל פעם",
    mission: {
      title: isEnglish ? "Our Mission" : "המשימה שלנו",
      text: isEnglish
        ? "CHUGZ was born from a simple idea: nightlife should be more connected, more fun, and more spontaneous. We're building the platform that brings people together in real life, at real places, for real moments."
        : "CHUGZ נולד מרעיון פשוט: חיי הלילה צריכים להיות יותר מחוברים, יותר כיפיים ויותר ספונטניים. אנו בונים את הפלטפורמה שמחברת אנשים בחיים האמיתיים, במקומות אמיתיים, לרגעים אמיתיים."
    },
    vision: {
      title: isEnglish ? "Our Vision" : "החזון שלנו",
      text: isEnglish
        ? "We envision a world where every night out is an adventure waiting to happen. Where connections are made naturally, games bring tables together, and the best of nightlife is just a tap away."
        : "אנו רואים עולם שבו כל יציאה לילה היא הרפתקה שמחכה לקרות. שבו חיבורים נוצרים באופן טבעי, משחקים מחברים שולחנות, והטוב ביותר של חיי הלילה נמצא במרחק הקשה אחת."
    },
    values: [
      {
        icon: <Users className="w-8 h-8" />,
        title: isEnglish ? "Community First" : "קהילה קודם",
        text: isEnglish
          ? "We believe in the power of bringing people together. Every feature we build is designed to create real connections."
          : "אנו מאמינים בכוח של חיבור אנשים. כל תכונה שאנו בונים נועדה ליצור חיבורים אמיתיים."
      },
      {
        icon: <Sparkles className="w-8 h-8" />,
        title: isEnglish ? "Innovation" : "חדשנות",
        text: isEnglish
          ? "We're constantly pushing boundaries to make nightlife experiences better, more engaging, and more memorable."
          : "אנו דוחפים ללא הרף את הגבולות כדי להפוך את חוויית חיי הלילה לטובה יותר, יותר מעורבת ויותר בלתי נשכחת."
      },
      {
        icon: <Heart className="w-8 h-8" />,
        title: isEnglish ? "Authenticity" : "אותנטיות",
        text: isEnglish
          ? "Real places, real people, real moments. We're not about filters or fake experiences - we're about genuine connections."
          : "מקומות אמיתיים, אנשים אמיתיים, רגעים אמיתיים. אנחנו לא על פילטרים או חוויות מזויפות - אנחנו על חיבורים אמיתיים."
      }
    ],
    story: {
      title: isEnglish ? "Our Story" : "הסיפור שלנו",
      text: isEnglish
        ? "CHUGZ started when a group of friends realized that going out had become too complicated. Too many apps, too many options, but not enough real connections. We set out to change that - to create one app that does it all: helps you find the best spots, meet amazing people, play games together, and make every night unforgettable. Today, CHUGZ is growing fast, connecting partygoers across Israel, and we're just getting started."
        : "CHUGZ התחיל כאשר קבוצת חברים הבינה שיציאה החוצה הפכה מסובכת מדי. יותר מדי אפליקציות, יותר מדי אפשרויות, אבל לא מספיק חיבורים אמיתיים. יצאנו לשנות את זה - ליצור אפליקציה אחת שעושה הכל: עוזרת לך למצוא את המקומות הטובים ביותר, להכיר אנשים מדהימים, לשחק יחד, ולהפוך כל לילה לבלתי נשכח. היום, CHUGZ גדל במהירות, מחבר בליינים ברחבי ישראל, ואנחנו רק מתחילים."
    },
    contact: {
      title: isEnglish ? "Get in Touch" : "צור קשר",
      text: isEnglish
        ? "Have questions? Want to partner with us? We'd love to hear from you!"
        : "יש שאלות? רוצה לשתף פעולה איתנו? נשמח לשמוע ממך!",
      email: "info@chugz.app",
      whatsapp: "+972-55-682-6309"
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
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-container mb-8 transition-colors"
            >
              <ArrowRight className={`w-5 h-5 ${isEnglish ? 'rotate-180' : ''}`} />
              {isEnglish ? "Back to Home" : "חזרה לעמוד הבית"}
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">{content.title}</h1>
            <p className="text-2xl text-text-secondary mb-12">{content.subtitle}</p>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel p-8 rounded-[24px] mb-8"
            >
              <h2 className="text-3xl font-bold mb-4 text-brand-primary">{content.mission.title}</h2>
              <p className="text-text-secondary leading-relaxed text-lg">{content.mission.text}</p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-8 rounded-[24px] mb-8"
            >
              <h2 className="text-3xl font-bold mb-4 text-brand-accent">{content.vision.title}</h2>
              <p className="text-text-secondary leading-relaxed text-lg">{content.vision.text}</p>
            </motion.div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {content.values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass-panel p-6 rounded-[24px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{value.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-panel p-8 rounded-[24px] mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">{content.story.title}</h2>
              <p className="text-text-secondary leading-relaxed text-lg">{content.story.text}</p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-panel p-8 rounded-[24px] border border-brand-primary/30"
            >
              <h2 className="text-3xl font-bold mb-4 text-brand-primary">{content.contact.title}</h2>
              <p className="text-text-secondary mb-6">{content.contact.text}</p>
              <div className="space-y-3">
                <a 
                  href={`mailto:${content.contact.email}`} 
                  className="block text-brand-primary hover:text-brand-container transition-colors font-bold"
                >
                  {content.contact.email}
                </a>
                <a 
                  href={`https://wa.me/${content.contact.whatsapp.replace(/[^0-9]/g, '')}`} 
                  className="block text-status-success hover:text-white transition-colors font-bold"
                >
                  WhatsApp: {content.contact.whatsapp}
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
