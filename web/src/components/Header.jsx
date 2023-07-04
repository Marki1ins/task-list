import axios from "axios";
import { useState } from "react";

export function Header() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async () => {
    try {
      if (inputValue.trim() !== "") {
        await axios.post("http://localhost:3003/task", { title: inputValue });
        setInputValue("");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <header className="w-full pt-4">
      <h1 className="mb-4 text-4xl text-grey font-light">Task List</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-full"
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="What do you have planned?"
          className="flex-1 py-3 px-4 bg-dark-800 rounded-2xl text-xl text-light outline-none placeholder:text-grey"
          required
        />
        <button
          type="submit"
          className="p-2 px-4 bg-gradient-to-tr from-pink to-purple bg-clip-text text-transparentWebkit text-lg text-pink font-bold duration-500 hover:text-pink/80 active:text-pink/60"
        >
          Add Task
        </button>
      </form>
    </header>
  );
}
