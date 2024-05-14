import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slider1 from "../../assets/images/slide1.jpg";
import slider2 from "../../assets/images/slide2.jpg";
import slider3 from "../../assets/images/slide3.jpg";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
const Banner = () => {
  const [typewriterKey, setTypewriterKey] = useState(0);
  const resetTypewriter = () => {
    setTypewriterKey((prevKey) => prevKey + 1);
  };
  return (
    <div className="banner-area">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={resetTypewriter}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="lg:h-screen">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${slider1})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg ">
                  <h1 className="mb-5 text-5xl font-bold">
                    D
                    <Typewriter
                      key={typewriterKey}
                      words={["REAMDAY"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </h1>
                  <p className="mb-5 text-white ">
                    DreamDay Event Manager creates unforgettable experiences,
                    meticulously planning every detail to perfection. From
                    weddings to corporate gatherings, we turn dreams into
                    reality with precision and flair.
                  </p>
                  <button className="btn project-btn">Explore!</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:h-screen">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${slider2})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg ">
                  <h1 className="mb-5 text-5xl font-bold ">
                    D
                    <Typewriter
                      key={typewriterKey}
                      words={["REAMDAY"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </h1>
                  <p className="mb-5 text-white">
                    DreamDay Event Manager creates unforgettable experiences,
                    meticulously planning every detail to perfection. From
                    weddings to corporate gatherings, we turn dreams into
                    reality with precision and flair.
                  </p>
                  <button className="btn project-btn">Explore!</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:h-screen">
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${slider3})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg ">
                  <h1 className="mb-5 text-5xl font-bold ">
                    D
                    <Typewriter
                      key={typewriterKey}
                      words={["REAMDAY"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={60}
                      deleteSpeed={60}
                      delaySpeed={2000}
                    />
                  </h1>
                  <p className="mb-5  text-white">
                    DreamDay Event Manager creates unforgettable experiences,
                    meticulously planning every detail to perfection. From
                    weddings to corporate gatherings, we turn dreams into
                    reality with precision and flair.
                  </p>
                  <button className="btn project-btn">Explore!</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
