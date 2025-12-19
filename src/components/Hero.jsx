import { useEffect, useState, useRef } from "react";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRefs = useRef([]);

  // Preload videos
  useEffect(() => {
    const loadVideos = async () => {
      try {
        await Promise.all(
          videos.map((src) => {
            return new Promise((resolve, reject) => {
              const video = document.createElement('video');
              video.src = src;
              video.onloadeddata = resolve;
              video.onerror = reject;
            });
          })
        );
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading videos:', error);
        setHasError(true);
        setIsLoading(false);
      }
    };

    loadVideos();
  }, []);

  // Auto-rotate videos
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Play video when active changes
  useEffect(() => {
    if (videoRefs.current[active]) {
      const playPromise = videoRefs.current[active].play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing video:', error);
        });
      }
    }
  }, [active]);

  return (
    <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              तुमच्या विशेष क्षणांना  
              <span className="block text-indigo-300 mt-2">
                सजवा डिजिटल रंगात
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              सुंदर, वैयक्तिकृत डिजिटल आमंत्रणे तयार करा आणि
              तुमच्या प्रियजनांसोबत सहज शेअर करा.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold shadow hover:bg-indigo-50"
              >
                आता सुरू करा
              </a>

              <a
                href="#services"
                className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10"
              >
                आमच्या सेवा
              </a>
            </div>

            <div className="mt-12">
              <div className="flex flex-wrap justify-start gap-8 sm:gap-12">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">1000+</div>
                  <div className="text-indigo-900 text-sm sm:text-base mt-1 font-medium">ग्राहक</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">5000+</div>
                  <div className="text-indigo-900 text-sm sm:text-base mt-1 font-medium">आमंत्रणे</div>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-md">24/7</div>
                  <div className="text-indigo-900 text-sm sm:text-base mt-1 font-medium">सपोर्ट</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VIDEO SLIDER */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video w-full max-w-2xl mx-auto">
            {isLoading ? (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="animate-pulse text-white">लोड होत आहे...</div>
              </div>
            ) : hasError ? (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚠️</div>
                  <p className="text-white">व्हिडिओ लोड करण्यात त्रुटी आली</p>
                </div>
              </div>
            ) : (
              <>
                {videos.map((src, index) => (
                  <video
                    key={index}
                    ref={el => videoRefs.current[index] = el}
                    src={src}
                    autoPlay={index === 0}
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === active ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    onError={(e) => {
                      console.error('Error loading video:', e);
                      if (!hasError) setHasError(true);
                    }}
                  />
                ))}

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {videos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === active ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Wave */}
      <svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 w-full text-white"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L48,64C96,64,192,64,288,58.7C384,53,480,43,576,53.3C672,64,768,96,864,96C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>
    </section>
  );
};

export default Hero;
