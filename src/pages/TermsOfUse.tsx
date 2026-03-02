import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function TermsOfUse() {
  const [isEnglish, setIsEnglish] = React.useState(false);

  const content = {
    title: isEnglish ? "Terms of Use" : "תנאי שימוש",
    lastUpdated: isEnglish ? "Last Updated" : "עודכן לאחרונה",
    date: "2024-01-01",
    sections: [
      {
        title: isEnglish ? "1. Acceptance of Terms" : "1. קבלת התנאים",
        text: isEnglish 
          ? "By accessing and using the CHUGZ application, you accept and agree to be bound by the terms and provision of this agreement."
          : "על ידי גישה ושימוש באפליקציית CHUGZ, אתה מקבל ומסכים להיות מחויב לתנאים והוראות של הסכם זה."
      },
      {
        title: isEnglish ? "2. Use License" : "2. רישיון שימוש",
        text: isEnglish
          ? "Permission is granted to temporarily download one copy of CHUGZ for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained in CHUGZ; remove any copyright or other proprietary notations from the materials."
          : "ניתנת הרשאה להוריד זמנית עותק אחד של CHUGZ לצפייה אישית, לא מסחרית וזמנית בלבד. זו מתן רישיון, לא העברת בעלות, ובמסגרת רישיון זה אסור לך: לשנות או להעתיק את החומרים; להשתמש בחומרים לכל מטרה מסחרית או לתצוגה ציבורית; לנסות לפרק או להנדס לאחור כל תוכנה הכלולה ב-CHUGZ; להסיר כל זכויות יוצרים או סימונים קנייניים אחרים מהחומרים."
      },
      {
        title: isEnglish ? "3. User Account" : "3. חשבון משתמש",
        text: isEnglish
          ? "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password."
          : "אתה אחראי לשמירה על סודיות החשבון והסיסמה שלך. אתה מסכים לקבל אחריות על כל הפעילויות המתרחשות תחת החשבון או הסיסמה שלך."
      },
      {
        title: isEnglish ? "4. Prohibited Uses" : "4. שימושים אסורים",
        text: isEnglish
          ? "You may not use CHUGZ in any way that causes, or may cause, damage to the application or impairment of the availability or accessibility of CHUGZ; or in any way which is unlawful, illegal, fraudulent or harmful."
          : "אסור לך להשתמש ב-CHUGZ בכל דרך הגורמת, או עלולה לגרום, נזק לאפליקציה או פגיעה בזמינות או נגישות של CHUGZ; או בכל דרך שהיא בלתי חוקית, בלתי חוקית, הונאה או מזיקה."
      },
      {
        title: isEnglish ? "5. Privacy" : "5. פרטיות",
        text: isEnglish
          ? "Your use of CHUGZ is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices."
          : "השימוש שלך ב-CHUGZ כפוף גם למדיניות הפרטיות שלנו. אנא עיין במדיניות הפרטיות שלנו כדי להבין את הפרקטיקות שלנו."
      },
      {
        title: isEnglish ? "6. Limitation of Liability" : "6. הגבלת אחריות",
        text: isEnglish
          ? "In no event shall CHUGZ or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use CHUGZ."
          : "בשום מקרה CHUGZ או הספקים שלה לא יהיו אחראים לכל נזקים (כולל, ללא הגבלה, נזקים בגין אובדן נתונים או רווח, או עקב הפרעה עסקית) הנובעים משימוש או חוסר יכולת להשתמש ב-CHUGZ."
      },
      {
        title: isEnglish ? "7. Revisions" : "7. תיקונים",
        text: isEnglish
          ? "CHUGZ may revise these terms of use at any time without notice. By using CHUGZ you are agreeing to be bound by the then current version of these terms of use."
          : "CHUGZ רשאית לעדכן את תנאי השימוש הללו בכל עת ללא הודעה. על ידי שימוש ב-CHUGZ אתה מסכים להיות מחויב לגרסה הנוכחית של תנאי השימוש הללו."
      }
    ],
    contact: isEnglish ? "If you have any questions about these Terms of Use, please contact us at:" : "אם יש לך שאלות כלשהן לגבי תנאי השימוש הללו, אנא צור איתנו קשר ב:",
    email: "info@chugz.app"
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
            <p className="text-text-secondary mb-12">
              {content.lastUpdated}: {content.date}
            </p>

            <div className="space-y-8">
              {content.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-panel p-8 rounded-[24px]"
                >
                  <h2 className="text-2xl font-bold mb-4 text-brand-primary">{section.title}</h2>
                  <p className="text-text-secondary leading-relaxed">{section.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 glass-panel p-8 rounded-[24px] border border-brand-primary/30"
            >
              <p className="text-text-secondary mb-2">{content.contact}</p>
              <a href={`mailto:${content.email}`} className="text-brand-primary hover:text-brand-container transition-colors font-bold">
                {content.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
