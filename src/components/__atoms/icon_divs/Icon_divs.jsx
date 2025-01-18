import React from "react";
import "../icon_divs/Icon_divs.css";

function Icon_divs({ img1, img2, img3, className, className2 }) {
  return (
    <>
      <div className={`icon_divs green ${className}`}>
        <img src={img1} alt="" />
      </div>
      <div className={`icon_divs red ${className2}`}>
        <img src={img2} alt="" />
      </div>
      <div className="icon_divs yellow">
        <img src={img3} alt="" />
      </div>
    </>
  );
}
export default Icon_divs;
