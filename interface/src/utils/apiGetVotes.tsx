import axios from "axios";

const apiGetVotes = async () => {
  try {
    const response = await axios.get(`/api/votes`, {
      headers: {
        Authorization: sessionStorage.getItem("userToken"),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiGetVotes;
