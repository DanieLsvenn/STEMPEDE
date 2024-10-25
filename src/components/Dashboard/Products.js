import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../../api/product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // For both add/edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Modal for delete confirmation
  const [productToDelete, setProductToDelete] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [productsPerPage] = useState(8); // Number of products per page
  // Fetch products from API when component mounts
  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      if (fetchedProducts && fetchedProducts.success) {
        setProducts(fetchedProducts.data.items);
      } else {
        toast.error("Failed to fetch products");
      }
    };
    getProducts();
  }, []);
  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Open the modal for editing or adding
  const openModal = (product = null) => {
    setSelectedProduct(
      product
        ? { ...product } // If editing, populate with product data
        : {
            productID: products.length + 1,
            productName: "",
            brand: "",
            ages: "",
            image: "",
            price: "",
            description: "",
          } // If adding, start with empty fields
    );
    setIsModalOpen(true); // Open the modal
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedProduct({ ...selectedProduct, image: imageFile });

    const imageUrl = URL.createObjectURL(imageFile);
    setImagePreviewUrl(imageUrl);
  };
  // Save the edited or new product
  const handleSaveProduct = async () => {
    // Check for validation errors
    if (
      !selectedProduct.productName ||
      !selectedProduct.price ||
      isNaN(selectedProduct.price)
    ) {
      toast.error("Error!");
      return;
    }
    const formData = new FormData();

    try {
      formData.append("productName", selectedProduct.productName);
      formData.append("price", selectedProduct.price);

      // If an image is selected, append it to the formData
      if (selectedProduct.image) {
        formData.append("image", selectedProduct.image);
      }
      if (selectedProduct.productID <= products.length) {
        // Update existing product
        const updatedProduct = await updateProduct(
          selectedProduct.productID,
          formData
        );
        setProducts(
          products.map((product) =>
            product.productID === selectedProduct.productID
              ? updatedProduct
              : product
          )
        );
        toast.success("Product edited successfully!"); // Trigger alert for update
      } else {
        // Add new product
        const newProduct = await addProduct(formData);
        setProducts([...products, newProduct]);
        toast.success("Product added successfully!"); // Trigger alert for adding
      }
      setIsModalOpen(false); // Close modal after saving
    } catch (error) {
      toast.error("Failed to save product."); // Trigger error alert
    }
  };

  // Handle delete button click
  const openDeleteModal = (product) => {
    setProductToDelete(product); // Set the product to be deleted
    setIsDeleteModalOpen(true); // Open delete confirmation modal
  };

  // Confirm delete action
  const handleConfirmDelete = async () => {
    try {
      await deleteProduct(productToDelete.productID);
      setProducts(
        products.filter(
          (product) => product.productID !== productToDelete.productID
        )
      );
      toast.success("Product deleted successfully!"); // Trigger alert for delete
      setIsDeleteModalOpen(false); // Close the delete confirmation modal
    } catch (error) {
      toast.error("Failed to delete product."); // Trigger error alert
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => openModal()}
      >
        Add
      </button>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Brand</th>
            <th className="border px-4 py-2">Age Range</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.productID}>
              <td className="border px-4 py-2">{product.productID}</td>
              <td className="border px-4 py-2">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-16 h-16 object-cover"
                  />
                )}
              </td>
              <td className="border px-4 py-2">{product.productName}</td>
              <td className="border px-4 py-2">{product.subcategoryName}</td>
              <td className="border px-4 py-2">{product.ages}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={() => openModal(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={() => openDeleteModal(product)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-8">
        {Array.from(
          { length: Math.ceil(products.length / productsPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500 border border-blue-500"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      {/* Modal for adding/editing */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded shadow-lg w-[500px]">
            <h2 className="text-xl mb-4">
              {selectedProduct.productID <= products.length
                ? "Edit Product"
                : "Add New Product"}
            </h2>

            <div className="grid gap-4">
              <div>
                <input
                  className="border p-2 w-full"
                  name="image"
                  type="file"
                  onChange={handleImageChange}
                />
                {imagePreviewUrl && (
                  <img
                    src={imagePreviewUrl}
                    alt="Selected"
                    className="w-16 h-16 object-cover mt-2"
                  />
                )}
              </div>
              <div>
                <label>Product Name:</label>
                <input
                  className="border p-2 w-full"
                  name="name"
                  value={selectedProduct.productName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Brand:</label>
                <input
                  className="border p-2 w-full"
                  name="brand"
                  value={selectedProduct.subcategoryName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Age Range:</label>
                <input
                  className="border p-2 w-full"
                  name="age"
                  value={selectedProduct.ages}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Price:</label>
                <input
                  className="border p-2 w-full"
                  name="price"
                  type="number"
                  value={selectedProduct.price}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Description:</label>
                <input
                  className="border p-2 w-full"
                  name="description"
                  type="text"
                  value={selectedProduct.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleSaveProduct}
              >
                {selectedProduct.productID <= products.length
                  ? "Save Changes"
                  : "Add Product"}
              </button>
            </div>
          </div>
        </Modal>
      )}

      {isDeleteModalOpen && (
        <Modal
          isOpen={isDeleteModalOpen}
          onRequestClose={() => setIsDeleteModalOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded shadow-lg w-[400px]">
            <h2 className="text-xl mb-4">Delete Confirmation</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleConfirmDelete}
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      )}
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Products;
