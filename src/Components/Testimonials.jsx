import React from "react";
import Testimonial from "../Ui/Testimonial";
import avatarLogo from "../assets/logos/profile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <div className="pt-14 pb-14">
        <h4 className="flex justify-center text-6xl text-darkBlue pb-14 ">Відгуки</h4>
      <div className="relative w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ el: ".custom-pagination__testimonials", clickable: true }}
          resizeObserver={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={2}
          centeredSlides={false}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: true },
            640: { slidesPerView: 1, centeredSlides: true },
            800: { slidesPerView: 2, centeredSlides: false },
          }}
        >
          <SwiperSlide key={1}>
            <Testimonial
              title="Амвросій Метлинський"
              img={avatarLogo}
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis lacinia tristique. Vivamus fermentum auctor arcu eu tempor. Sed dignissim nec magna eu tempor. Suspendisse egestas elementum urna a condimentum. Donec in urna eu leo dictum posuere eget non justo. Praesent fringilla, felis quis molestie venenatis, sem orci varius arcu, vel rhoncus nisl risus id ipsum. Vestibulum blandit est quis mi porttitor, eu tincidunt risus pellentesque. Fusce ante erat, imperdiet sagittis accumsan eget, aliquet id leo. Aenean placerat viverra metus, vel imperdiet lectus aliquet et. Nam mollis mi gravida maximus hendrerit."
            />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <Testimonial
              title="Амвросій Метлинський"
              img={avatarLogo}
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis lacinia tristique. Vivamus fermentum auctor arcu eu tempor. Sed dignissim nec magna eu tempor. Suspendisse egestas elementum urna a condimentum. Donec in urna eu leo dictum posuere eget non justo. Praesent fringilla, felis quis molestie venenatis, sem orci varius arcu, vel rhoncus nisl risus id ipsum. Vestibulum blandit est quis mi porttitor, eu tincidunt risus pellentesque. Fusce ante erat, imperdiet sagittis accumsan eget, aliquet id leo. Aenean placerat viverra metus, vel imperdiet lectus aliquet et. Nam mollis mi gravida maximus hendrerit."
            />
          </SwiperSlide>
          <SwiperSlide key={3}>
            <Testimonial
              title="Амвросій Метлинський"
              img={avatarLogo}
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis lacinia tristique. Vivamus fermentum auctor arcu eu tempor. Sed dignissim nec magna eu tempor. Suspendisse egestas elementum urna a condimentum. Donec in urna eu leo dictum posuere eget non justo. Praesent fringilla, felis quis molestie venenatis, sem orci varius arcu, vel rhoncus nisl risus id ipsum. Vestibulum blandit est quis mi porttitor, eu tincidunt risus pellentesque. Fusce ante erat, imperdiet sagittis accumsan eget, aliquet id leo. Aenean placerat viverra metus, vel imperdiet lectus aliquet et. Nam mollis mi gravida maximus hendrerit."
            />
          </SwiperSlide>
          <SwiperSlide key={4}>
            <Testimonial
              title="Амвросій Метлинський"
              img={avatarLogo}
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis lacinia tristique. Vivamus fermentum auctor arcu eu tempor. Sed dignissim nec magna eu tempor. Suspendisse egestas elementum urna a condimentum. Donec in urna eu leo dictum posuere eget non justo. Praesent fringilla, felis quis molestie venenatis, sem orci varius arcu, vel rhoncus nisl risus id ipsum. Vestibulum blandit est quis mi porttitor, eu tincidunt risus pellentesque. Fusce ante erat, imperdiet sagittis accumsan eget, aliquet id leo. Aenean placerat viverra metus, vel imperdiet lectus aliquet et. Nam mollis mi gravida maximus hendrerit."
            />
          </SwiperSlide>
          <SwiperSlide key={5}>
            <Testimonial
              title="Амвросій Метлинський"
              img={avatarLogo}
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis lacinia tristique. Vivamus fermentum auctor arcu eu tempor. Sed dignissim nec magna eu tempor. Suspendisse egestas elementum urna a condimentum. Donec in urna eu leo dictum posuere eget non justo. Praesent fringilla, felis quis molestie venenatis, sem orci varius arcu, vel rhoncus nisl risus id ipsum. Vestibulum blandit est quis mi porttitor, eu tincidunt risus pellentesque. Fusce ante erat, imperdiet sagittis accumsan eget, aliquet id leo. Aenean placerat viverra metus, vel imperdiet lectus aliquet et. Nam mollis mi gravida maximus hendrerit."
            />
          </SwiperSlide>
          <SwiperSlide key={6}>
            <Testimonial
              title="Амвросій Метлинський"
              img={avatarLogo}
              testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis lacinia tristique. Vivamus fermentum auctor arcu eu tempor. Sed dignissim nec magna eu tempor. Suspendisse egestas elementum urna a condimentum. Donec in urna eu leo dictum posuere eget non justo. Praesent fringilla, felis quis molestie venenatis, sem orci varius arcu, vel rhoncus nisl risus id ipsum. Vestibulum blandit est quis mi porttitor, eu tincidunt risus pellentesque. Fusce ante erat, imperdiet sagittis accumsan eget, aliquet id leo. Aenean placerat viverra metus, vel imperdiet lectus aliquet et. Nam mollis mi gravida maximus hendrerit."
            />
          </SwiperSlide>
        </Swiper>
        <div className="custom-pagination__testimonials flex justify-center gap-2 mt-4"></div>
      </div>
    </div>
  );
}
