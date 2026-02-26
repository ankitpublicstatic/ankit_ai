import { motion } from 'framer-motion';
import { ShoppingCart, Landmark, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseStudies = () => {
    const navigate = useNavigate();
    const cases = [
        {
            icon: ShoppingCart,
            industry: 'E-Commerce',
            title: 'Autonomous Support Agents',
            description: 'Deployed a multi-agent swarm that autonomously resolves 85% of tier-1 and tier-2 customer inquiries 24/7, cross-referencing live inventory schemas.',
            metric: '85% Deflection',
            gradient: 'from-pink-500 to-rose-500'
        },
        {
            icon: Landmark,
            industry: 'Finance',
            title: 'Secure RAG Knowledge Base',
            description: 'Engineered a highly secure, SOC2 compliant Retrieval-Augmented Generation pipeline. Allows analysts to query thousands of private financial PDFs instantly.',
            metric: '10x Faster Search',
            gradient: 'from-blue-600 to-indigo-600'
        },
        {
            icon: Truck,
            industry: 'Operations / Logistics',
            title: 'Predictive Supply Chain API',
            description: 'Built a proprietary predictive model using real-time global weather and port data to autonomously reroute shipments and update CRM records without human input.',
            metric: '1.2M Hours Saved',
            gradient: 'from-emerald-500 to-teal-600'
        },
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="section-padding">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
                    >
                        <div className="max-w-2xl">
                            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                Industry <span className="text-indigo-600">Solutions</span>
                            </h2>
                            <p className="text-lg text-slate-600">
                                A glimpse into the custom architectures we engineer for our enterprise partners across major verticals.
                            </p>
                        </div>
                        <motion.button
                            onClick={() => navigate('/contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors shadow-sm whitespace-nowrap"
                        >
                            Discuss Your Use Case
                        </motion.button>
                    </motion.div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {cases.map((study, index) => (
                            <motion.div
                                key={study.industry}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/20 group cursor-default"
                            >
                                {/* Top Banner Accent */}
                                <div className={`h-2 w-full bg-gradient-to-r ${study.gradient}`} />

                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-sm font-bold tracking-wider text-slate-400 uppercase">
                                            {study.industry}
                                        </span>
                                        <study.icon className="w-6 h-6 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                                        {study.title}
                                    </h3>

                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        {study.description}
                                    </p>

                                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-sm font-medium text-slate-500">Key Result</span>
                                        <span className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${study.gradient}`}>
                                            {study.metric}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
