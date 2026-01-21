import { motion } from 'framer-motion'
import { SectionTitle } from './SectionTitle'

const services = [
    {
        title: "تطوير التطبيقات",
        desc: "نصمم ونطور تطبيقات iOS و Android أصلية (Native) وهجينة (Cross-platform) بأداء يضاهي التطبيقات العالمية، مع تركيز كامل على تجربة المستخدم.",
        icon: "📱"
    },
    {
        title: "مواقع ويب تفاعلية",
        desc: "مواقع ويب حديثة تستخدم أحدث تقنيات 3D و WebGL. ليست مجرد صفحات، بل تجارب رقمية غامرة تأسر زوارك.",
        icon: "💻"
    },
    {
        title: "أنظمة سحابية",
        desc: "بنية تحتية سحابية متينة وقابلة للتوسع. نتعامل مع الـ Backend والبيانات الضخمة (Big Data) لضمان استقرار مشروعك.",
        icon: "☁️"
    },
    {
        title: "تحسين تجربة المستخدم",
        desc: "دراسات معمقة لسلوك المستخدم لتحسين واجهاتك وزيادة معدلات التحويل (Conversion Rates).",
        icon: "🎨"
    },
    {
        title: "الذكاء الاصطناعي",
        desc: "دمج حلول الذكاء الاصطناعي في تطبيقاتك لأتمتة المهام وتقديم تجارب ذكية للمستخدمين.",
        icon: "🤖"
    },
    {
        title: "المتاجر الإلكترونية",
        desc: "بناء متاجر إلكترونية متكاملة تدعم جميع بوابات الدفع وتوفر تجربة شراء سلسة وآمنة.",
        icon: "🛒"
    }
]

export const Services = () => {
    return (
        <section id="services" className="relative z-10 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <SectionTitle
                    title="خدماتنا المتميزة"
                    subtitle="ماذا نقدم؟"
                    className="text-center md:text-right"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all group cursor-default relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-600/20 transition-colors" />

                            <div className="text-5xl mb-6 relative z-10 filter drop-shadow-lg">{service.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors relative z-10">{service.title}</h3>
                            <p className="text-white/60 leading-relaxed text-base relative z-10 group-hover:text-white/80 transition-colors">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
