
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem("isLoggedIn") === "true" || localStorage.getItem("currentUser") !== null;
    setIsLoggedIn(userLoggedIn);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { 
      name: 'Find Work', 
      path: '/jobs',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Job Board', path: '/jobs' },
        { name: 'Assessment Process', path: '/assessment' },
        { name: 'Career Paths', path: '/career-paths' },
      ]
    },
    { 
      name: 'Hire Talent', 
      path: '/hire',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Talents', path: '/talents' },
        { name: 'How it Works', path: '/how-it-works' },
        { name: 'Enterprise Solutions', path: '/enterprise' },
      ]
    },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-crossover-blue">USS Agency</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasDropdown ? (
                <div
                  className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-crossover-blue"
                  onClick={() => toggleDropdown(item.name)}
                >
                  <span>{item.name}</span>
                  <ChevronDown size={16} />
                </div>
              ) : (
                <Link 
                  to={item.path} 
                  className="text-gray-700 hover:text-crossover-blue"
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown menu */}
              {item.hasDropdown && (
                <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ${activeDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  {item.dropdownItems?.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-crossover-gray hover:text-crossover-blue"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <Link to="/dashboard" className="flex items-center text-gray-700 hover:text-crossover-blue">
              <User size={18} className="mr-1" />
              Dashboard
            </Link>
          ) : (
            <>
              <Link to="/sign-in" className="text-gray-700 hover:text-crossover-blue">
                Sign In
              </Link>
              <Button className="btn-primary">
                <Link to="/sign-up">Get Started</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                {item.hasDropdown ? (
                  <>
                    <div
                      className="flex items-center justify-between text-gray-700"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </div>
                    {activeDropdown === item.name && (
                      <div className="mt-2 pl-4 border-l-2 border-crossover-gray space-y-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block py-1 text-gray-600 hover:text-crossover-blue"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={item.path} 
                    className="block text-gray-700 hover:text-crossover-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              {isLoggedIn ? (
                <Link 
                  to="/dashboard" 
                  className="flex items-center text-gray-700 hover:text-crossover-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} className="mr-1" />
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link 
                    to="/sign-in" 
                    className="text-gray-700 hover:text-crossover-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Button 
                    className="btn-primary w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to="/sign-up" className="w-full block">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
