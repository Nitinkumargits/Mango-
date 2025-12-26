import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useMangoes from '../hooks/useMangoes';
import MangoCard from './MangoCard';
import LoadingSpinner from './LoadingSpinner';
import Button from './Button';

const MangoFanFavoritesSection = () => {
  const { data: mangoes, isLoading } = useMangoes();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Get first 6 mangoes for the carousel
  const featuredMangoes = mangoes?.slice(0, 6) || [];

  if (isLoading) {
    return <LoadingSpinner size="lg" />;
  }

  if (!featuredMangoes || featuredMangoes.length === 0) {
    return null;
  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-mango-yellow via-mango-orange to-red-600">
      <div className="px-4 md:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            {/* Section Title */}
            <div className="section-title-wrapper mb-5">
              <span className="text-gray-800 text-sm md:text-base font-semibold uppercase tracking-wide">
                PREMIUM MANGOES
              </span>
              <h2 className="text-mango-green text-4xl md:text-5xl lg:text-6xl font-bold uppercase mt-2">
                FAN FAVORITES
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-md mx-auto mt-5 mb-8">
              <p className="text-gray-800 text-base md:text-lg">
                These premium mango varieties have proven to be a hit! Explore our most loved selections from Indian farms.
              </p>
            </div>

            {/* View All Button */}
            <div className="mt-8 md:mt-12">
              <Link to="/mangoes">
                <Button className="bg-red-700 hover:bg-red-800 text-white uppercase font-bold px-6 py-3">
                  View All Mango Varieties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="container mx-auto mt-12 md:mt-14 relative" style={{ zIndex: 1 }}>
        <div className="px-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            onInit={(swiper) => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="py-6"
          >
            {featuredMangoes.map((mango) => (
              <SwiperSlide key={mango.id} className="h-auto">
                <MangoCard mango={mango} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6 md:mt-8">
            <button
              ref={prevRef}
              className="border-0 bg-transparent p-0 cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
              >
                <circle cx="26.5" cy="26.5" r="26.5" fill="#8e2246" />
                <path
                  d="M12.1,0,24.2,21.175H0Z"
                  transform="translate(23.552 8.981) rotate(30)"
                  fill="#fff"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="border-0 bg-transparent p-0 cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="53"
                height="53"
                viewBox="0 0 53 53"
              >
                <circle cx="26.5" cy="26.5" r="26.5" fill="#8e2246" />
                <path
                  d="M12.1,0,24.2,21.175H0Z"
                  transform="translate(8.427 21.081) rotate(-30)"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MangoFanFavoritesSection;

