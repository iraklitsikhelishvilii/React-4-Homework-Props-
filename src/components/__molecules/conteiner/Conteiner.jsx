import React from "react";
import "../conteiner/Conteiner.css";
import Info from "../../__atoms/info/Information.jsx";
import Icon_divs from "../../__atoms/icon_divs/Icon_divs";
import Button from "../../__atoms/button/Button";

function Conteiner({
  img,
  text,
  ptext,
  caltext,
  exptext,
  degtext,
  saletext,
  pricetext,
  img1,
  img2,
  img3,
  className,
  className2,
}) {
  return (
    <>
      <div className="conteiner">
        <Info />
        <img src={img} alt="" />
        <div className="heading_div">
          <h1 className="Conteiner_h">{text}</h1>
          <div className="Icons_div">
            <Icon_divs
              className2={className2}
              className={className}
              img1={img1}
              img2={img2}
              img3={img3}
            />
          </div>
        </div>
        <p className="about_p">{ptext}</p>
        <div className="description_div">
          <p className="description_p">{caltext} </p>
          <p className="description_p">{exptext}</p>
          <p className="description_p">{degtext}</p>
        </div>
        <div className="bottom_div">
          <div className="price_div">
            <p className="sales_p">{saletext}</p>
            <p className="price_text">{pricetext}</p>
          </div>

          <Button />
        </div>
      </div>
    </>
  );
}
export default Conteiner;
