import { useState } from "react";

const Player = ({
  initialPlayerName,
  symbol,
  isActive,
  handlePlayerChangeName,
}) => {
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = () => {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      handlePlayerChangeName(symbol, playerName);
    }
  };

  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  const editablePlayerName = !isEditing ? (
    <h2 className="mr-8 uppercase font-bold ">{playerName}</h2>
  ) : (
    <input
      type="text"
      value={playerName}
      className="text-black pl-2 w-20 mr-8 bg-yellow-100 uppercase rounded-lg"
      onChange={handlePlayerName}
    />
  );

  const btnChange = !isEditing ? <span>edit</span> : <span>save</span>;

  return (
    <li
      className={`flex justify-between p-2 rounded-lg w-[195px] ${
        isActive ? "border-2 border-yellow-200" : "border-2 border-black"
      }`}
    >
      {editablePlayerName}
      <div className="flex font-bold">
        <span className="mr-2">{symbol}</span>
        <button
          onClick={handleEditing}
          className="capitalize hover:underline
        "
        >
          {btnChange}
        </button>
      </div>
    </li>
  );
};

export default Player;
