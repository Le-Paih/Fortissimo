import { useState } from "react";

function ArtistCard({ img, name }) {
  const [imgHover, setImgHover] = useState(false);

  const hoverBox = () => {
    setImgHover(true);
  };

  const hoverBoxRemove = () => {
    setImgHover(false);
  };

  return (
    <div
      className="z-10 mt-5 flex flex-col rounded-b-2xl shadow-xl transition-all duration-200 hover:scale-105 md:mt-0"
      onMouseEnter={hoverBox}
      onMouseLeave={hoverBoxRemove}
    >
      <img
        src={img}
        className={`trasition rounded-t-2xl grayscale duration-200 md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] ${
          imgHover ? "hover:grayscale-0" : ""
        }`}
      />
      <div className="flex h-16 rounded-b-2xl bg-stone-200 text-center ">
        <h3 className="z-20 mx-auto my-auto text-2xl font-semibold text-stone-700">
          {name}
        </h3>
      </div>
    </div>
  );
}

export default ArtistCard;
