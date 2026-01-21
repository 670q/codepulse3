import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations } from '../i18n/translations';

type Language = 'ar' | 'en';
type Translations = typeof translations.ar;

interface LanguageContextType {
    language: Language;
    t: Translations;
    toggleLanguage: () => void;
    isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Default to 'ar' unless user explicitly prefers English or browser is English
    const [language, setLanguage] = useState<Language>(() => {
        const browserLang = navigator.language.split('-')[0];
        return browserLang === 'ar' ? 'ar' : 'en'; // Default to English if not Arabic, or switch logic if you want primary Arabic
    });

    useEffect(() => {
        // Update document attributes
        const root = document.documentElement;
        const dir = language === 'ar' ? 'rtl' : 'ltr';
        root.dir = dir;
        root.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
    };

    const value = {
        language,
        t: translations[language],
        toggleLanguage,
        isRTL: language === 'ar'
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
