import axios from "axios";
import { useState } from "react";

export function DeleteButton(props) {
  const { taskId, onUpdate } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/task/${taskId}`);
      onUpdate();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen ? (
        <button
          type="button"
          onClick={handleClick}
          className="text-crimson uppercase duration-700 cursor-pointer hover:text-crimson/80 active:text-crimson/60"
        >
          Delete
        </button>
      ) : (
        <div className="flex items-center justify-center gap-2 duration-700">
          <span
            onClick={handleClick}
            className="text-pink uppercase duration-500 cursor-pointer hover:text-pink/80"
          >
            No
          </span>
          <span
            onClick={handleDelete}
            className="text-crimson uppercase duration-500 cursor-pointer hover:text-crimson/80"
          >
            Yes
          </span>
        </div>
      )}
    </div>
  );
}
