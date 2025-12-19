// src/components/Contact.jsx
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    // WhatsApp number (replace with your business number)
    const phoneNumber = '919975595925'; // No + or spaces
    
    // Format the message
    const message = `*नवीन संपर्क संदेश*%0A%0A` +
                   `*नाव:* ${formData.name}%0A` +
                   `*ईमेल:* ${formData.email}%0A` +
                   `*विषय:* ${formData.subject}%0A` +
                   `*संदेश:* ${formData.message}%0A`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form and show success message
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setSubmitStatus({
      success: true,
      message: 'आपला संदेश यशस्वीरित्या पाठवला गेला आहे! आम्ही लवकरच तुमच्याशी संपर्क साधू.'
    });
    setIsSubmitting(false);
  };
  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-indigo-600" />,
      title: "आमचे ठिकाण",
      details: "Shop no 30. Ghate complex. Chalisgaon. Dist. Jalgaon"
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-pink-500" />,
      title: "फोन करा",
      details: "+919975595925"
    },
    {
      icon: <FaEnvelope className="text-2xl text-yellow-500" />,
      title: "ईमेल",
      details: "aamantrang@gmail.com"
    },
    {
      icon: <FaClock className="text-2xl text-green-500" />,
      title: "कार्यकाळ",
      details: "सोम-शनि: सकाळी 10 - रात्री 8\nरविवार: विश्रांती"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook className="text-2xl" />, url: "#" },
    { icon: <FaInstagram className="text-2xl" />, url: "#" },
    { icon: <FaYoutube className="text-2xl" />, url: "#" }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            आमच्याशी संपर्क साधा
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            आमच्याशी संपर्क साधण्यासाठी खालील पैकी कोणताही मार्ग वापरा
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {method.details}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">सोशल मीडिया</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-gray-100 hover:bg-indigo-100 rounded-full flex items-center justify-center text-gray-700 hover:text-indigo-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">आम्हाला संदेश पाठवा</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    तुमचे नाव <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="तुमचे पूर्ण नाव"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    ईमेल <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="तुमचा ईमेल"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                   
विषय
</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="संदेशाचा विषय"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  संदेश <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="तुमचा संदेश येथे लिहा..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    पाठवत आहे...
                  </>
                ) : (
                  <>
                    <FaWhatsapp className="text-lg" />
                    व्हॉट्सऍप वर पाठवा
                  </>
                )}
              </button>
              
              {submitStatus.message && (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;