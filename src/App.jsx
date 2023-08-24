//Hooks

import { useState } from "react";

//Components

import Header from "./Components/Header";

import BrandItem from "./Components/BrandItem";

import Button from "./Components/Button";

import Progress from "./Components/Progress";

import PriceItem from "./Components/PriceItem";

import SizeItem from "./Components/SizeItem";

//Images

import bershka from "./images/bershka.png";
import chanel from "./images/chanel.png";
import zara from "./images/zara.jpg";
import stradi from "./images/stradi.jpg";
import lv from "./images/lv.jpg";
import adidas from "./images/adidas.jpg";
import bata from "./images/bataa.png";
import puma from "./images/puma.jpg";
import polo from "./images/polo.jpg";

//Classes

const classes = {
  classX: "bg-blue-700 h-screen flex items-center justify-center",
  classY: "w-[300px] h-[500px] bg-white font-poppins relative",
  classZ: "p-5 text-gray-500",
  classE: "text-sm text-center mb-5",
  classA: "flex flex-wrap justify-between",
};

const App = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < 2) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  let btnContent = "Next";

  if (page === 2) {
    btnContent = "Ready!";
  }

  let title = "Select your favorite brands";

  if (page === 1) {
    title = "Select a price range";
  }

  if (page === 2) {
    title = "Select a size";
  }

  return (
    <div className={classes.classX}>
      <div className={classes.classY}>
        <Header click={prevPage} page={page} />
        <div className={classes.classZ}>
          <h1 className={classes.classE}>{title}</h1>
          {page === 0 && (
            <div id="containerOne" className={classes.classA}>
              <BrandItem src={bershka} />
              <BrandItem src={chanel} />
              <BrandItem src={zara} />
              <BrandItem src={adidas} />
              <BrandItem src={lv} />
              <BrandItem src={stradi} />
              <BrandItem src={bata} />
              <BrandItem src={polo} />
              <BrandItem src={puma} />
            </div>
          )}
          {page === 1 && (
            <div id="ContainerTwo">
              <PriceItem>$800 - $1500</PriceItem>
              <PriceItem>$200 - $800</PriceItem>
              <PriceItem>$50 - $200</PriceItem>
              <PriceItem>0 - $50</PriceItem>
            </div>
          )}
          {page === 2 && (
            <div id="ContainerThree" className="flex justify-center">
              <div className="grid grid-cols-3 gap-[1px] border  border-gray-300 grid-rows-2 bg-gray-300 rounded-lg">
                <SizeItem size="XS" />
                <SizeItem size="S" />
                <SizeItem size="M" />
                <SizeItem size="L" />
                <SizeItem size="XL" />
                <SizeItem size="XXL" />
              </div>
            </div>
          )}

          <Button page={page} content={btnContent} click={nextPage} />
          <Progress page={page} />
        </div>
      </div>
    </div>
  );
};

export default App;
