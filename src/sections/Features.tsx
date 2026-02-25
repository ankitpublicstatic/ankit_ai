import { motion } from 'framer-motion';
import { Bot, Link2, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'Custom AI Chatbots',
      description: 'We develop intelligent chatbots that understand deep context and act as autonomous agents for your customers.',
      color: 'bg-gradient-to-br from-indigo-50 to-purple-50 text-indigo-600 border border-indigo-100 shadow-md shadow-indigo-500/10',
    },
    {
      icon: Link2,
      title: 'Enterprise API Development',
      description: 'We engineer secure and highly scalable AI APIs tailored perfectly to integrate smoothly with your existing software loop.',
      color: 'bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100 shadow-md shadow-blue-500/10',
    },
    {
      icon: Zap,
      title: 'Agentic Workflow Automation',
      description: 'We automate your most complex business processes using custom multi-agent swarms and industry-leading frontier models.',
      color: 'bg-gradient-to-br from-slate-50 to-indigo-50 text-slate-700 border border-slate-200 shadow-md shadow-slate-500/10',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              End-to-End Custom{' '}
              <span className="text-gradient-purple">AI Development</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From standalone chatbots to massive agentic workflows, we build the bespoke AI infrastructure your enterprise needs to win.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                className="feature-card hover:shadow-2xl hover:shadow-purple-500/10 transition-all border border-gray-100 hover:border-purple-100 bg-white"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
