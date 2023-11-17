import axios from "axios";

const apiPostBoards = async (
  title: string,
  content: string,
  userId: number,
  subjectId?: number,
  scheduleId?: number
) => {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("userId", userId.toString());

    if (subjectId) formData.append("subjectId", subjectId.toString());
    if (scheduleId) formData.append("scheduleId", scheduleId.toString());

    const response = await axios.post(`/api/boards`, formData, {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default apiPostBoards;
