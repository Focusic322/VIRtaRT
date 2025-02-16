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
      <h4 className="flex justify-center text-6xl text-darkBlue pb-14 ">
        Відгуки
      </h4>
      <div className="relative w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            el: ".custom-pagination__testimonials",
            clickable: true,
          }}
          resizeObserver={true}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
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
              title="Кость Сергій"
              img={avatarLogo}
              testimonial="12.03.2023р. я попав з інфарктом у відділення інтервенційної радіології ЦМЛ м. Рівне. 
Хочу щиро подякувати лікарям, медичному персоналу та санпрацівницям цього відділення за моє спасіння, Ваш професіоналізм, уважність і турботу. Особлива моя подяка лікарю-кардіологу Фітьо Олегу Богдановичу, який робив мені коронарографію (стентування). Саме відділення чисте, сучасне, доглянуте, дякуючи лікарям і персоналу відділення. Лікарі і персонал - професіонали свого діла! Всі на своїх місцях, чуйні та уважні, готові в любий час доби прийти на допомогу! Незважаючи на війну в країні, під час тривог, всі роблять кожен свою нелегку справу! Низький Вам уклін, здоров'я, професійного росту і нашої перемоги, яка незабаром!
Слава Україні! 
Слава нашим медикам!"
            />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <Testimonial
              title="Ім'я не вказано"
              img={avatarLogo}
              testimonial="Від щирого серця хочемо подякувати всім медичним працівникам відділення інтервенційної радіології та реперфузійної терапії за те, що врятували життя моєї мами - Большакової В.М. 
                Тут дійсно працюють професіонали, відповідальні фахівці своєї справи, врівноважені і чуйні до кожного з пацієнтів, готові морально підтримати і поглядом, і словом.
                Ми щиро бажаємо Вам успішно продовжувати рятувати своїх пацієнтів, завжди виправдовувати всі добрі надії і неодмінно знаходити вихід з будь-якої ситуації.
                Окреме Дякую від всієї нашої родини Овсійчуку Р.М., Данильчук І.І., Мельнику О.Р.  за Вашу працю, за Ваш професіоналізм, за Вашу самовідданість."
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
