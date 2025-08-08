import React from "react";

function Button({ title, id, containerClass, leftIcon, rightIcon }) {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-voilet-50 px-7 py-3 text-black bg-white ${containerClass}`}
    >
      {leftIcon}
      <span className="overflow-hidden inline-flex relative font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
}

export default Button;
