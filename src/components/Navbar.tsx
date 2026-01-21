import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-5'}`}
            >
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="text-2xl font-bold tracking-wider">
                        <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">CODE</span>
                        <span className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] ml-2">PULSE</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {[
                        { label: 'الرئيسية', href: '#hero' },
                        { label: 'خدماتنا', href: '#services' },
                        { label: 'أعمالنا', href: '#work' },
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="relative text-sm font-medium text-white/60 hover:text-white transition-colors py-2"
                        >
                            {item.label}
                            {/* Hover underline effect usually requires grouping or layoutId, simplified here */}
                        </a>
                    ))}
                </div>

                {/* Contact Button (Desktop) */}
                <motion.a
                    href="https://wa.me/message/K3AEW6WKCK37L1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block px-6 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white text-xs font-bold transition-all"
                >
                    تواصل معنا
                </motion.a>

                {/* Mobile Hamburger Button */}
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
                        {[
                            { label: 'الرئيسية', href: '#hero' },
                            { label: 'خدماتنا', href: '#services' },
                            { label: 'أعمالنا', href: '#work' },
                        ].map((item, idx) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                className="text-3xl font-bold text-white hover:text-purple-400 transition-colors"
                            >
                                {item.label}
                            </motion.a>
                        ))}

                        <motion.a
                            href="https://wa.me/message/K3AEW6WKCK37L1"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 px-8 py-3 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        >
                            تواصل معنا
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
