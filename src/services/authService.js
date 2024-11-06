import axios from 'axios';
import API_BASE_URL from '../config/apiConfig';

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, formData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};
