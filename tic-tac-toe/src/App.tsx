import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [winningLine, setWinningLine] = useState<number[]>([]);
  const [won, setWon] = useState<boolean>(false);
  const [draw, setDraw] = useState<boolean>(false);

  // const [temp, setTemp] = useState<number>(0);
  // function temporary(){
  //   setTemp(temp+1);
  //   setTemp(temp+2);
  // }

  useEffect(() => {
    checkGameStatus();
  }, [board]);

  function checkGameStatus(): void {
    const win: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    if (board.every((cell) => cell !== null) && !won) {
      setDraw(true);
    }
    let i = 0;
    for (i = 0; i < win.length; i++) {
      if (
        (board[win[i][0]] === "X" &&
          board[win[i][1]] === "X" &&
          board[win[i][2]] === "X") ||
        (board[win[i][0]] === "O" &&
          board[win[i][1]] === "O" &&
          board[win[i][2]] === "O")
      ) {
        setWinningLine(win[i]);
        setWon(true);
        setDraw(false);
      }
    }
  }

  function handleShow(index: number): void {
    if (board[index] || won === true || draw === true) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[index] = turn;
    setBoard(updatedBoard);

    setTurn(turn === "X" ? "O" : "X");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl mt-[100px]">Tic Tac Toe</h1>
      <div className="items-center mt-[100px] grid gap-3 grid-cols-3 grid-rows-3 ">
        {board.map((value, index) => (
          <div
            className={`flex w-[100px] h-[100px] border-2 border-stone-700 rounded-[20px] text-5xl justify-center items-center cursor-pointer transition ease-in duration-500
              ${winningLine.includes(index) ? "bg-green-300" : ""} `}
            key={index}
            onClick={() => handleShow(index)}
          >
            {value}
          </div>
        ))}
      </div>
      {won && (
        <div className="mt-10 text-2xl text-green-500">
          turn {turn === "X" ? "O" : "X"} Wins!
        </div>
      )}
      {draw && <div className="mt-10 text-2xl text-red-500">It's a Draw!</div>}
      {/* <button
      onClick={temporary}>Temp{temp}</button> */}
    </div>
  );
};

export default App;

///context API
