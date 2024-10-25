const API_URL = "https://localhost:7231/api/Product";

// Fetch danh sách sản phẩm
async function fetchProducts() {
  try {
    const response = await fetch(`${API_URL}/get-all`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Fetch products failed:", error);
  }
}

// Fetch chi tiết của một sản phẩm cụ thể
async function fetchProductById(productID) {
  try {
    const response = await fetch(`${API_URL}/${productID}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error(`Fetch product ${productID} failed:`, error);
  }
}

// Thêm một sản phẩm mới
async function addProduct(productData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const newProduct = await response.json();
    return newProduct;
  } catch (error) {
    console.error("Add product failed:", error);
  }
}

// Cập nhật thông tin của một sản phẩm
async function updateProduct(productId, productData) {
  try {
    const response = await fetch(`${API_URL}/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const updatedProduct = await response.json();
    return updatedProduct;
  } catch (error) {
    console.error(`Update product ${productId} failed:`, error);
  }
}

// Xóa một sản phẩm
async function deleteProduct(productId) {
  try {
    const response = await fetch(`${API_URL}/${productId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return "Product deleted successfully";
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
