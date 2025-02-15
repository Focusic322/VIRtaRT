import React from "react";
import { Link } from "react-router";

export default function Button({ title, link, onClick }) {
  return (
    <Link to={link}>
      <button onClick={onClick} className="pt-serif-regular bg-darkBlue text-white text-lg rounded-xl pt-2 pb-2 pr-3 pl-3 hover:opacity-90 duration-700 max-md:w-[100%]">
        {title}
      </button>
    </Link>
  );
}
