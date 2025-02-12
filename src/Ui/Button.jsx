import React from "react";

export default function Button({ title, link }) {
  return (
    <div>
      <button className="pt-serif-regular bg-darkBlue text-white text-lg rounded-xl pt-2 pb-2 pr-3 pl-3 hover:opacity-90 duration-700 max-sm:w-[100%]">
        <a href={link}>{title}</a>
      </button>
    </div>
  );
}
