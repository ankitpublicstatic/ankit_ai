import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const productLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Models', href: '/models' },
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="py-16 bg-gray-900">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-8 mb-12"
          >
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4 group w-fit" title="Return to Homepage">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-12 bg-indigo-500/20 backdrop-blur-md shadow-lg shadow-indigo-500/10 border border-indigo-500/10">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-black tracking-tight text-white transition-colors group-hover:text-indigo-300">Ankit</span>
                  <span className="text-2xl font-black tracking-tight text-indigo-500 transition-colors group-hover:text-indigo-400">.AI</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm max-w-sm">
                Build AI products faster with a visual-first platform that scales.
                Extend with code when you need it.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-400 hover:text-indigo-400 transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-gray-400 hover:text-indigo-400 transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Copyright and Top Scroll */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 AnkitAI. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
