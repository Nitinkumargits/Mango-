import { Link } from "react-router-dom";

const DailyBoostSection = () => {
  return (
    <section className="px-4 md:px-12 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 relative pt-12 md:pt-20 lg:pt-36 pb-32 md:pb-60 overflow-hidden">
      <div
        className="container mx-auto max-w-7xl relative"
        style={{ zIndex: 2 }}>
        <div className="w-full">
          <div className="text-center md:text-left max-w-2xl">
            <div className="section-title-wrapper mb-5">
              <span className="text-gray-800 text-sm md:text-base font-semibold uppercase tracking-wider block mb-2">
                Get Your
              </span>
              <h2 className="text-mango-green text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
                DAILY BOOST
              </h2>
            </div>

            <div className="paragraph text-gray-800 text-base md:text-lg leading-relaxed mt-5 mb-8">
              <p className="mb-3">
                There's fruit with healthy benefits, and then there's mango —
                packed with over 20 different vitamins and minerals.
              </p>
              <p>It's a legit superfood that tastes like a super dream!</p>
            </div>

            <div className="mt-8">
              <Link
                to="/mango-nutrition"
                className="btn bg-red-700 hover:bg-red-800 text-white font-bold uppercase px-8 md:px-10 py-3 rounded-lg inline-block transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                title="See Benefits">
                See Benefits
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Mango Image - Right Side */}
      <div
        className="absolute right-12 top-1/2 -translate-y-1/2 w-1/2 md:w-2/5 lg:w-1/3 max-w-lg pointer-events-none hidden md:block daily-boost-image-wrapper"
        style={{ zIndex: 1 }}>
        {/* Glow effect behind image */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 via-orange-400/30 to-yellow-300/40 rounded-full blur-3xl transform scale-150 daily-boost-glow"></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-60 daily-boost-particle"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
              }}></div>
          ))}
        </div>

        {/* Main image with enhancements */}
        <div className="relative daily-boost-image-container">
          <img
            src="https://www.mango.org/wp-content/themes/mango-child/css/img/daily-boost.png"
            alt="Mango Daily Boost - Mango smoothie with fresh mangoes"
            className="w-full h-auto object-contain daily-boost-img relative z-10"
            loading="lazy"
          />

          {/* Shine overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full daily-boost-shine pointer-events-none z-20"></div>
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl daily-boost-deco-1"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl daily-boost-deco-2"></div>
      </div>

      {/* Decorative Bottom Swipe - Desktop */}
      <div
        className="absolute bottom-0 left-0 w-full hidden md:block"
        style={{ zIndex: 1 }}>
        <div className="relative w-full h-32 md:h-40 lg:h-48">
          {/* Purple/Magenta swipe curves */}
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Upper red-orange curve */}
            <path
              d="M0,120 Q360,80 720,100 T1440,90 L1440,200 L0,200 Z"
              fill="#e63946"
              opacity="0.8"
            />
            {/* Lower magenta/purple curve */}
            <path
              d="M0,140 Q360,100 720,120 T1440,110 L1440,200 L0,200 Z"
              fill="#8e2246"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>

      {/* Decorative Bottom Swipe - Mobile */}
      <div
        className="absolute bottom-0 left-0 w-full block md:hidden"
        style={{ zIndex: 1 }}>
        <div className="relative w-full h-24">
          <svg
            className="w-full h-full"
            viewBox="0 0 375 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            {/* Upper red-orange curve */}
            <path
              d="M0,70 Q187.5,50 375,60 L375,100 L0,100 Z"
              fill="#e63946"
              opacity="0.8"
            />
            {/* Lower magenta/purple curve */}
            <path
              d="M0,80 Q187.5,60 375,70 L375,100 L0,100 Z"
              fill="#8e2246"
              opacity="0.9"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default DailyBoostSection;
