import { FaBullseye, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

const Purpose = () => {
  const features = [
    {
      icon: <FaLightbulb className="text-2xl text-yellow-500" />,
      title: "नाविन्यपूर्ण उपाय",
      description: "तंत्रज्ञानाच्या मदतीने पारंपारिक आमंत्रण पद्धतीत नवीन आयाम"
    },
    {
      icon: <FaUsers className="text-2xl text-blue-500" />,
      title: "सर्वांसाठी सुलभ",
      description: "सोप्या आणि सोयीस्कर पद्धतीने आमंत्रणे पाठवणे"
    },
    {
      icon: <FaRocket className="text-2xl text-purple-500" />,
      title: "द्रुत प्रसारण",
      description: "केवळ काही क्लिकमध्ये आपल्या प्रियजनांपर्यंत पोहोच"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="block">आमचा उद्देश</span>
            <span className="text-indigo-600">आमची प्रेरणा</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                <FaBullseye className="text-4xl text-indigo-600" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                आमचे ध्येय
              </h3>
              <p className="text-gray-700 leading-relaxed">
                तुमच्या विशेष क्षणांना अधिक स्मरणीय बनवण्यासाठी आम्ही समर्पित आहोत. 
                आमच्या डिजिटल प्लॅटफॉर्मद्वारे आमंत्रणांची परंपरा आणि आधुनिक तंत्रज्ञान यांचे सुंदर सामंजस्य साधणे हे आमचे ध्येय आहे.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;