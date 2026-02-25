import { motion } from 'framer-motion';
import { FileText, Database, Lock, BarChart3, FolderOpen, Globe } from 'lucide-react';

const BuildOnData = () => {
  const features = [
    {
      icon: FileText,
      title: 'Document Processing',
      description: 'Upload PDFs, Word docs, spreadsheets, and more',
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'Connect to SQL, NoSQL, and vector databases',
    },
    {
      icon: Lock,
      title: 'Privacy & Security',
      description: 'Your data stays secure with enterprise-grade encryption',
    },
  ];

  const dataSources = [
    {
      icon: BarChart3,
      name: 'Customer Database',
      details: 'PostgreSQL • 1.2M records',
      color: 'bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600 border border-emerald-100 shadow-sm shadow-emerald-500/5',
    },
    {
      icon: FolderOpen,
      name: 'Knowledge Base',
      details: 'PDF Documents • 500 files',
      color: 'bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 border border-blue-100 shadow-sm shadow-blue-500/5',
    },
    {
      icon: Globe,
      name: 'Website Content',
      details: 'Web Scraping • Live updates',
      color: 'bg-gradient-to-br from-purple-50 to-fuchsia-50 text-purple-600 border border-purple-100 shadow-sm shadow-purple-500/5',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Powered by <span className="text-gradient-purple">Your Data</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We train custom AI models exclusively on your proprietary data. We seamlessly connect to your databases, documents, and existing systems to engineer highly personalized AI experiences.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100/50 shadow-sm shadow-indigo-500/5 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-105">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Data Sources Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Data Sources</h3>
                <span className="text-sm text-green-600 font-medium">Connected</span>
              </div>

              <div className="space-y-4">
                {dataSources.map((source, index) => (
                  <motion.div
                    key={source.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3, ease: "easeOut" }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all cursor-default"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${source.color}`}>
                      <source.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{source.name}</p>
                      <p className="text-sm text-gray-500">{source.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildOnData;
