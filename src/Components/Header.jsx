//Icons

import { BiArrowBack } from "react-icons/bi";

import { AiFillCloseCircle } from "react-icons/ai";

//Classes

const classes = {
  classX: "bg-blue-500 flex items-center justify-between p-3 text-white",
  classY: "h-5 w-5",
  classZ: "text-lg uppercase",
};

const Header = (props) => {
  return (
    <div className={classes.classX}>
      <button
        onClick={props.click}
        className={`${props.page === 0 ? "invisible" : ""}`}
      >
        <BiArrowBack className={classes.classY} />
      </button>
      <h1 className={classes.classZ}>Customize</h1>
      <button>
        <AiFillCloseCircle className={classes.classY} />
      </button>
    </div>
  );
};

export default Header;
