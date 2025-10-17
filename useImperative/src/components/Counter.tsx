import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  type Ref,
} from "react";

export type CounterRef = {
  reset: () => void;
};

interface CounterProps {}

function Counter({}: CounterProps, ref: Ref<CounterRef>) {
  const [count, setCount] = useState<number>(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  useImperativeHandle(ref, () => ({
    reset,
  }));

  return (
    <div className="flex flex-col gap-2 w-[200px]">
      <div className="bg-blue-200 border border-blue-600 rounded-3xl h-[100px] flex justify-center items-center text-blue-600 font-bold text-3xl">
        {count}
      </div>
      <div className="flex gap-1 w-full justify-center items-center">
        <button
          className="border border-black rounded-3xl w-10 cursor-pointer bg-green-200 hover:bg-green-400"
          onClick={increment}
        >
          +
        </button>
        <button
          className="border border-black rounded-3xl w-10 cursor-pointer bg-green-200 hover:bg-green-400"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default forwardRef(Counter);
