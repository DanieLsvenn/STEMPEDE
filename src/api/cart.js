import axios from 'axios';

const API_URL = 'https://localhost:7231/api/Cart';

export const fetchCurrentUserCart = async () => {
    const response = await axios.get(`${API_URL}/get-current-user`);
    return response.data;
};

export const addItemToCart = async (productId, quantity) => {
    const response = await axios.post(`${API_URL}/add-items`, { productId, quantity });
    return response.data;
};

export const updateItemQuantity = async (cartItemId, quantity) => {
    const response = await axios.put(`${API_URL}/update-items-quantity/${cartItemId}`, { quantity });
    return response.data;
};

export const removeItemFromCart = async (cartItemId) => {
    const response = await axios.delete(`${API_URL}/remove-items/${cartItemId}`);
    return response.data;
};

export const clearAllItems = async () => {
    const response = await axios.delete(`${API_URL}/clear-all-items`);
    return response.data;
};