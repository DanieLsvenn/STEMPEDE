import axios from 'axios';

const BASE_URL = 'https://localhost:7231/api/Admin';

const UsersApi = {
  // Get all users
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-user`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all users:', error);
      throw error; // Re-throw to handle in the calling component
    }
  },

  // Get users with pagination
  getAllUsersPagination: async (pageIndex, pageSize) => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all-users-pagination`, {
        params: { pageIndex, pageSize }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching paginated users:', error);
      throw error; // Re-throw to handle in the calling component
    }
  },

  // Ban a user
  banUser: async (userId) => {
    try {
      const response = await axios.post(`${BASE_URL}/${userId}/ban`);
      return response.data;
    } catch (error) {
      console.error('Error banning user:', error);
      throw error; // Re-throw to handle in the calling component
    }
  },

  // Unban a user
  unbanUser: async (userId) => {
    try {
      const response = await axios.post(`${BASE_URL}/${userId}/unban`);
      return response.data;
    } catch (error) {
      console.error('Error unbanning user:', error);
      throw error; // Re-throw to handle in the calling component
    }
  },
};

export default UsersApi;
