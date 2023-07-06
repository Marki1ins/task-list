import axios from "axios";
import { useState } from "react";

export function TaskTitleInput(props) {
  const { value, taskId, onUpdate } = props;

  const [newTitle, setNewTitle] = useState(value);
  const [edit, setEdit] = useState(false);

  const handleSubmit = async (event) => {
    try {
      if (newTitle.trim() !== "" && newTitle !== value) {
        await axios.put(`http://localhost:3003/task/${taskId}/title`, {
          title: newTitle,
        });
        onUpdate;
        setNewTitle("");
        setEdit(false);
      }
      event.preventDefault();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = ({ target }) => {
    setNewTitle(target.value);
  };

  const handleEditClick = () => {
    if (edit === false) {
      setEdit(true);
    } else {
      setEdit(false);
      setNewTitle(value);
    }
  };

  const handleTitleClick = () => {
    setEdit(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full">
      <input
        type="text"
        value={newTitle}
        onChange={handleChange}
        onClick={handleTitleClick}
        className={
          !edit
            ? "flex-1 bg-transparent text-lg outline-none cursor-pointer"
            : "flex-1 bg-transparent text-lg outline-none text-pink"
        }
        readOnly={!edit}
        required
      />

      <div>
        {!edit ? (
          <button
            type="button"
            onClick={handleEditClick}
            className="bg-gradient-to-tr from-pink to-purple bg-clip-text text-transparentWebkit text-base text-pink font-bold uppercase duration-500 hover:text-pink/80 active:text-pink/60"
          >
            Edit
          </button>
        ) : (
          <div className="flex items-center justify-center gap-2 duration-700">
            <button
              type="button"
              onClick={handleEditClick}
              className="text-grey text-base font-bold uppercase duration-500 cursor-pointer hover:text-grey/80"
            >
              No
            </button>
            <button
              type="submit"
              className="bg-gradient-to-tr from-pink to-purple bg-clip-text text-transparentWebkit text-base text-pink font-bold uppercase duration-500 hover:text-pink/80 active:text-pink/60"
            >
              Yes
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
