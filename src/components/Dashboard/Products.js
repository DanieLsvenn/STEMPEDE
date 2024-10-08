// src/components/Products.js
import React, { useState } from "react";
import product1 from '/Documents/SWP391/STEM_Kit/frontend/src/assets/products/product_1.png'
import product2 from '/Documents/SWP391/STEM_Kit/frontend/src/assets/products/product_2.png'
import { IoMdCopy } from "react-icons/io";

const Products = () => {
  const [products, setProducts] = useState([
    { image: product1, id: 1, name: "Sản phẩm 1", brand:"lego", age:"3-7", price: 100, description:"cjieoicnmklsajdlksajdkljknckwejsa", stock: "10" },
    { image: product2, id: 2, name: "Sản phẩm 2", brand:"poraxy", age:"8-12", price: 80, description:"cjieoicnmklsajdlksajdkljknckwejsa", stock: "20" },
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
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-bold mb-2">Manage Products</h2>

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

      <table className="min-w-full table-auto text-sm" style={{ tableLayout: 'fixed' }}>
  <thead className="bg-gray-200 dark:bg-gray-800">
    <tr>
      <th className="border px-2 py-1" style={{ width: '100px' }}>Preview</th>
      <th className="border px-2 py-1" style={{ width: '50px' }}>ID</th>
      <th className="border px-2 py-1" style={{ width: '150px' }}>Name</th>
      <th className="border px-2 py-1" style={{ width: '100px' }}>Brand</th>
      <th className="border px-2 py-1" style={{ width: '70px' }}>Age</th>
      <th className="border px-2 py-1" style={{ width: '70px' }}>Price</th>
      <th className="border px-2 py-1" style={{ width: '250px' }}>Description</th>
      <th className="border px-2 py-1" style={{ width: '60px' }}>Stock</th>
      <th className="border px-2 py-1" style={{ width: '150px' }}>Actions</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product) => (
      <tr key={product.id}>
        <td className="border px-2 py-1">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-16 h-16 object-cover" 
          />
        </td>
        <td className="border px-2 py-1">{product.id}</td>
        <td className="border px-2 py-1">{product.name}</td>
        <td className="border px-2 py-1">{product.brand}</td>
        <td className="border px-2 py-1">{product.age}</td>
        <td className="border px-2 py-1">{product.price}</td>
        <td className="border px-2 py-1 relative max-w-xs overflow-hidden">
          <span
            className="whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              display: 'inline-block',
              maxWidth: '150px', // Set the width you want
            }}
          >
            {product.description}
          </span>
          <span
            className="absolute left-0 top-0 bg-white z-10 invisible hover:visible"
            style={{
              whiteSpace: 'nowrap',
              overflow: 'visible',
              maxWidth: 'none',
              pointerEvents: 'none', // Prevent interaction
            }}
          >
            {product.description}
          </span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(product.description).then(() => {
                alert("Copied to clipboard!");
              }).catch(err => {
                console.error("Failed to copy: ", err);
              });
            }}
            className="hover:text-blue-500"
          >
            <IoMdCopy />
          </button>
        </td>
        <td className="border px-2 py-1">{product.stock}</td>
        <td className="border px-2 py-1">
          <button
            className="bg-red-500 text-white text-xs px-2 py-1 rounded"
            onClick={() => handleDeleteProduct(product.id)}
          >
            Delete
          </button>
          <button
            className="bg-yellow-500 text-white text-xs px-2 py-1 rounded"
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
