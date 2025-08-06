import { CountProvider } from "./components/CountContext";
import CountDisplay from "./components/CountDisplay";
import CountUpdate from "./components/CountUpdate";

function App() {
  return (
    <>
      <CountProvider>
        <CountDisplay />
        <CountUpdate />
      </CountProvider>
    </>
  );
}

export default App;
