import axios from "axios";

const apiUserAuthSingIn = async (email: string, password: string) => {
  try {
    const response = await axios.post(`/api/users/auth/sign-in`, {
      email: email,
      password: password,
    });
    const token = response.headers.authorization;
    sessionStorage.setItem("userToken", token);
  } catch (error) {
    throw error;
  }
};

export default apiUserAuthSingIn;
