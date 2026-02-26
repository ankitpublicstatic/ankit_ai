import { motion } from 'framer-motion';
import { Check, Zap, Users, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const tiers = [
    {
      name: 'Proof of Concept (PoC)',
      icon: Zap,
      description: 'A fast 4-week sprint to build a working prototype and validate ROI.',
      features: [
        'Data & infrastructure audit',
        'Custom model selection & testing',
        'Working MVP deployment',
        'ROI projection report',
      ],
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/10',
    },
    {
      name: 'Dedicated AI Team',
      icon: Users,
      description: 'Monthly retainer for continuous custom AI engineering and support.',
      features: [
        'Dedicated senior AI engineers',
        'Continuous model fine-tuning',
        'Custom multi-agent swarms',
        'Priority 24/7 slack support',
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      popular: true,
    },
    {
      name: 'Enterprise Transformation',
      icon: Building2,
      description: 'Full-stack AI restructuring for massive corporations.',
      features: [
        'On-premise / VPC deployment',
        'Zero-data-retention compliance',
        'Internal RAG knowledge bases',
        'Strategic board-level consulting',
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-950">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Engagement <span className="text-indigo-400">Models</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We partner with forward-thinking enterprises. Choose the engagement model that fits your current operational scale.
            </p>
          </motion.div>

          {/* Tiers Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border ${tier.popular ? 'border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.2)]' : 'border-white/10 hover:border-white/20'} transition-all`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`w-14 h-14 rounded-2xl ${tier.bgColor} flex items-center justify-center mb-6`}>
                  <tier.icon className={`w-7 h-7 ${tier.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{tier.name}</h3>
                <p className="text-white/60 mb-8 min-h-[48px]">{tier.description}</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 ${tier.color} flex-shrink-0`} />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={() => navigate('/contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full block text-center py-4 rounded-xl font-semibold transition-all ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/25' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Book Consultation
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
