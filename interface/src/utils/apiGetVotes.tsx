import axios from "axios";

const apiGetVotes = () => {
  axios
    .get("https://api.interfacesejong.xyz/api/votes", {
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
