
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'For Talents',
      links: [
        { name: 'Find Work', path: '/jobs' },
        { name: 'Assessment Process', path: '/assessment' },
        { name: 'Career Growth', path: '/career-paths' },
        { name: 'Success Stories', path: '/success-stories' }
      ]
    },
    {
      title: 'For Companies',
      links: [
        { name: 'Hire Talent', path: '/hire' },
        { name: 'Enterprise Solutions', path: '/enterprise' },
        { name: 'Our Process', path: '/how-it-works' },
        { name: 'Testimonials', path: '/testimonials' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'FAQ', path: '/faq' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, path: 'https://facebook.com' },
    { icon: <Twitter size={20} />, path: 'https://twitter.com' },
    { icon: <Linkedin size={20} />, path: 'https://linkedin.com' },
    { icon: <Instagram size={20} />, path: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-crossover-blue">USS AGENCY</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Connecting the world's top talent with the most innovative companies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-crossover-blue hover:border-crossover-blue transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-gray-900 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path}
                      className="text-gray-600 hover:text-crossover-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} USS AGENCY. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-crossover-blue transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-crossover-blue transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-500 text-sm hover:text-crossover-blue transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
