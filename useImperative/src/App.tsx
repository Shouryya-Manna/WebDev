import { useRef } from "react";
import Counter, { type CounterRef } from "./components/Counter";

function App() {
  const counterRef = useRef<CounterRef>(null);
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-2">
      <Counter ref={counterRef} />
      <button
        className="border border-black rounded-3xl w-20 cursor-pointer bg-red-200 text-red-500 hover:bg-red-400"
        onClick={() => {
          counterRef.current?.reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
