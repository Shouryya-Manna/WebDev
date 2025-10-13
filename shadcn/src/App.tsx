import LayoutLeft from "./components/LayoutLeft";
import LayoutRight from "./components/LayoutRight";

function App() {
  return (
    <>
      <LayoutLeft>
        <div className="w-full h-dvh flex ">
        <div>Left</div>
        <LayoutRight>
          <div>Right</div>
        </LayoutRight>
        </div>
      </LayoutLeft>
    </>
  );
}

export default App;
