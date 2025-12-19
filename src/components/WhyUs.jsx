// src/components/WhyUs.jsx
import { FaAward, FaHandsHelping, FaUserTie, FaHeart, FaRegSmile, FaShieldAlt } from 'react-icons/fa';

const WhyUs = () => {
  const features = [
    {
      icon: <FaAward className="text-4xl text-indigo-600" />,
      title: "अनुभवी संघ",
      description: "10+ वर्षांचा अनुभव असलेली आमची टीम तुमच्या विशेष क्षणांना आणखी चांगले बनवण्यासाठी कटिबद्ध आहे."
    },
    {
      icon: <FaHandsHelping className="text-4xl text-pink-500" />,
      title: "वैयक्तिकृत सेवा",
      description: "प्रत्येक क्लायंटला वैयक्तिकृत लक्ष देऊन तुमच्या अपेक्षांपेक्षा जास्त देण्याचा आमचा प्रयत्न."
    },
    {
      icon: <FaUserTie className="text-4xl text-yellow-500" />,
      title: "व्यावसायिक दृष्टीकोण",
      description: "व्यावसायिक दृष्टीकोन आणि सर्जनशीलतेचे योग्य मिश्रण."
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "प्रेमाने केलेले काम",
      description: "प्रत्येक प्रकल्पात आम्ही आमचे प्रेम आणि कष्ट घालतो."
    },
    {
      icon: <FaRegSmile className="text-4xl text-green-500" />,
      title: "समाधानी ग्राहक",
      description: "1000+ समाधानी ग्राहक आणि त्यांच्या हृदयस्पर्शी प्रतिक्रिया."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-500" />,
      title: "सुरक्षित आणि विश्वासार्ह",
      description: "तुमच्या डेटाची सुरक्षितता आणि गोपनीयता आमच्या प्राधान्यात."
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            आम्हाला का निवडावे?
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            आमच्या विशेषतांची ओळख करून घ्या ज्या आम्हाला इतरांपेक्षा वेगळे बनवतात
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">आमचे आग्रहीक</h3>
            <p className="text-lg mb-6">
              "प्रत्येक आमंत्रण हे एक कलाकृती असते, आणि प्रत्येक कलाकृतीमध्ये एक हृदय असते. आम्ही फक्त आमंत्रणे तयार करत नाही, तर तुमच्या भावना आणि आनंदाचे प्रतिबिंब निर्माण करतो."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px w-12 bg-white/50"></div>
              <span className="font-medium">आमचे मिशन</span>
              <div className="h-px w-12 bg-white/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;