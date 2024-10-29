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
import { fetchLabs } from "../../api/lab";
import { fetchSubcategories } from "../../api/subcatgory";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [labs, setLabs] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // For both add/edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // Modal for delete confirmation
  const [productToDelete, setProductToDelete] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [productsPerPage] = useState(8); // Number of products per page

  // Fetch products, labs, and subcategories from API when component mounts
  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      if (fetchedProducts && fetchedProducts.success) {
        setProducts(fetchedProducts.data.items);
      } else {
        toast.error("Failed to fetch products");
      }
    };

    const getLabs = async () => {
      const fetchedLabs = await fetchLabs();
      if (fetchedLabs && fetchedLabs.success) {
        setLabs(fetchedLabs.data.items);
      } else {
        toast.error("Failed to fetch labs");
      }
    };

    const getSubcategories = async () => {
      const fetchedSubcategories = await fetchSubcategories();
      if (fetchedSubcategories && fetchedSubcategories.success) {
        setSubcategories(fetchedSubcategories.data);
      } else {
        toast.error("Failed to fetch subcategories");
      }
    };

    getProducts();
    getLabs();
    getSubcategories();
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
            description: "",
            price: "",
            stockQuantity: "",
            ages: "",
            supportInstances: "",
            labID: "",
            subcategoryID: "",
          } // If adding, start with empty fields
    );
    setIsModalOpen(true); // Open the modal
  };

  // const handleImageChange = (event) => {
  //   const imageFile = event.target.files[0];
  //   setSelectedProduct({ ...selectedProduct, image: imageFile });

  //   const imageUrl = URL.createObjectURL(imageFile);
  //   setImagePreviewUrl(imageUrl);
  // };

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
    const productData = {
      productName: selectedProduct.productName,
      description: selectedProduct.description,
      price: selectedProduct.price,
      stockQuantity: selectedProduct.stockQuantity,
      ages: selectedProduct.ages,
      supportInstances: selectedProduct.supportInstances,
      labID: selectedProduct.labID,
      subcategoryID: selectedProduct.subcategoryID,
    };

    try {
      // If an image is selected, append it to the formData
      // if (selectedProduct.image) {
      //   formData.append("image", selectedProduct.image);
      // }
      if (selectedProduct.productID <= products.length) {
        // Update existing product
        const updatedProduct = await updateProduct(
          selectedProduct.productID,
          productData
        );
        setProducts(
          products.map((product) =>
            product.productID === selectedProduct.productID
              ? updatedProduct.data
              : product
          )
        );
        toast.success("Product edited successfully!"); // Trigger alert for update
      } else {
        // Add new product
        const newProduct = await addProduct(productData);
        setProducts([...products, newProduct.data]);
        toast.success("Product added successfully!"); // Trigger alert for adding
      }
      setIsModalOpen(false); // Close modal after saving
    } catch (error) {
      toast.error(`Failed to save product: ${error.message}`); // Trigger error alert
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
      toast.error(`Failed to delete product: ${error.message}`); // Trigger error alert
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
            <tr key={product && product.productID}>
              <td className="border px-4 py-2">
                {product && product.productID}
              </td>
              <td className="border px-4 py-2">
                {/* {product.image && (
                  <img
                    src={product.image}
                    alt={product.productName}
                    className="w-16 h-16 object-cover"
                  />
                )} */}
              </td>
              <td className="border px-4 py-2">
                {product && product.productName}
              </td>
              <td className="border px-4 py-2">
                {product && product.subcategoryName}
              </td>
              <td className="border px-4 py-2">{product && product.ages}</td>
              <td className="border px-4 py-2">${product && product.price}</td>
              <td className="border px-4 py-2">
                {product && product.description}
              </td>
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
              {/* <div>
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
              </div> */}
              <div>
                <label>Product Name:</label>
                <input
                  className="border p-2 w-full"
                  name="productName"
                  value={selectedProduct.productName}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Description:</label>
                <textarea
                  className="border p-2 w-full"
                  name="description"
                  value={selectedProduct.description}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Price:</label>
                <input
                  className="border p-2 w-full"
                  name="price"
                  value={selectedProduct.price}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Stock Quantity:</label>
                <input
                  className="border p-2 w-full"
                  name="stockQuantity"
                  value={selectedProduct.stockQuantity}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Age Range:</label>
                <input
                  className="border p-2 w-full"
                  name="ages"
                  value={selectedProduct.ages}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Support Instances:</label>
                <input
                  className="border p-2 w-full"
                  name="supportInstances"
                  value={selectedProduct.supportInstances}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Lab:</label>
                <select
                  className="border p-2 w-full"
                  name="labID"
                  value={selectedProduct.labID}
                  onChange={handleInputChange}
                >
                  <option value="">Select Lab</option>
                  {labs.map((lab) => (
                    <option key={lab.labId} value={lab.labId}>
                      {lab.labName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Subcategory:</label>
                <select
                  className="border p-2 w-full"
                  name="subcategoryID"
                  value={selectedProduct.subcategoryID}
                  onChange={handleInputChange}
                >
                  <option value="">Select Subcategory</option>
                  {subcategories.map((subcategory) => (
                    <option
                      key={subcategory.subcategoryID}
                      value={subcategory.subcategoryID}
                    >
                      {subcategory.subcategoryName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSaveProduct}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal for delete confirmation */}
      {isDeleteModalOpen && (
        <Modal
          isOpen={isDeleteModalOpen}
          onRequestClose={() => setIsDeleteModalOpen(false)}
          className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded shadow-lg w-[500px]">
            <h2 className="text-xl mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      <ToastContainer />
    </div>
  );
};

export default Products;
