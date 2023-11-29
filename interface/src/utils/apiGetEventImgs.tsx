import axios from "axios";

const apiGetEventImgs = async (year: Number) => {
  try {
    const response = await axios.get(`/image`, {
      params: {
        year: year,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default apiGetEventImgs;
