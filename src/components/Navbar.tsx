import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoIcon from '@/assets/logo-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : isHomePage ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <img src={logoIcon} alt="Oussaid Tourism Icon" className="h-12 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className={`text-2xl font-bold tracking-tight transition-colors ${
                (isScrolled || !isHomePage) ? 'text-primary' : 'text-white'
              }`}>OUSSAID</span>
              <span className={`text-sm font-medium tracking-widest transition-colors ${
                (isScrolled || !isHomePage) ? 'text-secondary' : 'text-white'
              }`}>TOURISME</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative group ${
                  isActive(link.path)
                    ? 'text-primary'
                    : (isScrolled || !isHomePage)
                    ? 'text-secondary hover:text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform origin-left ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              (isScrolled || !isHomePage) ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Slide-in Sidebar */}
        <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <img src={logoIcon} alt="Oussaid Tourism Icon" className="h-10 w-auto" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xl font-bold tracking-tight text-primary">OUSSAID</span>
                  <span className="text-xs font-medium tracking-widest text-secondary">TOURISME</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-4 py-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-4 px-4 font-medium transition-all rounded-lg border-b border-border last:border-0 ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/5'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
