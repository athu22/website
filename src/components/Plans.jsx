// Create a new file: src/components/Plans.jsx
import { FaCheckCircle, FaStar, FaGift, FaHeadset } from 'react-icons/fa';

const Plans = () => {
  const plans = [
    {
      name: "मूलभूत योजना",
      price: "₹6,999",
      period: "एकूण किंमत",
      popular: false,
      features: [
        "दोन सुंदर पत्रिका",
        "दोन वेळेस फोन कॉल",
        "लग्नाच्या दिवशी रिमाइंडर",
        "नवरदेव-नवरीच्या फोटोसह गुगल मॅप",
        "24 तास आधार"
      ],
      buttonText: "आता निवडा"
    },
    {
      name: "प्रीमियम योजना",
      price: "₹7,999",
      period: "एकूण किंमत",
      popular: true,
      features: [
        "दोन पत्रिका + हळदीची पत्रिका",
        "दोन फोन कॉल",
        "लग्नाच्या दिवशी रिमाइंडर",
        "नवरदेव-नवरीच्या फोटोसह गुगल मॅप",
        "फोन पे/गुगल पे साठी क्यूआर कोड",
        "24/7 प्राधान्य आधार"
      ],
      buttonText: "लोकप्रिय निवड"
    },
    {
      name: "व्हीआयपी योजना",
      price: "₹8,999",
      period: "एकूण किंमत",
      popular: false,
      features: [
        "तीन पत्रिका + हळदीची पत्रिका",
        "तीन फोन कॉल",
        "लग्नाच्या दिवशी सकाळी रिमाइंडर",
        "नवरदेव-नवरीच्या फोटोसह गुगल मॅप",
        "आई-वडिलांच्या आवाजातील व्हॉइस कॉल",
        "व्हीआयपी आधार"
      ],
      buttonText: "प्रीमियम निवड"
    }
  ];

  return (
    <section id="plans" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            आमच्या योजना
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            तुमच्या गरजेनुसार योग्य योजना निवडा आणि तुमच्या विशेष प्रसंगाला विशेष बनवा
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-indigo-500 transform -translate-y-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-indigo-600 text-white text-sm font-semibold py-1 text-center">
                  सर्वात लोकप्रिय
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                  <span className="text-gray-500"> {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold ${
                  plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                } transition-colors`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              सर्व योजनांमध्ये समाविष्ट
            </h3>
            <div className="w-16 h-1 bg-indigo-500 mx-auto mb-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-yellow-500 text-2xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">उच्च दर्जाची गुणवत्ता</h4>
              <p className="text-gray-600">सर्वोत्कृष्ट डिझाइन आणि वापरकर्ता अनुभव</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGift className="text-pink-500 text-2xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">विशेष सवलती</h4>
              <p className="text-gray-600">नियमित ग्राहकांसाठी विशेष ऑफर्स</p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-blue-500 text-2xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">24/7 आधार</h4>
              <p className="text-gray-600">तुमच्या प्रश्नांसाठी आमची टीम तुमच्यासोबत आहे</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;