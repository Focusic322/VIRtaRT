import React from "react";

export default function Service({ title, img }) {
  return (
    <div className="relative inline-block">
      <img src={img} alt={title} className="w-[500px] rounded-2xl " />
      <h4 className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-darkBlue text-xl pt-3 pb-3 w-[75%] rounded-xl text-center max-xss:pr-1 max-xss:pl-1 max-xss:pt-2 max-xss:pb-2 max-xss:text-sm">
        {title}
      </h4>
    </div>
  );
}
