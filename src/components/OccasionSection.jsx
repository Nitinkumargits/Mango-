import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { fetchOccasions } from '../services/occasionService';
import LoadingSpinner from './LoadingSpinner';

const OccasionSection = () => {
  const [occasions, setOccasions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    const loadOccasions = async () => {
      try {
        const data = await fetchOccasions();
        setOccasions(data);
      } catch (error) {
        console.error('Failed to load occasions:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadOccasions();
  }, []);

  if (isLoading) {
    return <LoadingSpinner size="lg" />;
  }

  return (
    <section className="pt-16 md:pt-20 pb-16 md:pb-20 bg-gray-50">
      <div className="px-4 md:px-12">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="section-title-wrapper mb-8">
              <span className="text-gray-700 text-sm md:text-base font-semibold uppercase tracking-wider block mb-3">
                MANGOS GO WITH
              </span>
              <h2 className="text-mango-green text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
                EVERY OCCASION
              </h2>
            </div>
            <div className="max-w-2xl mx-auto mt-8 mb-12">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Come on in and discover tips, tricks and recipes — helping to bring mango into your everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 mt-12 md:mt-16 overflow-hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          direction="horizontal"
          spaceBetween={10}
          slidesPerView="auto"
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            reverseDirection: false,
            waitForTransition: true,
          }}
          loop={occasions.length > 1}
          loopAdditionalSlides={occasions.length > 2 ? 2 : occasions.length}
          watchSlidesProgress={true}
          loopPreventsSliding={false}
          speed={600}
          effect="slide"
          grabCursor={true}
          observer={true}
          observeParents={true}
          navigation={{
            prevEl: '.prev-occ',
            nextEl: '.next-occ',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onTransitionStart={(swiper) => {
            swiper.allowTouchMove = false;
          }}
          onTransitionEnd={(swiper) => {
            swiper.allowTouchMove = true;
            if (swiper.autoplay && !swiper.autoplay.running) {
              swiper.autoplay.start();
            }
          }}
          breakpoints={{
            640: {
              slidesPerView: 'auto',
              spaceBetween: 10,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 10,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 'auto',
              spaceBetween: 10,
              centeredSlides: true,
            },
          }}
          className="py-8 md:py-12 occasion-swiper"
        >
          {occasions.map((occasion, index) => (
            <SwiperSlide 
              key={occasion.id} 
              style={{ width: 'auto', maxWidth: 'calc(100vw - 80px)' }} 
              data-swiper-slide-index={index}
            >
              <div className="card border-0 rounded-14 relative overflow-hidden mx-auto w-full shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="relative group" style={{ height: '580px', overflow: 'hidden' }}>
                  <img
                    src={occasion.image}
                    alt={occasion.title || ''}
                    className="w-full mx-auto block h-full object-cover rounded-14 transition-transform duration-500 group-hover:scale-105"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div
                    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-mango-yellow-light to-mango-orange-light rounded-14 absolute inset-0"
                    style={{ display: 'none' }}
                  >
                    <span className="text-8xl">🥭</span>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-14"></div>
                  {/* Button */}
                  <div className="card-body absolute bottom-0 left-0 right-0 p-6">
                    <Link
                      to={occasion.link}
                      className="btn bg-red-700 hover:bg-red-800 text-white font-bold uppercase px-10 py-3 rounded-lg inline-block transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      title={occasion.buttonText}
                    >
                      {occasion.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="container mx-auto mt-8 md:mt-12">
          <div className="flex justify-center gap-3">
            <button
              className="slider-button prev-occ border-0 bg-transparent p-0 cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              tabIndex={0}
              aria-label="Previous slide"
            >
              <span className="sr-only">Previous Slide</span>
              <svg
                id="Group_255"
                data-name="Group 255"
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
              >
                <circle id="Ellipse_5" data-name="Ellipse 5" cx="26.5" cy="26.5" r="26.5" fill="#8e2246" />
                <path
                  id="Polygon_4"
                  data-name="Polygon 4"
                  d="M12.1,0,24.2,21.175H0Z"
                  transform="translate(23.552 8.981) rotate(30)"
                  fill="#fff"
                />
              </svg>
            </button>
            <button
              className="slider-button next-occ border-0 bg-transparent p-0 cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              tabIndex={0}
              aria-label="Next slide"
            >
              <span className="sr-only">Next Slide</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
              >
                <g id="Group_254" data-name="Group 254" transform="translate(0.063)">
                  <circle id="Ellipse_5" data-name="Ellipse 5" cx="26.5" cy="26.5" r="26.5" transform="translate(-0.063)" fill="#8e2246" />
                  <path
                    id="Polygon_4"
                    data-name="Polygon 4"
                    d="M12.1,0,24.2,21.175H0Z"
                    transform="translate(8.427 21.081) rotate(-30)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OccasionSection;

