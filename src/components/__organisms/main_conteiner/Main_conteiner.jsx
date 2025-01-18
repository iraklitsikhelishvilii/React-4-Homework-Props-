import React from "react";
import "../main_conteiner/Main_conteiner.css";
import foto1 from "../../../assets/images/PizzaPhoto.svg";
import foto2 from "../../../assets/images/TortelliniPhoto.svg";
import foto3 from "../../../assets/images/StrawberrycakePhoto.svg";
import Conteiner from "../../__molecules/conteiner/Conteiner";
import Leaf_img from "../../../assets/images/leaf.svg";
import Fire_img from "../../../assets/images/fire.svg";
import Wheat_img from "../../../assets/images/wheat.svg";
function Main_conteiner({}) {
  const element = (
    <p>
      Premium pepperoni and cheese is made <br />
      with real mozzarella on original <br /> hand-tossed crust.
    </p>
  );
  const element2 = (
    <p>
      Pasta stuffed with beef and pork topped <br /> with your choice of cream
      sauce with <br /> bacon, bolognese or marinara sauce.
    </p>
  );
  const element3 = (
    <p>
      Three layer strawberry dessert is not only <br /> beautiful looking, but
      also delicious! <br /> Perfect dessert for spring and summer.
    </p>
  );
  return (
    <>
      <div className="main_conteiner">
        <Conteiner
          img={foto1}
          text="Pepperoni Pizza"
          ptext={element}
          caltext="265 Cal"
          exptext="P/F/C: 12/10/31"
          degtext="53.8 °C"
          saletext="$23.90"
          pricetext="$29.90"
          img2={Fire_img}
          img3={Wheat_img}
          className="dissepare"
        />
        <Conteiner
          img={foto2}
          text="Tortellini"
          ptext={element2}
          caltext="270 Cal"
          exptext="P/F/C: 18/4/41"
          degtext="42.4 °C"
          saletext="$17.90"
          pricetext="$22.90"
          img1={Leaf_img}
          img2={Fire_img}
          img3={Wheat_img}
        />
        <Conteiner
          img={foto3}
          text="Strawberry Cake"
          ptext={element3}
          caltext="346 Cal"
          exptext="P/F/C: 6/14/49"
          degtext="13.9 °C"
          saletext="$13.90"
          pricetext="$18.90"
          img3={Wheat_img}
          className="dissepare"
          className2="dissepare"
        />
      </div>
    </>
  );
}
export default Main_conteiner;
