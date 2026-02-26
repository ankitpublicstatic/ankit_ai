import { motion } from 'framer-motion';
import { Brain, Network, Workflow, Eye, Code2, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Models = () => {
  const navigate = useNavigate();
  const modelCategories = [
    {
      title: 'Frontier & Heavyweight Models',
      description: 'State-of-the-art models for the most complex reasoning tasks',
      icon: Brain,
      color: 'bg-purple-100 text-purple-600',
      models: [
        { name: 'GPT-5.x', provider: 'OpenAI', desc: 'Next-Gen foundation model' },
        { name: 'Claude 4.6 Opus', provider: 'Anthropic', desc: 'Maximum scale and depth' },
        { name: 'Gemini 3.x Pro', provider: 'Google', desc: 'Advanced multimodal reasoning' },
        { name: 'o3 & o4', provider: 'OpenAI', desc: 'Deep reinforcement reasoning' },
      ],
    },
    {
      title: 'Fast & Efficient Models',
      description: 'Optimized for speed, low latency, and cost-efficiency',
      icon: Zap,
      color: 'bg-yellow-100 text-yellow-600',
      models: [
        { name: 'Claude 4.6 Sonnet', provider: 'Anthropic', desc: 'Best balance of speed & intellect' },
        { name: 'GPT-4o-mini', provider: 'OpenAI', desc: 'Ultra-fast and cost-effective' },
        { name: 'Mistral Large 3', provider: 'Mistral AI', desc: 'Top tier open-weights' },
        { name: 'Claude 4.5 Haiku', provider: 'Anthropic', desc: 'Near-instant response times' },
      ],
    },
    {
      title: 'Agentic Frameworks',
      description: 'Orchestration tools to build autonomous multi-agent systems',
      icon: Network,
      color: 'bg-blue-100 text-blue-600',
      models: [
        { name: 'LangGraph', provider: 'LangChain', desc: 'Cyclical graph-based agents' },
        { name: 'CrewAI', provider: 'Open Source', desc: 'Role-playing multi-agent swarms' },
        { name: 'AutoGen', provider: 'Microsoft', desc: 'Conversable agent orchestrator' },
        { name: 'Deep Agents', provider: 'Anthropic', desc: 'Computer Use & system-level control' },
      ],
    },
    {
      title: 'Workflow Automation',
      description: 'Visual builders for chaining LLMs, data, and APIs',
      icon: Workflow,
      color: 'bg-pink-100 text-pink-600',
      models: [
        { name: 'n8n', provider: 'Open Source', desc: 'Advanced node-based logic' },
        { name: 'Flowise & Dify', provider: 'Open Source', desc: 'Visual AI App builders' },
        { name: 'Make.com', provider: 'Enterprise', desc: 'Seamless API integrations' },
        { name: 'Zapier Central', provider: 'Zapier', desc: 'Task automation with AI' },
      ],
    },
    {
      title: 'Multimodal & Vision',
      description: 'Interact with the world via images, video, and audio',
      icon: Eye,
      color: 'bg-green-100 text-green-600',
      models: [
        { name: '4o Realtime Voice API', provider: 'OpenAI', desc: 'Speech-to-Speech interaction' },
        { name: 'Midjourney v6', provider: 'Midjourney', desc: 'Photorealistic image generation' },
        { name: 'OpenAI Sora', provider: 'OpenAI', desc: 'Text-to-video generation' },
        { name: 'GPT-5 Multimodal', provider: 'OpenAI', desc: 'Native audio/visual understanding' },
      ],
    },
    {
      title: 'Open Source & Local',
      description: 'Run powerful models privately on your own infrastructure',
      icon: Code2,
      color: 'bg-orange-100 text-orange-600',
      models: [
        { name: 'Llama 4 (70B & 400B+)', provider: 'Meta', desc: 'Top-tier open source LLM' },
        { name: 'DeepSeek-Coder', provider: 'DeepSeek', desc: 'Specialized coding model' },
        { name: 'HuggingFace Inference', provider: 'HuggingFace', desc: 'Serverless model endpoints' },
        { name: 'AWS Bedrock Connectors', provider: 'AWS', desc: 'Enterprise secure hosting' },
      ],
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
              Supported <span className="text-gradient-purple">AI Models & Agents</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Access the world's most powerful frontier models, agentic frameworks, and workflow automation tools—all unified under one powerful ecosystem.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-24">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modelCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all group cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.models.map((model, modelIndex) => (
                      <motion.li
                        key={modelIndex}
                        whileHover={{ scale: 1.02, x: 2 }}
                        className="flex items-start gap-3 p-3 bg-white rounded-lg border border-transparent hover:border-gray-200 shadow-sm transition-all"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 text-sm">{model.name}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{model.provider} • {model.desc}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to unleash autonomous AI?
              </h2>
              <p className="text-gray-600 mb-8">
                Build intelligent, multi-agent workflows backed by frontier models in minutes.
              </p>
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgb(79,70,229)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-xl btn-primary-gradient text-white font-semibold hover:opacity-95 transition-all shadow-[0_4px_20px_0_rgba(79,70,229,0.4)] cursor-pointer"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Models;
