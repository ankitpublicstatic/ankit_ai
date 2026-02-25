import { motion } from 'framer-motion';
import { Rocket, Bot, Zap, DollarSign } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');

  const badges = [
    { icon: Rocket, text: 'Ship in Minutes' },
    { icon: Bot, text: 'Smart Chatbots' },
    { icon: Zap, text: 'Auto-Scale' },
    { icon: DollarSign, text: 'No fixed costs' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 w-full section-padding pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Custom AI App Development
            <br />
            <span className="text-gradient-purple">Shipped 10x Faster</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            Turn your bold ideas into production-ready software. We engineer intelligent APIs,
            custom multi-agent systems, and highly-scalable autonomous workflows specifically tailored for your business.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/20 transition-all cursor-default shadow-[0_4px_14px_0_rgba(255,255,255,0.1)]"
              >
                <badge.icon className="w-4 h-4 text-white" />
                <span className="text-sm text-white/90">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Email Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-md mx-auto space-y-4"
          >
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02, textShadow: "0px 0px 8px rgb(255,255,255)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full block px-6 py-4 rounded-xl btn-primary-gradient text-white font-semibold hover:opacity-95 transition-all shadow-[0_4px_20px_0_rgba(168,85,247,0.4)] cursor-pointer"
            >
              Get Access - Contact Us
            </motion.a>
          </motion.div>

          {/* Trusted By Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-20 border-t border-white/10 pt-8"
          >
            <p className="text-white/40 text-sm font-medium tracking-wider uppercase mb-6">
              Engineered for forward-thinking teams across
            </p>
            <div className="flex justify-center gap-8 sm:gap-16 items-center flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-bold text-white tracking-tight">FinTech</span>
              <span className="text-xl font-bold text-white tracking-tight">Healthcare</span>
              <span className="text-xl font-bold text-white tracking-tight">Enterprise SaaS</span>
              <span className="text-xl font-bold text-white tracking-tight">Logistics</span>
              <span className="text-xl font-bold text-white tracking-tight">E-Commerce</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
