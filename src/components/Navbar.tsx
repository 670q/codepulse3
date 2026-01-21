import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export const Navbar = () => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { t, toggleLanguage, language } = useLanguage()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0
        if (latest > previous && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
        setScrolled(latest > 50)
    })

    const navLinks = [
        { name: t.nav.services, href: "#services" },
        { name: t.nav.work, href: "#work" },
        { name: t.nav.contact, href: "#contact" }
    ]

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center items-center p-4 pointer-events-none transition-colors duration-300 ${scrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-4 py-3 rounded-full border transition-all duration-300 ${scrolled
                    ? 'bg-black/80 border-white/10 backdrop-blur-md shadow-lg shadow-purple-500/10'
                    : 'bg-transparent border-transparent'
                    }`}>

                    {/* Left Side: Logo */}
                    <a href="#" className="flex items-center gap-2 group mr-2 sm:mr-4">
                        <div className="text-xl sm:text-2xl font-bold tracking-wider">
                            <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">CODE</span>
                            <span className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] ml-2">PULSE</span>
                        </div>
                    </a>

                    {/* Middle: Desktop Links */}
                    <div className="hidden md:flex items-center gap-1 mx-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Side: Actions */}
                    <div className="flex items-center gap-2">
                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1 text-sm font-bold text-white/50 hover:text-purple-400 transition-colors uppercase"
                        >
                            {language === 'ar' ? 'EN' : 'AR'}
                        </button>

                        {/* CTA Button (Desktop) */}
                        <a
                            href="#contact"
                            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-purple-50 transition-all transform hover:scale-105"
                        >
                            <span>{t.nav.cta}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-white/80 hover:text-white z-50 relative"
                            aria-label="Toggle Menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {isOpen ? (
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                                    </>
                                ) : (
                                    <>
                                        <line x1="3" y1="12" x2="21" y2="12"></line>
                                        <line x1="3" y1="6" x2="21" y2="6"></line>
                                        <line x1="3" y1="18" x2="21" y2="18"></line>
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((item, idx) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                className="text-3xl font-bold text-white hover:text-purple-400 transition-colors"
                            >
                                {item.name}
                            </motion.a>
                        ))}

                        <motion.a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        >
                            {t.nav.contact}
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
