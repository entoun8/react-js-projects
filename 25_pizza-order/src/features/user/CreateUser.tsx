import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { updateUsername } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username) {
      dispatch(updateUsername(username));
      navigate("/menu");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-lg font-medium text-stone-700 mb-4">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border-2 border-stone-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-200 text-stone-800 placeholder-stone-400"
      />

      {username !== "" && (
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start ordering, {username}! 🚀
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
