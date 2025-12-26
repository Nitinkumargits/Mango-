import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSection = () => {
  const desktopSwiperRef = useRef(null);
  const mobileSwiperRef = useRef(null);
  
  // Hero slides data
  const heroSlides = [
    {
      id: '1',
      name: 'Himampasand (Imam Pasand)',
      image: '/1.png',
      link: '/mangoes/1',
    },
    {
      id: '2',
      name: 'Banganapalli',
      image: '/2.png',
      link: '/mangoes/5',
    },
    {
      id: '3',
      name: 'Alphonso',
      image: '/3.png',
      link: '/mangoes/1',
    },
    {
      id: '4',
      name: 'Sendhura',
      image: '/4.png',
      link: '/mangoes',
    },
    {
      id: '5',
      name: 'Mango Variety',
      image: '/5.png',
      link: '/mangoes',
    },
  ];

  return (
    <>
      {/* Desktop Hero Carousel */}
      <section className="hero-carousel-desktop hidden md:block">
        <div className="hero-carousel-container">
          <Swiper
            ref={desktopSwiperRef}
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.hero-nav-prev',
              nextEl: '.hero-nav-next',
            }}
            pagination={{
              clickable: true,
              el: '.hero-pagination',
              bulletClass: 'hero-pagination-bullet',
              bulletActiveClass: 'hero-pagination-bullet-active',
            }}
            className="hero-swiper"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="hero-slide">
                  <div className="hero-image-container">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="hero-image"
                      loading="eager"
                    />
                    <div className="hero-overlay"></div>
                  </div>
                  <Link to={slide.link} className="hero-slide-link" aria-label={slide.name}>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Buttons */}
          <button
            className="hero-nav-button hero-nav-prev"
            onClick={() => desktopSwiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="hero-nav-button hero-nav-next"
            onClick={() => desktopSwiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Pagination */}
          <div className="hero-pagination"></div>
        </div>
      </section>

      {/* Mobile Hero Carousel */}
      <section className="hero-carousel-mobile block md:hidden">
        <div className="hero-carousel-container">
          <Swiper
            ref={mobileSwiperRef}
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.hero-nav-prev-mobile',
              nextEl: '.hero-nav-next-mobile',
            }}
            pagination={{
              clickable: true,
              el: '.hero-pagination-mobile',
              bulletClass: 'hero-pagination-bullet',
              bulletActiveClass: 'hero-pagination-bullet-active',
            }}
            className="hero-swiper"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="hero-slide">
                  <div className="hero-image-container">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="hero-image"
                      loading="eager"
                    />
                    <div className="hero-overlay"></div>
                  </div>
                  <Link to={slide.link} className="hero-slide-link" aria-label={slide.name}>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Buttons */}
          <button
            className="hero-nav-button hero-nav-prev-mobile"
            onClick={() => mobileSwiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="hero-nav-button hero-nav-next-mobile"
            onClick={() => mobileSwiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Pagination */}
          <div className="hero-pagination-mobile"></div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
