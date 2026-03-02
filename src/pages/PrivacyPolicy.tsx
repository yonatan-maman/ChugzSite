import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const [isEnglish, setIsEnglish] = React.useState(false);

  const content = {
    title: isEnglish ? "Privacy Policy" : "מדיניות פרטיות",
    lastUpdated: isEnglish ? "Last Updated" : "עודכן לאחרונה",
    date: "2024-01-01",
    intro: isEnglish
      ? "At CHUGZ, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application."
      : "ב-CHUGZ, אנו מתייחסים לפרטיות שלך ברצינות. מדיניות הפרטיות הזו מסבירה כיצד אנו אוספים, משתמשים, חושפים ושומרים על המידע שלך בעת השימוש באפליקציית הנייד שלנו.",
    sections: [
      {
        title: isEnglish ? "1. Information We Collect" : "1. מידע שאנו אוספים",
        text: isEnglish
          ? "We collect information that you provide directly to us, such as when you create an account, update your profile, make a purchase, or contact us for support. This may include your name, email address, phone number, location data, and profile photos."
          : "אנו אוספים מידע שאתה מספק לנו ישירות, כגון בעת יצירת חשבון, עדכון הפרופיל שלך, ביצוע רכישה או יצירת קשר איתנו לתמיכה. זה עשוי לכלול את שמך, כתובת הדוא\"ל, מספר הטלפון, נתוני מיקום ותמונות פרופיל."
      },
      {
        title: isEnglish ? "2. How We Use Your Information" : "2. כיצד אנו משתמשים במידע שלך",
        text: isEnglish
          ? "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, communicate with you about products and services, and monitor and analyze trends and usage."
          : "אנו משתמשים במידע שאנו אוספים כדי לספק, לתחזק ולשפר את השירותים שלנו, לעבד עסקאות, לשלוח לך הודעות טכניות והודעות תמיכה, לתקשר איתך על מוצרים ושירותים, ולנטר ולנתח מגמות ושימוש."
      },
      {
        title: isEnglish ? "3. Location Information" : "3. מידע על מיקום",
        text: isEnglish
          ? "CHUGZ uses location services to help you find nearby events, venues, and other users. You can control location sharing through your device settings. We only collect location data when the app is actively being used."
          : "CHUGZ משתמש בשירותי מיקום כדי לעזור לך למצוא אירועים, מקומות ומשתמשים אחרים בקרבת מקום. אתה יכול לשלוט בשיתוף מיקום דרך הגדרות המכשיר שלך. אנו אוספים נתוני מיקום רק כאשר האפליקציה בשימוש פעיל."
      },
      {
        title: isEnglish ? "4. Information Sharing" : "4. שיתוף מידע",
        text: isEnglish
          ? "We do not sell your personal information. We may share your information with service providers who perform services on our behalf, in connection with a business transfer, to comply with legal obligations, or to protect our rights and safety."
          : "אנו לא מוכרים את המידע האישי שלך. אנו עשויים לשתף את המידע שלך עם ספקי שירותים המבצעים שירותים מטעמנו, בקשר להעברת עסק, כדי לעמוד בהתחייבויות משפטיות, או כדי להגן על הזכויות והבטיחות שלנו."
      },
      {
        title: isEnglish ? "5. Data Security" : "5. אבטחת נתונים",
        text: isEnglish
          ? "We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure."
          : "אנו מיישמים אמצעי אבטחה טכניים וארגוניים מתאימים כדי להגן על המידע האישי שלך. עם זאת, אין שיטת העברה דרך האינטרנט או אחסון אלקטרוני שהיא מאובטחת ב-100%."
      },
      {
        title: isEnglish ? "6. Your Rights" : "6. הזכויות שלך",
        text: isEnglish
          ? "You have the right to access, update, or delete your personal information. You can also opt-out of certain communications from us. To exercise these rights, please contact us using the information provided below."
          : "יש לך זכות לגשת, לעדכן או למחוק את המידע האישי שלך. אתה יכול גם לבחור שלא לקבל תקשורת מסוימת מאיתנו. כדי לממש זכויות אלה, אנא צור איתנו קשר באמצעות המידע המפורט להלן."
      },
      {
        title: isEnglish ? "7. Children's Privacy" : "7. פרטיות ילדים",
        text: isEnglish
          ? "CHUGZ is not intended for users under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately."
          : "CHUGZ אינו מיועד למשתמשים מתחת לגיל 18. אנו לא אוספים במודע מידע אישי מילדים מתחת לגיל 18. אם אתה מאמין שאספנו מידע מילד מתחת לגיל 18, אנא צור איתנו קשר מיד."
      },
      {
        title: isEnglish ? "8. Changes to This Policy" : "8. שינויים במדיניות זו",
        text: isEnglish
          ? "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date."
          : "אנו עשויים לעדכן את מדיניות הפרטיות הזו מעת לעת. אנו נודיע לך על כל שינוי על ידי פרסום מדיניות הפרטיות החדשה בדף זה ועדכון תאריך 'עודכן לאחרונה'."
      }
    ],
    contact: isEnglish ? "If you have any questions about this Privacy Policy, please contact us at:" : "אם יש לך שאלות כלשהן לגבי מדיניות הפרטיות הזו, אנא צור איתנו קשר ב:",
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
            <p className="text-text-secondary mb-4">{content.intro}</p>
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
              transition={{ duration: 0.6, delay: 0.8 }}
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
