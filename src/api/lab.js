import axios from "./axios";

const API_URL = "https://localhost:7231/api/Labs";

// Fetch danh sách sản phẩm
async function fetchLabs(pageNumber = 1, pageSize = 100) {
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

async function fetchLabById(labID) {
  try {
    const response = await axios.get(`${API_URL}/${labID}`);
    return response.data;
  } catch (error) {
    console.error(`Fetch product ${labID} failed:`, error);
  }
}

const addLab = async (labData) => {
  try {
    const response = await axios.post(`${API_URL}/create`, labData, {
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

async function updateLab(labId, labData) {
  try {
    const response = await axios.put(`${API_URL}/update/${labId}`, labData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Update product ${labId} failed:`, error);
  }
}

// Xóa một sản phẩm
async function deleteLab(labId) {
  try {
    await axios.delete(`${API_URL}/${labId}`);
    return "Product deleted successfully";
  } catch (error) {
    console.error(`Delete product ${labId} failed:`, error);
  }
}

export { fetchLabs, fetchLabById, addLab, updateLab, deleteLab };
