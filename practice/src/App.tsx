import DataTable from "./components/DataTable";
import { useCountStore } from "./stores/Paymentstore";

function App() {
  const count = useCountStore((state) => state.count);
  const { increment, decrement } = useCountStore();
  return (
    <>
      <DataTable />
      <div className="flex flex-col justify-center items-center">
        {count}
        <button  className=" border border" onClick={increment}>+</button>
        <button className=" border border" onClick={decrement}>-</button>
      </div>
    </>
  );
}

export default App;
