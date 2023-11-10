import axios from "axios";

const apiGetVotes = async () => {
  try {
    const response = await axios.get(`/api/votes`, {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default apiGetVotes;
