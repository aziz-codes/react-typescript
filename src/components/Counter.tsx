import { useState } from "react";
type CounterProps = {
  name: string;
  age: number;
};
const Counter = (counters: CounterProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleInc = (): void => {
    setCounter((prev) => prev + 1);
  };
  const handleDec = (e: React.MouseEvent<HTMLButtonElement>) => {
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
      <p className="text-red-500">{counters.name}</p>
    </div>
  );
};

export default Counter;
