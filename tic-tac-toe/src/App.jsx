import { useState } from "react";
import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./Components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "player 1",
  O: "player 2",
};

const derivedCurrentPlayer = (prevTurns) => {
  let currentPlayer = "X";

  if (prevTurns.length > 0 && prevTurns[0].player == "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

const derivedBoard = (turns) => {
  const gameBoard = [...initialGameBoard.map((board) => [...board])];

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
};

const deriveWinner = (gameBoard, players) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      winner = players[firstSquare];
    }
  }
  return winner;
};

function App() {
  const [turns, setTurns] = useState([]);

  const [players, setPlayers] = useState(PLAYERS);

  const gameBoard = derivedBoard(turns);

  const activePlayer = derivedCurrentPlayer(turns);

  const winner = deriveWinner(gameBoard, players);

  const draw = turns.length == 9 && !winner;

  const handleBoardClick = (row, col) => {
    setTurns((prevTurns) => {
      const player = derivedCurrentPlayer(prevTurns);

      const updatedTurns = [
        { square: { row: row, col: col }, player: player },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setTurns([]);
  };

  const handlePlayerChangeName = (symbol, name) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: name,
      };
    });
  };

  return (
    <div className="min-h-screen bg-yellow-200">
      <h1 className="text-center py-6 font-bold text-3xl">TIC-TAC-TOE</h1>
      <main className="bg-black text-white p-5 rounded-lg max-w-[500px] mx-auto relative">
        {(draw || winner) && (
          <GameOver winner={winner} draw={draw} handleRematch={handleRematch} />
        )}
        <ul className="flex justify-between mb-9">
          <Player
            initialPlayerName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            handlePlayerChangeName={handlePlayerChangeName}
          />
          <Player
            initialPlayerName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            handlePlayerChangeName={handlePlayerChangeName}
          />
        </ul>
        <GameBoard gameBoard={gameBoard} handleBoardClick={handleBoardClick} />
      </main>
      <Log turns={turns} />
    </div>
  );
}

export default App;
