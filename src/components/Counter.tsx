import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDec = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="flex gap-3">
      <button className="px-2 py-3 border shadow-sm" onClick={handleInc}>
        +
      </button>
      <h4 className="text-lg">{counter}</h4>
      <button className="px-2 py-3 border shadow-sm" onClick={handleDec}>
        -
      </button>
    </div>
  );
};

export default Counter;
