import React from 'react';
import { FaLightbulb, FaHeart, FaUsers, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            <span className="block">आमच्याबद्दल</span>
            <span className="block text-indigo-600">आमची कहाणी, आमची ओळख</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="./src/assets/team.jpeg"
                alt="आमची टीम"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-600/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full -z-10"></div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              डिजिटल युगातील आमचा प्रवास
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              आमंत्रणजी.डॉट.कॉम ही एक अभिनव संकल्पना आहे जी आपल्या विशेष क्षणांना अधिक सुंदर आणि स्मरणीय बनवते. आमची सुरुवात एका साध्या कल्पनेपासून झाली - तंत्रज्ञानाच्या साहाय्याने पारंपारिक आमंत्रण पद्धतींमध्ये नवीन आयाम जोडणे.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="p-6 bg-indigo-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <FaLightbulb className="text-indigo-600 text-xl" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">आमचे ध्येय</h4>
                <p className="text-sm text-slate-600">तंत्रज्ञान आणि सर्जनशीलतेच्या साहाय्याने प्रत्येक आमंत्रणाला विशेष बनवणे.</p>
              </div>
              
              <div className="p-6 bg-yellow-50 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <FaHeart className="text-yellow-600 text-xl" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-2">आमचे तत्त्व</h4>
                <p className="text-sm text-slate-600">ग्राहकांच्या आवडीला प्राधान्य देऊन वैयक्तिकृत सेवा पुरविणे.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <FaMobileAlt className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">डिजिटल पध्दती</h3>
            <p className="text-slate-600 text-center">आधुनिक तंत्रज्ञानाचा वापर करून सुंदर आणि सोयीस्कर आमंत्रणे</p>
          </div>
          
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <FaUsers className="text-yellow-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">व्यावसायिक टीम</h3>
            <p className="text-slate-600 text-center">अनुभवी आणि कल्पक व्यावसायिकांची सुसज्ज टीम</p>
          </div>
          
          <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <FaHeart className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">स्वतःचे स्वरूप</h3>
            <p className="text-slate-600 text-center">प्रत्येक आमंत्रणाला वैयक्तिक स्पर्श देण्याची मोफत सेवा</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
