import { motion } from 'framer-motion';
import { Search, PenTool, Braces, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: Search,
            title: 'Discovery & Audit',
            description: 'We deeply analyze your proprietary data, existing bottlenecks, and identify high-ROI automation opportunities.',
        },
        {
            icon: PenTool,
            title: 'Architecture & Design',
            description: 'We orchestrate the perfect stack of frontier models (GPT-5, Claude) and design custom multi-agent logic flows.',
        },
        {
            icon: Braces,
            title: 'Custom Engineering',
            description: 'Our engineers build your solution natively, developing intelligent APIs, RAG knowledge bases, and secure agent swarms.',
        },
        {
            icon: Rocket,
            title: 'Deployment & Scale',
            description: 'We deploy the system securely into your existing infrastructure (VPC/On-Prem) and monitor it for zero-latency scaling.',
        },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative vertical line for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-48 bottom-48 w-px bg-slate-100 -translate-x-1/2" />

            <div className="section-padding relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                            Our Engineering <span className="text-indigo-600">Process</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A battle-tested methodology for taking enterprise AI projects from abstract imagination to production-grade reality.
                        </p>
                    </motion.div>

                    {/* Timeline Grid */}
                    <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                                className="relative group h-full flex flex-col items-center lg:items-start text-center lg:text-left"
                            >
                                {/* Number Indicator */}
                                <div className="hidden lg:flex absolute -top-12 left-6 text-8xl font-black text-slate-50 select-none -z-10 group-hover:text-indigo-50 transition-colors duration-500">
                                    {index + 1}
                                </div>

                                <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-600/30 transition-all duration-300">
                                    <step.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
