import axios from "axios";

const apiGetVotes = () => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/votes`, {
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
    .then((response) => {
      console.log("response:", response);
      return response.data;
    })
    .catch((error) => {
      console.error("에러:", error);
    });
};

export default apiGetVotes;
