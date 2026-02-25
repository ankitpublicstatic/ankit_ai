import { motion } from 'framer-motion';
import { Puzzle, ShoppingBag, Settings } from 'lucide-react';

const Plugins = () => {
  const plugins = [
    {
      icon: Puzzle,
      title: 'Custom Integrations',
      description: 'Connect to any third-party service or API',
    },
    {
      icon: ShoppingBag,
      title: 'Enterprise Connectors',
      description: 'Secure links to your internal proprietary data lakes',
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description: 'Build unique workflows for your use case',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-900 via-indigo-900 to-indigo-800 rounded-3xl p-8 lg:p-12"
          >
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Seamless Ecosystem Integration
              </h2>
              <p className="text-white/70">
                Extend functionality with deep custom plugins and secure API connectors
              </p>
            </div>

            {/* Plugin Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {plugins.map((plugin, index) => (
                <motion.div
                  key={plugin.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="text-center group cursor-default"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5 backdrop-blur-md group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
                    <plugin.icon className="w-8 h-8 text-indigo-300 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{plugin.title}</h3>
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">{plugin.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Plugins;
