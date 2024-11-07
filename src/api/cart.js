import axios from "axios";

const API_URL = "https://localhost:7231/api/Cart";

export const fetchCurrentUserCart = async (token) => {
  const response = await axios.get(`${API_URL}/get-current-user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const addItemToCart = async (productId, quantity, token) => {
  const response = await axios.post(
    `${API_URL}/add-items`,
    { productId, quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const updateItemQuantity = async (cartItemId, quantity, token) => {
  const response = await axios.put(
    `${API_URL}/update-items-quantity/${cartItemId}`,
    { quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const removeItemFromCart = async (cartItemId, token) => {
  const response = await axios.delete(`${API_URL}/remove-items/${cartItemId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const clearAllItems = async (token) => {
  const response = await axios.delete(`${API_URL}/clear-all-items`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
