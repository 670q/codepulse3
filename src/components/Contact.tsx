import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const Contact = () => {
    const { t } = useLanguage()

    return (
        <footer id="contact" className="relative z-10 pt-32 pb-10 px-6 bg-black border-t border-white/10 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20 tracking-tighter">
                            {t.contact.title}
                        </h2>
                    </motion.div>

                    <p className="text-xl text-white/50 mb-10 max-w-lg leading-relaxed">
                        {t.contact.subtitle}
                    </p>

                    <motion.a
                        href="https://wa.me/message/K3AEW6WKCK37L1"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all"
                    >
                        {t.contact.submit}
                    </motion.a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-white/40">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                    <div>
                        &copy; {new Date().getFullYear()} {t.hero.codePulse}. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-purple-900/20 blur-[100px] pointer-events-none rounded-full" />
        </footer>
    )
}
