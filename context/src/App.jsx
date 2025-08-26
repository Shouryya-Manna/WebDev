import { NameContextProvider } from "./context/NameContext";
import CountDisplay from "./components/CountDisplay";
import CountUpdate from "./components/CountUpdate";
import { CountProvider } from "./context/CountContext";
import NameIO from "./components/NameIO";

function App() {
  return (
    <>
    <NameContextProvider>
      <CountProvider>
        <CountDisplay />
        <CountUpdate />
        <NameIO/>
      </CountProvider>
      </NameContextProvider>
    </>
  );
}

export default App;
