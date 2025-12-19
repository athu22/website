// src/components/Services.jsx
import { FaCamera, FaVideo, FaMusic, FaRegSmile, FaGift, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCamera className="text-4xl text-indigo-600" />,
      title: "फोटो गॅलरी",
      description: "तुमच्या आवडत्या क्षणांची सुंदर फोटो गॅलरी",
      features: ["अमर्यादित फोटो", "HD क्वालिटी", "ऑटो-स्लाइडशो"]
    },
    {
      icon: <FaVideo className="text-4xl text-pink-500" />,
      title: "व्हिडिओ आमंत्रण",
      description: "वैयक्तिकृत व्हिडिओ आमंत्रणे",
      features: ["कस्टम व्हिडिओ", "म्युझिक ओव्हरले", "HD क्वालिटी"]
    },
    {
      icon: <FaMusic className="text-4xl text-yellow-500" />,
      title: "संगीत आणि ध्वनी",
      description: "तुमच्या आवडीचे गाणे जोडा",
      features: ["मोठ्या प्रमाणात संगीत लायब्ररी", "कस्टम ट्रॅक", "व्हॉल्यूम कंट्रोल"]
    },
    {
      icon: <FaRegSmile className="text-4xl text-green-500" />,
      title: "व्हर्च्युअल गेस्टबुक",
      description: "पाहुण्यांकडून शुभेच्छा मिळवा",
      features: ["शुभेच्छा संदेश", "फोटो अपलोड", "ऑटो-अप्रूव्हल सिस्टम"]
    },
    {
      icon: <FaGift className="text-4xl text-red-500" />,
      title: "भेटवस्तूंची यादी",
      description: "तुमच्या आवडत्या भेटवस्तूंची यादी तयार करा",
      features: ["मल्टीपल स्टोअर्स", "रिअल-टाइम अपडेट्स", "थँक यू नोट्स"]
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-500" />,
      title: "मोबाइल-अनुकूल",
      description: "सर्व डिव्हाइसेसवर उत्तम दिसेल",
      features: ["रिस्पॉन्सिव्ह डिझाइन", "फास्ट लोडिंग", "ऑफलाइन एक्सेस"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            आमच्या सेवा
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            तुमच्या विशेष प्रसंगासाठी सर्वोत्कृष्ट डिजिटल अनुभव
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-100 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 text-left">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">विशेष ऑफर!</h3>
            <p className="text-lg mb-6">
              आजच आमच्या प्रीमियम प्लॅनची सदस्यता घ्या आणि मिळवा <span className="font-bold">20% सवलत</span> आणि <span className="font-bold">विनामूल्य कस्टम डिझाइन</span> सेवा.
            </p>
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
              आता संपर्क साधा
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;