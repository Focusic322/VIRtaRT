import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Service1 from "./../assets/imges/Service1.jpg";
import Service from "../Ui/Service";

export default function Services() {
  return (
    <div className="pt-10">
      <div className="flex justify-center items-center text-center pb-6">
        <div className="max-w-2xl">
          <h3 className="text-darkBlue text-5xl max-md:text-4xl max-xss:!text-3xl pb-2">
            Послуги, які ми <span className="text-yellow">надаємо</span>
          </h3>
          <p className="text-darkGray text-lg leading-relaxed max-xss:text-sm">
            Наше відділення оснащене сучасним обладнанням, що відповідає
            міжнародним стандартам, і пропонує передові медичні технології, які
            забезпечують високий рівень діагностики та лікування
            серцево-судинних захворювань.
          </p>
        </div>
      </div>
      <div className="relative w-full  ">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ el: ".custom-pagination", clickable: true }}
          resizeObserver={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={false}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true },
            640: { slidesPerView: 1, centeredSlides: true },
            800: { slidesPerView: 2, centeredSlides: false },
            1200: { slidesPerView: 3, centeredSlides: false },
          }}
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="w-[300px] mx-auto">
                <Service
                  title={`Шотатам бла-блабла${index + 1}`}
                  img={Service1}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
      </div>
    </div>
  );
}
