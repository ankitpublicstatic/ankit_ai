import { motion } from 'framer-motion';
import { TrendingUp, Zap, Plug, MessageSquare, Wrench, RefreshCw } from 'lucide-react';

const PowerfulFeatures = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Auto-Scaling',
      description: 'Automatically scale from zero to millions of requests. Pay only for what you use with true serverless architecture.',
      bullets: ['Zero cold starts', 'Global edge deployment', '99.9% uptime SLA'],
      color: 'bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100',
    },
    {
      icon: Zap,
      title: 'Deploy in Minutes',
      description: 'From idea to production in under 5 minutes. No DevOps, no infrastructure management, just pure focus on your AI logic.',
      bullets: ['One-click deployment', 'Instant SSL certificates', 'Custom domains'],
      color: 'bg-gradient-to-br from-amber-50 to-orange-50 text-amber-600 border border-amber-100',
    },
    {
      icon: Plug,
      title: 'Easy Integration',
      description: 'Add to any website or app in minutes. Simple JavaScript embed, REST APIs, or webhook integrations.',
      bullets: ['JavaScript widget', 'REST API endpoints', 'Webhook support'],
      color: 'bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 border border-emerald-100',
    },
    {
      icon: MessageSquare,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots that understand context, remember conversations, and provide human-like interactions.',
      bullets: ['Context awareness', 'Memory management', 'Multi-language support'],
      color: 'bg-gradient-to-br from-purple-50 to-fuchsia-50 text-purple-600 border border-purple-100',
    },
    {
      icon: Wrench,
      title: 'API Builder',
      description: 'Create production-ready APIs with authentication, rate limiting, and monitoring built-in.',
      bullets: ['Auto-generated docs', 'Rate limiting', 'Analytics dashboard'],
      color: 'bg-gradient-to-br from-rose-50 to-red-50 text-rose-600 border border-rose-100',
    },
    {
      icon: RefreshCw,
      title: 'Async Workflows',
      description: 'Build complex, multi-step workflows with conditional logic, loops, and parallel processing capabilities.',
      bullets: ['Visual workflow builder', 'Conditional branching', 'Error handling'],
      color: 'bg-gradient-to-br from-pink-50 to-rose-50 text-pink-600 border border-pink-100',
    },
  ];

  return (
    <section className="py-24 bg-white">
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
              Powerful Infrastructure, <span className="text-gradient-orange">Expertly Managed</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage production-grade architecture to build, deploy, and scale your AI solutions reliably.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-orange-100 transition-all cursor-default group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm shadow-indigo-500/5 ${feature.color} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className="w-6 h-6 relative z-10" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
