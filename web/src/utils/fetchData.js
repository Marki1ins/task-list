import axios from "axios";

export const fetchData = async (state) => {
  try {
    const response = await axios.get("http://localhost:3003/task");
    state(response.data);
  } catch (error) {
    console.error(error.message);
  }
};
