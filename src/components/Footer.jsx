// src/components/Footer.jsx
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: "मुख्यपृष्ठ", url: "#home" },
    { name: "आमच्याबद्दल", url: "#about" },
    { name: "सेवा", url: "#services" },
    { name: "योजना", url: "#plans" },
    { name: "आम्हाला का निवडा", url: "#why-us" },
    { name: "संपर्क", url: "#contact" }
  ];

  const services = [
    { name: "लग्न आमंत्रण", url: "#" },
    { name: "वाढदिवस आमंत्रण", url: "#" },
    { name: "गृहप्रवेश आमंत्रण", url: "#" },
    { name: "नामकरण आमंत्रण", url: "#" },
    { name: "व्यवसायिक आमंत्रण", url: "#" },
    { name: "वैयक्तिकृत आमंत्रण", url: "#" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "123, आमंत्रण नगर, पुणे, महाराष्ट्र 411001" },
    { icon: <FaPhone />, text: "+91 98765 43210" },
    { icon: <FaEnvelope />, text: "info@aamantranji.com" }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaYoutube />, url: "#" },
    { icon: <FaTwitter />, url: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">आमंत्रणजी.कॉम</h3>
            <p className="text-gray-400">
              तुमच्या विशेष क्षणांना विशेष बनवण्यासाठी आमची संपूर्ण मदत. आमच्यासोबत तुमचे आमंत्रण अधिक सुंदर आणि यादगार बनवा.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">द्रुत दुवे</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">आमच्या सेवा</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">संपर्क माहिती</h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-indigo-400 mt-1">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} आमंत्रणजी.कॉम. सर्व हक्क राखीव.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              गोपनीयता धोरण
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              वापराच्या अटी
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              कुकीज
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;