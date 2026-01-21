import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Code, 
  Smartphone, 
  Cpu, 
  Globe, 
  CheckCircle, 
  Upload, 
  Mail, 
  Phone, 
  Menu,
  X,
  Layers
} from 'lucide-react';

// --- Shared Data ---
const services = [
  { icon: Smartphone, title: 'تطبيقات الجوال', desc: 'تطبيقات احترافية لنظامي iOS و Android.' },
  { icon: Globe, title: 'تطوير الويب', desc: 'مواقع تفاعلية وسريعة بأحدث التقنيات.' },
  { icon: Layers, title: 'UI/UX تصميم', desc: 'واجهات مستخدم عصرية تركز على التجربة.' },
  { icon: Cpu, title: 'حلول الذكاء الاصطناعي', desc: 'أنظمة ذكية لتحليل البيانات والأتمتة.' },
  { icon: Code, title: 'أنظمة SaaS', desc: 'برمجيات سحابية قابلة للتوسع.' },
  { icon: CheckCircle, title: 'ضمان الجودة', desc: 'اختبارات دقيقة لضمان خلو النظام من الأخطاء.' },
];

const stats = [
  { value: '+50', label: 'مشروع ناجح' },
  { value: '98%', label: 'رضا العملاء' },
  { value: '+10', label: 'سنوات خبرة' },
  { value: '24/7', label: 'دعم فني' },
];

export default function CodePulseLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-purple-500 selection:text-white" dir="rtl">
      
      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-purple-600">
            <Zap className="fill-purple-600 animate-pulse" size={28} />
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Code Pulse
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-purple-400 transition-colors">خدماتنا</a>
            <a href="#visualizer" className="hover:text-purple-400 transition-colors">المحاكي</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">من نحن</a>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(147,51,234,0.5)] hover:shadow-[0_0_25px_rgba(147,51,234,0.7)]">
              ابدأ مشروعك
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4 text-center">
                <a href="#services" onClick={() => setIsMenuOpen(false)}>خدماتنا</a>
                <a href="#visualizer" onClick={() => setIsMenuOpen(false)}>المحاكي</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>من نحن</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] animate-pulse delay-1000" />

        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              نحول الأفكار إلى <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                نبض رقمي مستمر
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              نحن نبني حلولاً برمجية متطورة تجمع بين الأداء العالي والتصميم المذهل، لننقل مشروعك إلى المستقبل.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]">
                تواصل معنا
              </button>
              <a href="#visualizer" className="px-8 py-4 rounded-full text-lg font-medium border border-white/10 hover:bg-white/5 transition-all backdrop-blur-sm">
                جرب المحاكي
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-20 border-y border-white/5 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا المتميزة</h2>
            <p className="text-slate-400">حلول تقنية متكاملة تلامس احتياجاتك</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-900 border border-white/5 p-8 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <service.icon className="text-purple-500 mb-6 group-hover:text-purple-400 transition-colors" size={40} />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Visualizer Tool --- */}
      <VisualizerSection />

      {/* --- Contact & Footer --- */}
      <section className="py-32 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">جاهز لبدء مشروعك القادم؟</h2>
            <p className="text-purple-200 mb-10 text-lg max-w-2xl mx-auto relative z-10">
              دعنا نساعدك في تحويل فكرتك إلى واقع ملموس بأعلى معايير الجودة.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative z-10">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-md">
                <Mail className="text-purple-300" />
                <span>hello@codepulse.com</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-md">
                <Phone className="text-purple-300" />
                <span>+966 50 000 0000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center text-slate-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-purple-600" />
            <span className="text-white font-bold">Code Pulse</span>
          </div>
          <p>© 2024 جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}

// --- Visualizer Component ---
function VisualizerSection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [phoneType, setPhoneType] = useState<'iphone' | 'android'>('iphone');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
    }
  };

  return (
    <section id="visualizer" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Controls Side */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                <Smartphone className="text-purple-500" />
                محاكي التطبيقات
              </h2>
              <p className="text-slate-400 text-lg">
                شاهد شعارك أو واجهة تطبيقك تنبض بالحياة داخل أحدث الهواتف. قم برفع الصورة واستمتع بالتجربة.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-white/10 space-y-6">
              {/* Phone Type Toggle */}
              <div className="flex items-center justify-between">
                <span className="font-medium text-slate-300">نوع الهاتف</span>
                <div className="bg-slate-800 p-1 rounded-lg flex items-center">
                  <button
                    onClick={() => setPhoneType('iphone')}
                    className={`px-4 py-2 rounded-md transition-all text-sm ${
                      phoneType === 'iphone' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    iPhone
                  </button>
                  <button
                    onClick={() => setPhoneType('android')}
                    className={`px-4 py-2 rounded-md transition-all text-sm ${
                      phoneType === 'android' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Android
                  </button>
                </div>
              </div>

              {/* Upload Area */}
              <div 
                className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-purple-500/50 hover:bg-white/5 transition-all cursor-pointer group"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="text-purple-400" />
                </div>
                <p className="text-sm text-slate-300 mb-2">اضغط لرفع صورة الشعار</p>
                <p className="text-xs text-slate-500">PNG, JPG (Max 5MB)</p>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleFileUpload}
                />
              </div>
            </div>
          </div>

          {/* Phone Mockup Side */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Pulse Effect Behind Phone */}
              <div className="absolute inset-0 -z-10 bg-purple-600/30 blur-[60px] animate-pulse" />
              
              {/* Phone Frame */}
              <motion.div 
                layout
                className={`relative bg-black border-slate-700 shadow-2xl overflow-hidden transition-all duration-500 z-10
                  ${phoneType === 'iphone' 
                    ? 'w-[300px] h-[600px] rounded-[50px] border-[8px]' 
                    : 'w-[310px] h-[620px] rounded-[30px] border-[4px]'
                  }
                `}
              >
                {/* Notch / Punch Hole */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black transition-all duration-500
                   ${phoneType === 'iphone' 
                     ? 'w-24 h-7 rounded-b-xl top-2' 
                     : 'w-4 h-4 rounded-full top-4 left-1/2'
                   }
                `} />

                {/* Screen Content */}
                <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden">
                  {uploadedImage ? (
                    <div className="relative z-10 p-8 w-full h-full flex items-center justify-center">
                       {/* Inner Pulse for Logo */}
                       <motion.div
                         animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                         transition={{ repeat: Infinity, duration: 3 }}
                         className="absolute inset-0 bg-purple-500/20 blur-xl"
                       />
                       <img 
                         src={uploadedImage} 
                         alt="Uploaded Content" 
                         className="w-full object-contain max-h-[80%] relative z-10 drop-shadow-[0_0_15px_rgba(147,51,234,0.5)]" 
                       />
                    </div>
                  ) : (
                    <div className="text-center text-slate-600">
                      <Zap className="mx-auto mb-2 opacity-20" size={48} />
                      <p className="text-sm">معاينة الشاشة</p>
                    </div>
                  )}
                  
                  {/* Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
