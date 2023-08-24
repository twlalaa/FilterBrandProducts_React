//Hooks

import { useState } from "react";

//Icons

import { AiFillCheckCircle } from "react-icons/ai";

//Classes

const classes = {
  classX:
    "flex items-center jutify-center relative h-20 w-20  cursor-pointer  border border-black rounded-3xl mb-2 p-2",
  classY: "w-18",
  classZ: "h-4 w-4 absolute -top-1 -right-1 fill-green-500",
};

const BrandItem = (props) => {
  const [select, setSelect] = useState(false);

  const changeClicked = () => {
    setSelect(!select);
  };

  return (
    <div onClick={changeClicked} className={`${classes.classX} ${select ? "" : "opacity-20"}`}>
      <img className={classes.classY} src={props.src} alt="" />
      {select && <AiFillCheckCircle className={classes.classZ} />}
    </div>
  );
};

export default BrandItem;
