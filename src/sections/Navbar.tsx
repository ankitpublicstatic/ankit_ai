import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Pages that use a white background without scrolling (force white navbar bg)
  const whiteBgPaths = ['/models', '/about', '/contact'];
  const forceWhiteBg = whiteBgPaths.includes(location.pathname);
  // Navbar has a white background when scrolled OR when on any of the force-white routes
  const navHasWhiteBg = isScrolled || forceWhiteBg;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    const t = setTimeout(() => setIsMobileMenuOpen(false), 0);
    return () => clearTimeout(t);
  }, [location]);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Models', href: '/models' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path.startsWith('/#')) {
      return location.pathname === '/' && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navHasWhiteBg ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" title="Return to Homepage">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-12 ${navHasWhiteBg ? 'bg-indigo-600 shadow-lg shadow-indigo-600/20' : 'bg-white/20 backdrop-blur-md shadow-lg shadow-white/10'}`}>
              <Sparkles className={`w-5 h-5 ${navHasWhiteBg ? 'text-white' : 'text-indigo-100'}`} />
            </div>
            <div className="flex items-center">
              <span className={`text-2xl font-black tracking-tight transition-colors group-hover:text-indigo-500 ${navHasWhiteBg ? 'text-gray-900' : 'text-white'}`}>
                Ankit
              </span>
              <span className={`text-2xl font-black tracking-tight transition-colors ${navHasWhiteBg ? 'text-indigo-600' : 'text-indigo-400'}`}>
                .AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              // ${isFeatures(link.name) ? 'text-white-700' : 'text-black/90'}
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-indigo-500 
      ${navHasWhiteBg ? 'text-gray-700' : 'text-white/90'}
                  
                  ${isActive(link.href) ? 'text-indigo-500' : ''}`
                }>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${navHasWhiteBg ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white rounded-2xl shadow-lg overflow-hidden mb-4"
            >
              <div className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-xl transition-colors ${isActive(link.href)
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
