import axios from "axios";

const apiGetPlans = async (month: number) => {
  try {
    const response = await axios.get(`/api/schedules/month/${month}`, {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default apiGetPlans;
