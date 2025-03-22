
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Dumbbell, Heart, CalendarClock, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { path: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
    { path: '/workout/push', label: 'Push', icon: <Dumbbell className="h-4 w-4" /> },
    { path: '/workout/pull', label: 'Pull', icon: <Dumbbell className="h-4 w-4" /> },
    { path: '/workout/legs', label: 'Legs', icon: <Dumbbell className="h-4 w-4" /> },
    { path: '/workout/cardio', label: 'Cardio', icon: <Heart className="h-4 w-4" /> },
    { path: '/schedule', label: 'Schedule', icon: <CalendarClock className="h-4 w-4" /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-navbar py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Dumbbell className="h-6 w-6" />
            <span className="font-display text-xl font-semibold tracking-tight">MyWorkout</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? "secondary" : "ghost"} 
                  size="sm"
                  className="flex items-center gap-1.5"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm animate-fade-in md:hidden">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link 
                key={item.path} 
                to={item.path} 
                onClick={closeMenu}
                className={`animate-slide-down`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Button 
                  variant={location.pathname === item.path ? "secondary" : "outline"} 
                  className="w-full justify-start text-lg gap-3 py-6"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
