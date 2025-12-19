// src/components/Alert.jsx
import { useEffect, useState } from 'react';

const Alert = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [countdown, setCountdown] = useState(10); // 10 seconds to close

  // Show alert every 60 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setShowAlert(true);
      setCountdown(10);
    }, 60000); // 60 seconds

    // Show first alert after 5 seconds of page load
    const initialTimer = setTimeout(() => {
      setShowAlert(true);
      setCountdown(10);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(initialTimer);
    };
  }, []);

  // Handle countdown
  useEffect(() => {
    let timer;
    if (showAlert) {
      // Prevent scrolling when alert is shown
      document.body.style.overflow = 'hidden';
      
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setShowAlert(false);
            document.body.style.overflow = 'auto';
            clearInterval(timer);
            return 10;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'auto';
    };
  }, [showAlert]);

  // Handle beforeunload
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = 'Are you sure you want to leave?';
      return e.returnValue;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleClose = () => {
    setShowAlert(false);
    document.body.style.overflow = 'auto';
  };

  if (!showAlert) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-indigo-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Alert Popup */}
        <div 
          className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all border border-indigo-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5 rounded-t-2xl">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">विशेष ऑफर! ✨</h3>
              <button 
                onClick={handleClose}
                className="text-white hover:text-indigo-100 text-2xl transition-colors"
              >
                &times;
              </button>
            </div>
            <div className="mt-1 w-12 h-1 bg-white/30 rounded-full"></div>
          </div>

          {/* Body */}
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">💌</div>
              <h4 className="text-2xl font-bold text-indigo-900 mb-2">विशेष सवलत!</h4>
              <p className="text-indigo-700 mb-4">
                आमच्या विशेष सवलतीचा लाभ घ्या! मर्यादित वेळेसाठी विशेष ऑफर!
              </p>
              <p className="text-sm text-indigo-500">
                ऑफर संपण्याआधी: <span className="font-bold">{countdown} सेकंद</span>
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-indigo-100 rounded-full h-2 mb-6 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300" 
                style={{ width: `${(countdown / 10) * 100}%` }}
              ></div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleClose}
                className="flex-1 px-4 py-2.5 border border-indigo-200 text-indigo-700 rounded-lg hover:bg-indigo-50 transition-all font-medium"
              >
                नंतर
              </button>
              <button
                onClick={() => {
                  window.location.href = '#contact';
                  handleClose();
                }}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                आता जाणा
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;