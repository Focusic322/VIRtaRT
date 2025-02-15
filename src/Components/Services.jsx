import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Коронографія from "./../assets/imges/Коронографія.jpg";
import Стентування from "./../assets/imges/Стентування.jpg";
import Ехокардіографія from "./../assets/imges/Ехокардіографія.jpg";
import ТрансторакальнаЕхографія from "./../assets/imges/ТрансторакальнаЕхографія.jpg";
import ЕКГ from "./../assets/imges/ЕКГ.jpg";
import АТ from "./../assets/imges/АТ.jpg";
import АортокоронарнеШунтування from "./../assets/imges/АортокоронарнеШунтування.jpg";
import Протезування from "./../assets/imges/Протезування.jpg";
import ШВР from "./../assets/imges/ШВР.jpg";
import CRTD from "./../assets/imges/CRTD.jpg";
import Кардіовертер from "./../assets/imges/Кардіовертер.avif";
import ЦеребральнаАнгіографія from "./../assets/imges/ЦеребральнаАнгіографія.png";


import Service from "../Ui/Service";

export default function Services() {
  const services = [
    { title: "Коронографія серця", img: Коронографія },
    { title: "Стентування коронарних артерій", img: Стентування },
    { title: "Трансезофагеальна ехокардіографія", img: Ехокардіографія },
    { title: "Трансторакальна ехокардіографія", img: ТрансторакальнаЕхографія },
    { title: "Холтерівське моніторування ЕКГ", img: ЕКГ },
    { title: "Холтерівське моніторування АТ", img: АТ },
    { title: "Аортокоронарне шунтування", img: АортокоронарнеШунтування },
    { title: "Протезування клапанів серця", img: Протезування },
    { title: "Імплантація ШВР", img: ШВР },
    { title: "Імплантація CRTD", img: CRTD },
    { title: "Імплантація кардіовертера-дефібрилятора", img: Кардіовертер },
    { title: "Церебральна ангіографія", img: ЦеребральнаАнгіографія },
  ];

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
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="w-[300px] mx-auto">
                <Service title={service.title} img={service.img} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination flex justify-center gap-2 mt-4"></div>
      </div>
    </div>
  );
}
