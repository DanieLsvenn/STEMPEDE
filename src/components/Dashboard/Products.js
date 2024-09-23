// src/components/Products.js
import React, { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Sản phẩm 1", price: 100 },
    { id: 2, name: "Sản phẩm 2", price: 200 },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });
  const [editProduct, setEditProduct] = useState(null);

  const handleAddProduct = () => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: newProduct.name,
        price: Number(newProduct.price),
      },
    ]);
    setNewProduct({ name: "", price: "" });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
  };

  const handleSaveEdit = () => {
    setProducts(
      products.map((product) =>
        product.id === editProduct.id ? editProduct : product
      )
    );
    setEditProduct(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>

      {/* Form Thêm sản phẩm */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>

      <table className="min-w-full table-auto">
        <thead className="bg-gray-200 dark:bg-gray-800">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border px-4 py-2">{product.id}</td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editProduct && (
        <div className="mt-4">
          <input
            type="text"
            value={editProduct.name}
            onChange={(e) =>
              setEditProduct({ ...editProduct, name: e.target.value })
            }
            className="border p-2 mr-2"
          />
          <input
            type="number"
            value={editProduct.price}
            onChange={(e) =>
              setEditProduct({ ...editProduct, price: e.target.value })
            }
            className="border p-2 mr-2"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSaveEdit}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
