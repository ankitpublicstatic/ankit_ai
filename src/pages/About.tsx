import { motion } from 'framer-motion';
import { Target, Rocket, Users, Zap, Heart, Linkedin } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Rocket,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI, bringing you the latest advancements as soon as they\'re available.',
    },
    {
      icon: Users,
      title: 'Customer Obsessed',
      description: 'Your success is our success. We build every feature with our users in mind, listening to feedback and iterating rapidly.',
    },
    {
      icon: Zap,
      title: 'Speed Matters',
      description: 'Time is precious. We help you go from idea to production in minutes, not months, with our intuitive no-code platform.',
    },
    {
      icon: Heart,
      title: 'Built with Care',
      description: 'Every line of code, every pixel, every interaction is crafted with attention to detail and a passion for excellence.',
    },
  ];

  const milestones = [
    { year: '2023', event: 'AnkitAI founded with a vision to democratize AI' },
    { year: '2024', event: 'Launched beta with 50+ AI models' },
    { year: '2024', event: 'Reached 10,000+ developers on platform' },
    { year: '2025', event: 'Expanded to 100+ models and enterprise features' },
    { year: '2026', event: 'Serving 100,000+ developers worldwide' },
  ];

  const team = [
    { name: 'Ankit Kumar Singh', role: 'CEO & Founder', initials: 'AK', image: 'https://media.licdn.com/dms/image/v2/D5603AQFsvZnLtbTjNQ/profile-displayphoto-scale_200_200/B56ZjfSlWfG0AY-/0/1756092853186?e=2147483647&v=beta&t=n7f2PJFjc0YQrdhyTRHWP3DgVQ4vjMXQyr7qpT5yGws', linkedin: 'https://www.linkedin.com/in/ankitpm/' },
    { name: 'Sushant Singh', role: 'Chief AI Scientist', initials: 'SS' },
    { name: 'Abhishek Kumar', role: 'VP of Engineering', initials: 'AK' },
    { name: 'Vaishnavi Kumari', role: 'Head of Global Operations', initials: 'VK' },
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
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Pioneering the <span className="text-gradient-purple">Intelligence Era</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto"
            >
              We are on a global mission to democratize artificial intelligence.
              AnkitAI builds the orchestration layer that empowers visionaries to craft autonomous ecosystems without writing a single line of code.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 shadow-xl shadow-indigo-500/10 flex items-center justify-center mx-auto mb-8 relative group">
                <div className="absolute inset-0 bg-indigo-500/5 blur-xl group-hover:bg-indigo-500/10 transition-colors rounded-3xl" />
                <Target className="w-10 h-10 text-indigo-600 relative z-10" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To democratize artificial intelligence by providing a no-code platform
                that empowers developers, startups, and enterprises to build intelligent
                products 10x faster. We believe AI should be accessible to everyone,
                not just those with deep technical expertise or large budgets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600">The principles that guide everything we do</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-purple-100 transition-all cursor-default"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-slate-50 border border-indigo-100/50 shadow-md shadow-indigo-500/5 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-indigo-500/20 group-hover:bg-indigo-50">
                    <value.icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-gray-600">Key milestones in our story</p>
            </motion.div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="flex items-center gap-8 group cursor-default"
                >
                  <div className="w-24 flex-shrink-0 transition-transform group-hover:scale-110">
                    <span className="text-2xl font-bold text-purple-600">{milestone.year}</span>
                  </div>
                  <div className="flex-1 p-6 bg-gray-50 rounded-2xl border border-transparent group-hover:border-purple-200 group-hover:bg-white group-hover:shadow-md transition-all">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet the Team</h2>
              <p className="text-gray-600">The passionate people behind AnkitAI</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="text-center group cursor-default"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-shadow overflow-hidden">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-white font-bold text-lg">{member.initials}</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors flex items-center justify-center gap-2">
                    {member.name}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors" title="View LinkedIn Profile">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: '250K+', label: 'Global Developers' },
                { value: '25+', label: 'Frontier AI Models' },
                { value: '99.99%', label: 'Uptime SLA' },
                { value: '1B+', label: 'Tokens Processed' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="cursor-default"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
