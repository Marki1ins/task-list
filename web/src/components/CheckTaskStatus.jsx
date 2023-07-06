import axios from "axios";
import { Check } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function CheckTaskStatus(props) {
  const { taskId } = props;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem(`isChecked_${taskId}`);
    if (storedValue !== null) {
      setIsChecked(JSON.parse(storedValue));
    }
  }, [taskId]);

  const handleClick = async () => {
    try {
      const updatedValue = !isChecked;
      setIsChecked(updatedValue);
      localStorage.setItem(`isChecked_${taskId}`, JSON.stringify(updatedValue));
      await axios.put(`http://localhost:3003/task/${taskId}/completed`, {
        completed: updatedValue,
      });
    } catch (error) {
      console.error(error.message);
      setIsChecked((prevValue) => !prevValue);
    }
  };

  return (
    <Check
      onClick={handleClick}
      weight="bold"
      className={
        !isChecked
          ? "w-4 h-4 bg-white rounded-sm text-white cursor-pointer"
          : "w-4 h-4 bg-purple rounded-sm text-white cursor-pointer"
      }
    />
  );
}
