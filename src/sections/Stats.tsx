import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: '25+', label: 'Frontier Models' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '1B+', label: 'Tokens Processed' },
    { value: 'Custom', label: 'Enterprise Apps' },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-slate-500 text-sm font-medium tracking-wider uppercase mb-8"
          >
            Engineered for Enterprise Scale
          </motion.p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-slate-200/40 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all cursor-default"
              >
                <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
