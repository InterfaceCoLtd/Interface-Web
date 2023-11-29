import axios from "axios";
import { addListener } from "process";

const apiGetPlans = async (month: number) => {
  try {
    const response = await axios.get(`/api/schedules/month/${month}`, {
      headers: {
        Authorization: sessionStorage.getItem("userToken"),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiGetPlans;
