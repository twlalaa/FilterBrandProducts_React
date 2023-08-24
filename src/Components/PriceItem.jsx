//Hooks
import { useState } from "react";

//Icons

import { AiFillCheckCircle } from "react-icons/ai";

const PriceItem = (props) => {
  const [select, setSelect] = useState(false);

  const changeClicked = () => {
    setSelect(!select);
  };

  return (
    <div
      onClick={changeClicked}
      className="relative mb-5 border cursor-pointer text-black border-black rounded-2xl p-3 flex justify-center items-center"
      style={{ opacity: `${select ? "1" : "0.2"}` }}
    >
      {props.children}
      {select && (
        <AiFillCheckCircle className="h-4 w-4 absolute -top-1 -right-1 bg-black rounded-full fill-green-500" />
      )}
    </div>
  );
};

export default PriceItem;
