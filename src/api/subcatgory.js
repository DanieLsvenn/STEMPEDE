import axios from "axios";

const API_URL = "https://localhost:7231/api/Subcategories";

// Fetch danh sách sản phẩm
async function fetchSubcategories() {
  try {
    const response = await axios.get(`${API_URL}/get-all`);
    return response.data;
  } catch (error) {
    console.error("Fetch products failed:", error);
  }
}

export { fetchSubcategories };
