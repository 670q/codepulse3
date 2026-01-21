import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Experience } from './Experience'
import { useLanguage } from '../contexts/LanguageContext'

interface HeroProps {
    textureUrl: string | null
    fileInputRef: React.RefObject<HTMLInputElement | null>
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    triggerFileInput: () => void
}

export const Hero = ({ textureUrl, fileInputRef, handleFileChange, triggerFileInput }: HeroProps) => {
    const { t } = useLanguage()

    return (
        <section id="hero" className="relative w-full min-h-[100dvh] flex items-center pt-24 md:pt-0 overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0" style={{ touchAction: 'pan-y' }}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    shadows
                    dpr={[1, 1.5]}
                    gl={{ antialias: true, alpha: true }}
                >
                    <Suspense fallback={null}>
                        <Experience textureUrl={textureUrl} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 w-full h-full px-6 sm:px-12 pointer-events-none flex flex-col md:flex-row items-center justify-center md:justify-start pb-20 md:pb-0">
                <div className="w-full md:w-1/2 space-y-8 text-center md:text-start mt-32 md:mt-0 pointer-events-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl sm:text-7xl font-black tracking-tighter leading-[1.1] drop-shadow-2xl"
                    >
                        <span className="block text-white mb-2">
                            {t.hero.prefix}
                        </span>
                        <span className="block bg-clip-text text-transparent bg-gradient-to-l from-purple-400 via-blue-500 to-purple-600 animate-gradient-x">
                            {t.hero.highlight}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed font-light mx-auto md:mx-0 backdrop-blur-sm bg-black/10 p-4 rounded-xl border border-white/5"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept="image/*"
                        />
                        <button
                            onClick={triggerFileInput}
                            className="pointer-events-auto group relative px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all flex items-center gap-3 text-sm overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                            <span>{t.hero.tryDesign}</span>
                        </button>
                        <a
                            href="https://wa.me/message/K3AEW6WKCK37L1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 text-white font-medium rounded-full transition-all backdrop-blur-md text-sm cursor-pointer"
                        >
                            {t.hero.orderNow}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
