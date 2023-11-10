import axios from "axios";

const apiGetVotes = async () => {
  try {
    const response = await axios.get(`/api/votes`, {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    });
    console.log("response:", response);
    return response.data;
  } catch (error) {
    console.error("에러:", error);
  }
};

export default apiGetVotes;
