const GameBoard = ({ gameBoard, handleBoardClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2 items-center mx-14 mb-4">
      {gameBoard.map((row, rowIndex) => {
        return row.map((symbol, colIndex) => {
          return (
            <button
              className="btn"
              onClick={() => handleBoardClick(rowIndex, colIndex)}
              disabled={symbol != null}
            >
              <span>{symbol}</span>
            </button>
          );
        });
      })}
    </div>
  );
};

export default GameBoard;
