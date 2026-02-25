import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download } from 'lucide-react';

const ExitIntentModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShown, setHasShown] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            // If the mouse leaves from the very top of the window (exit intent)
            if (e.clientY <= 0 && !hasShown) {
                setIsOpen(true);
                setHasShown(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        // Fallback: passively show the pop up after 45 seconds to highly engaged users
        const timer = setTimeout(() => {
            if (!hasShown) {
                setIsOpen(true);
                setHasShown(true);
            }
        }, 45000);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timer);
        };
    }, [hasShown]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Close modal after success message 
        setTimeout(() => setIsOpen(false), 3000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 overflow-hidden"
                    >
                        {/* Top decorative gradient line */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {!isSubmitted ? (
                            <>
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6">
                                    <FileText className="w-6 h-6 text-indigo-600" />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
                                    Wait! Building an AI initiative this year?
                                </h3>

                                <p className="text-slate-600 mb-8">
                                    Don't start without our <span className="font-semibold text-slate-800">2026 Enterprise AI Readiness Framework</span>. Drop your email and we'll send it immediately.
                                </p>

                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@company.com"
                                        required
                                        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-slate-900 placeholder:text-slate-400"
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center whitespace-nowrap shadow-md shadow-indigo-600/20 cursor-pointer"
                                    >
                                        Receive Guide <Download className="w-4 h-4 ml-2" />
                                    </button>
                                </form>

                                <p className="text-slate-400 text-xs text-center mt-6">
                                    Join 10,000+ tech leaders reading our weekly insights. Strictly no spam.
                                </p>
                            </>
                        ) : (
                            <div className="py-12 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6 text-green-600">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Check your inbox!</h3>
                                <p className="text-slate-600">
                                    The Enterprise AI Readiness Framework is on its way to {email}.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExitIntentModal;
