import { useState } from "react";

function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [click, setClick] = useState(false);
  const [name, setName] = useState("");

  function handleText1(text: string) {
    setText1(text);
  }

   function handleText2(text: string) {
    setText2(text);
  }

  function handleClick() {
    setName(text1+" VS "+text2);
  }

  return (
    <div>
      <input
        type="text"
        value={text1}
        onChange={(e) => {
          handleText1(e.target.value);
        }}
      />

      <input
        type="text"
        value={text2}
        onChange={(e) => {
          handleText2(e.target.value);
        }}
      />

      <button
        onClick={() => {
          handleClick();
        }}
      >
        GO
      </button>
      <h1>{name}</h1>
    </div>
  );
}

export default App;
