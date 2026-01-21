import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionTitleProps {
    title: string
    subtitle?: string
    className?: string
}

export const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div ref={ref} className={`mb-12 ${className}`}>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-purple-400 font-medium tracking-wider text-sm mb-3 uppercase"
                >
                    {subtitle}
                </motion.p>
            )}
            <div className="overflow-hidden">
                <motion.h2
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth ease
                    className="text-3xl md:text-5xl font-bold text-white leading-tight"
                >
                    {title}
                </motion.h2>
            </div>
        </div>
    )
}
