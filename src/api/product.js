import axios from "axios";

const API_URL = "https://localhost:7231/api/Product";

// Fetch danh sách sản phẩm
async function fetchProducts(pageNumber = 1, pageSize = 100) {
  try {
    const response = await axios.get(`${API_URL}/get-all-pagination`, {
      params: {
        pageNumber,
        pageSize,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Fetch products failed:", error);
  }
}

// Fetch chi tiết của một sản phẩm cụ thể
async function fetchProductById(productID) {
  try {
    const response = await axios.get(`${API_URL}/${productID}`);
    return response.data;
  } catch (error) {
    console.error(`Fetch product ${productID} failed:`, error);
  }
}

// Thêm một sản phẩm mới
const addProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, productData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Add product failed:", error);
    throw error;
  }
};

// Cập nhật thông tin của một sản phẩm
async function updateProduct(productId, productData) {
  try {
    const response = await axios.put(
      `${API_URL}/update/${productId}`,
      productData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(`Update product ${productId} failed:`, error);
  }
}

// Xóa một sản phẩm
async function deleteProduct(productId) {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error(`Delete product ${productId} failed:`, error);
  }
}

// Export các hàm
export {
  fetchProducts,
  fetchProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
