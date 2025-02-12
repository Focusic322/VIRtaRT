import React from "react";
import Button from "../Ui/Button";
import WelcomePhoto from "../assets/imges/WelcomePhoto.jpg";

export default function Welcome() {
  return (
    <div className="flex items-center justify-evenly pt-14 max-md:grid max-md:pt-4 ">
      <div className="grid pl-14 pr-14 max-sm:pl-7 max-sm:pr-7">
        <h2 className="pt-serif-bold text-darkBlue text-4xl font-medium pb-4 max-md:text-3xl">
          Вітаємо до відділення інтервенційної радіології та реперфузійної
          терапії
        </h2>
        <span className="text-lg pb-4 max-xss:text-sm">
          Ми надаємо невідкладну медичну допомогу хворим <br /> на гострий
          коронарний синдром з елевацією сегмента ST в режимі 24/7/365
        </span>
        <div className="pb-8">
          <Button title="Дізнатися більше" />
        </div>
      </div>
      <img
        src={WelcomePhoto}
        alt=""
        className="rounded-lg max-xl:w-1/2 max-md:!w-[100%]"
      />
    </div>
  );
}
