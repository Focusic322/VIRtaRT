import React from "react";
import ScrollToTop from "../Ui/ScrollToTop";
import serviceData from "../data/services";
import { useParams } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function ServiceInformation() {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const service = serviceData.find((doc) => doc.id === numericId);

  if (!service) {
    return (
      <h2 className="text-2xl text-center text-darkBlue font-medium pt-14">
        Процедуру не знайдено
      </h2>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToTop />
      <div className="flex pt-10 pb-10 pr-2 pl-2 items-center gap-2 max-xl:grid max-xl:pr-0 max-xl:pl-0">
        <div className="w-[100%] pl-14 max-sm:pl-7 max-xl:pr-14 max-sm:pr-7 pt-6 pb-4 max-xl:grid max-xl:text-center max-xl:w-full max-xl:justify-center">
          <h3 className="pt-serif-bold text-darkBlue text-2xl pb-4">
            Інформація про послугу
          </h3>
          <span className="text-darkGray text-xl">{service.details}</span>
        </div>
        <div className="flex justify-center items-center w-full h-[550px] max-xl:h-[300px] max-sm:h-[200px]  mx-auto">
          <img
            src={service.img}
            alt={`Фото процедури ${service.title}`}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
