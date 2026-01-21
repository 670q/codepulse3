import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'
import { useLanguage } from '../contexts/LanguageContext'

const projectImages = [
    "/images/project1.webp",
    "/images/mood-shift.webp",
    "/images/project3.webp"
]

export const Work = () => {
    const { t } = useLanguage()

    return (
        <section id="work" className="relative z-10 py-32 px-6 bg-[#0a0a0a] overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <SectionTitle
                        title={t.work.title}
                        subtitle={t.work.subtitle}
                        className="mb-0 text-start w-full md:w-auto"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {t.work.projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
                        >
                            {/* Project Image */}
                            <img
                                src={projectImages[idx]}
                                alt={project.title}
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <motion.span
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-purple-400 font-mono text-xs mb-2 uppercase tracking-widest relative z-10"
                                >
                                    {project.category}
                                </motion.span>
                                <motion.h3
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl font-bold text-white group-hover:-translate-y-2 transition-transform duration-300 relative z-10"
                                >
                                    {project.title}
                                </motion.h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
