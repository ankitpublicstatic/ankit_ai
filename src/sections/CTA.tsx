import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-indigo-500/10 blur-[100px] pointer-events-none" />
      <div className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to transform your <span className="text-indigo-400">enterprise?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Partner with our elite engineering team to build custom, highly-performant AI workflows tailored to your proprietary data.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(79,70,229)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
              >
                Book a Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
