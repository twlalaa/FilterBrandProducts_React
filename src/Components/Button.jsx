//Icons

import { MdOutlineNavigateNext } from "react-icons/md";

//Classes
const classes = {
  classX:
    "absolute bg-blue-500 text-white h-10 w-20 flex items-center justify-center rounded-full transition-all active:scale-95 shadow-lg active:shadow-md left-1/2 -translate-x-1/2 bottom-10",
  classY: "fill-white h-5 w-5",
};

const Button = (props) => {
  return (
    <button className={classes.classX} onClick={props.click}>
      <span>{props.content}</span>
      {props.page !== 2 && <MdOutlineNavigateNext className={classes.classY} />}
    </button>
  );
};

export default Button;
