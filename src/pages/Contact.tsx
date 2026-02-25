import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ankitai2050@gmail.com',
      description: 'We\'ll respond within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6200 974 324',
      description: 'Mon-Sun 9am-10pm IST',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Ahmedabad, Gujarat',
      description: 'K-104, Karnavati Enclave, Near Doon School of Excellence, Ahmedabad, Gujarat 382449',
    },
  ];

  const faqs = [
    {
      question: 'How quickly can I deploy agentic workflows?',
      answer: 'Near instantly. Our visual node-based builder lets you drag and drop integrations with models like GPT-5.x or Claude 4.6 in seconds.',
    },
    {
      question: 'Do you offer SOC2 / HIPAA compliance?',
      answer: 'Yes! Enterprise tiers include dedicated VPC peering, SOC2 Type 2 compliance, and zero-data-retention agreements for sensitive models.',
    },
    {
      question: 'Can I bring my own fine-tuned models?',
      answer: 'Absolutely. You can integrate any custom endpoint (HuggingFace, AWS Bedrock, Local) securely through our API vault.',
    },
    {
      question: 'What happens if we hit scale limits?',
      answer: 'We auto-scale serverlessly up to 10k requests/second out of the box. For extreme scale, we provision dedicated GPU clusters on demand.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              Get in <span className="text-gradient-purple">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Ready to scale your AI operations? Whether you need custom enterprise
              integrations, a dedicated cluster, or just have a few questions—we're here to help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-indigo-100 transition-all cursor-default group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100/50 shadow-sm shadow-indigo-500/5 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                    <info.icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-purple-600 font-medium mb-1">{info.value}</p>
                  <p className="text-gray-500 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02, textShadow: "0px 0px 8px rgb(255,255,255)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-4 rounded-xl btn-primary-gradient text-white font-semibold hover:opacity-95 transition-all shadow-[0_4px_20px_0_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                      className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-purple-100 transition-all cursor-default"
                    >
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-gray-900 mb-1">{faq.question}</h3>
                          <p className="text-gray-600 text-sm">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-2xl p-8"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/10 border border-white/20 shadow-xl shadow-black/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Support Hours</h2>
              <p className="text-white/80">
                Our team is available Monday through Sunday, 9am to 10pm IST.
                <br />
                For enterprise customers, we offer 24/7 dedicated support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
