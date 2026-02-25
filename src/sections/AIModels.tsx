import { motion } from 'framer-motion';
import { Wrench, Network, Workflow, Sparkles } from 'lucide-react';

const AIModels = () => {
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
              Unleash the Power of <span className="text-gradient-purple">Next-Gen AI & Agents</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tap into the world's most advanced models like GPT-5.x and Claude 4.6, and orchestration tools like LangGraph, CrewAI, and n8n to build autonomous workflows.
            </p>
          </motion.div>

          {/* Provider Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* OpenAI Models */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:shadow-green-500/10 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-green-100 text-green-600">
                  AI
                </div>
                <h3 className="text-lg font-semibold text-gray-900">OpenAI Models</h3>
              </div>
              <ul className="space-y-3">
                {['GPT-5.x (Next-Gen Multimodal)', 'GPT-4o & GPT-4o-mini', 'o3 & o4 (Advanced Reasoning)', '4o Realtime Voice API'].map((model, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm whitespace-nowrap overflow-hidden text-ellipsis">{model}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Anthropic Claude */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-orange-100 text-orange-600">
                  C
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Anthropic Claude</h3>
              </div>
              <ul className="space-y-3">
                {['Claude 4.6 Sonnet (Top Tier)', 'Claude 4.6 Opus (Max Scale)', 'Claude 4.5 Haiku (Ultra-fast)', 'Computer Use & Deep Agents'].map((model, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{model}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Google & Open Weights */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-blue-100 text-blue-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Google & Open Source</h3>
              </div>
              <ul className="space-y-3">
                {['Google Gemini 3.x Pro & Ultra', 'Llama 4 (70B & 400B+)', 'Mistral Large 3', 'DeepSeek-Coder & Qwen-Max'].map((model, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{model}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Agentic Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:shadow-purple-500/10 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-purple-100 text-purple-600">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Agentic Frameworks</h3>
              </div>
              <ul className="space-y-3">
                {['CrewAI (Multi-Agent Swarms)', 'LangChain & LangGraph', 'Microsoft AutoGen', 'LlamaIndex Advanced RAG'].map((model, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{model}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Alternative Automation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:shadow-pink-500/10 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-pink-100 text-pink-600">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Workflow Automation</h3>
              </div>
              <ul className="space-y-3">
                {['n8n Advanced Webhooks', 'Flowise & Dify Visual Builders', 'Make.com AI Integrations', 'Zapier Central Tasks'].map((model, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-pink-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{model}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Bring Your Own */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-2xl hover:shadow-gray-500/10 transition-all cursor-default"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-gray-200 text-gray-600">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Bring Your Own</h3>
              </div>
              <ul className="space-y-3">
                {['Custom Fine-Tuned Local Models', 'AWS Bedrock Connectors', 'HuggingFace Inference', 'Private API Key Vault'].map((model, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{model}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModels;
