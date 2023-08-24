const Progress = (props) => {
  return (
    <div
      id="progress"
      className="absolute left-0 bottom-0 h-1  bg-blue-500 transition-all duration-200"
      style={{ width: `${(props.page + 1) * 100 * (1 / 3)}%` }}
    ></div>
  );
};

export default Progress;
