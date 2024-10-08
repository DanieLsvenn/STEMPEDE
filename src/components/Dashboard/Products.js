import React, { useState } from "react";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import p1_img from "../../assets/products/product_1.png";
import p2_img from "../../assets/products/product_2.png";
import p3_img from "../../assets/products/product_3.png";
import p39_img from "../../assets/products/product_39.png";
import p40_img from "../../assets/products/product_40.png";
const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Stem",
      brand: "Poraxy",
      age: "8-12",
      image: p1_img,
      price: 50.0,
      description: 'Item 1'
    },
    {
      id: 2,
      name: "Stem",
      brand: "Poraxy",
      age: "8-12",
      image: p2_img,
      price: 50.0,
      description: 'Item 2'
    },
    {
      id: 3,
      name: "Stem",
      brand: "Poraxy",
      age: "8-12",
      image: p3_img,
      price: 50.0,
      description: 'Item 3'
    },
    {
      id: 39,
      name: "Stem",
      brand: "StemToy",
      age: "3-7",
      image: p39_img,
      price: 50.0,
      description: 'Item 39'
    },
    {
      id: 40,
      name: "Action Figure",
      brand: "ToyBrand",
      age: "8-12",
      image: p40_img,
      price: 30.0,
      description: 'Item 40'
    },
    // Add more products here
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null); // For both add/edit
  const [isModalOpen, setIsModalOpen] = useState(false); // Single modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Modal for delete confirmation
  const [productToDelete, setProductToDelete] = useState(null);

  // Open the modal for editing or adding
  const openModal = (product = null) => {
    setSelectedProduct(
      product
        ? { ...product } // If editing, populate with product data
        : {
            id: products.length + 1,
            name: "",
            brand: "",
            age: "",
            image: "",
            price: "",
            description: "",
          } // If adding, start with empty fields
    );
    setIsModalOpen(true); // Open the modal
  };

  // Save the edited or new product
  const handleSaveProduct = () => {
    // Check for validation errors
    if (
      !selectedProduct.name ||
      !selectedProduct.price ||
      isNaN(selectedProduct.price)
    ) {
      toast.error("Error!");
      return;
    }

    if (selectedProduct.id <= products.length) {
      // Update existing product
      setProducts(
        products.map((product) =>
          product.id === selectedProduct.id ? selectedProduct : product
        )
      );
      toast.success("Product edited successfully!"); // Trigger alert for update
    } else {
      // Add new product
      setProducts([...products, selectedProduct]);
      toast.success("Product added successfully!"); // Trigger alert for adding
    }
    setIsModalOpen(false); // Close modal after saving
  };

  // Handle delete button click
  const openDeleteModal = (product) => {
    setProductToDelete(product); // Set the product to be deleted
    setIsDeleteModalOpen(true); // Open delete confirmation modal
  };

  // Confirm delete action
  const handleConfirmDelete = () => {
    try {
      setProducts(
        products.filter((product) => product.id !== productToDelete.id)
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
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                )}
              </td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.brand}</td>
              <td className="border px-4 py-2">{product.age}</td>
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

      {/* Modal for adding/editing */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded shadow-lg w-[500px]">
            <h2 className="text-xl mb-4">
              {selectedProduct.id <= products.length
                ? "Edit Product"
                : "Add New Product"}
            </h2>

            <div className="grid gap-4">
              <div>
                <label>Product Name:</label>
                <input
                  className="border p-2 w-full"
                  name="name"
                  value={selectedProduct.name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Brand:</label>
                <input
                  className="border p-2 w-full"
                  name="brand"
                  value={selectedProduct.brand}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Age Range:</label>
                <input
                  className="border p-2 w-full"
                  name="age"
                  value={selectedProduct.age}
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
                {selectedProduct.id <= products.length
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
