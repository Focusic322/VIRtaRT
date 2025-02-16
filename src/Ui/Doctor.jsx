import React from "react";
import ExperienceLogo from "../assets/logos/ExperienceLogo.svg";
import Education from "../assets/logos/Education.svg";
import Location from "../assets/logos/Location.svg";
import Button from "./Button";
import { useNavigate } from "react-router";

export default function Doctor({
  id,
  img,
  title,
  experience,
  speciality,
  education,
  location,
}) {
    const navigate = useNavigate();

    const handleMoreClick = () => {
        navigate(`/doctors/${id}`);
    };

  return (
    <div className="">
      <div className="flex items-center gap-4 max-md:grid max-md:text-center">
        <div className=" max-md:flex max-md:justify-center">
          <img
            src={img}
            alt={`Фото лікаря`}
            className=" w-[180px] h-[250px] rounded-sm  max-xl:w-[160px] max-md:!w-[200px] max-md:!h-[300px]"
          />
        </div>
        <div className="grid gap-2">
          <h3 className="pt-serif-bold text-xl text-darkBlue">{title}</h3>
          <h4 className="text-xl text-balance text-darkGray">{speciality}</h4>
          <span className="flex gap-2 text-darkGray text-lg max-md:justify-center">
            <img src={ExperienceLogo} alt="" className="w-4" />
            {experience} років досвіду
          </span>
        </div>
      </div>
      <div className="grid gap-2 items-center max-md:justify-center">
        <span className="flex pt-8 gap-3 text-darkGray text-lg">
          <img src={Location} alt="Локація" className="w-5" />
          {location}
        </span>
        <span className="flex gap-2 text-darkGray text-lg">
          <img src={Education} alt="Освіта" className="w-6" />
          {education}
        </span>
        <Button title="Більше про лікаря" onClick={handleMoreClick}/>
      </div>
    </div>
  );
}
