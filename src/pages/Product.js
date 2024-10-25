import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { Context } from "../context/Context.js";
import { fetchProducts } from "../api/product.js";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState(""); // For search
  const [selectedSubcategory, setSelectedSubcategory] = useState("All"); // For filtering by subcategory
  const [sortType, setSortType] = useState("default"); // For sorting
  const [products, setProducts] = useState([]); // State for products
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [productsPerPage] = useState(8); // Number of products per page
  const { addToCart } = useContext(Context);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      if (
        fetchedProducts.success &&
        Array.isArray(fetchedProducts.data.items)
      ) {
        setProducts(fetchedProducts.data.items);
      } else {
        console.error("Fetched products is not an array:", fetchedProducts);
      }
    };
    getProducts();
  }, []);

  // Filter products by search term and selected subcategory
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSubcategory =
      selectedSubcategory === "All" ||
      product.subcategoryName === selectedSubcategory;
    return matchesSearch && matchesSubcategory;
  });

  // Sorting the filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "price_asc") return a.price - b.price;
    if (sortType === "price_desc") return b.price - a.price;
    if (sortType === "name_asc")
      return a.productName.localeCompare(b.productName);
    if (sortType === "name_desc")
      return b.productName.localeCompare(a.productName);
    return 0;
  });

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get all unique subcategories for the filter dropdown
  const uniqueSubcategories = [
    "All",
    ...new Set(products.map((product) => product.subcategoryName)),
  ];

  return (
    <div className="p-4 pt-10">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
      />

      {/* Filter by Subcategory */}
      <div className="flex items-center mb-4">
        <label className="mr-2 font-semibold">Filter by Subcategory:</label>
        <select
          value={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          {uniqueSubcategories.map((subcategory) => (
            <option key={subcategory} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Options */}
      <div className="flex items-center mb-4">
        <label className="mr-2 font-semibold">Sort by:</label>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="default">Default</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="name_asc">Name: A-Z</option>
          <option value="name_desc">Name: Z-A</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentProducts.map((product) => (
              <div
                key={product.productID}
                className="bg-white p-5 rounded-lg shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.productName}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold truncate">
                    {product.productName}
                  </h2>
                  <div
                    onClick={() => {
                      addToCart(product.productID);
                    }}
                    className="text-blue-500 hover:text-blue-700 hover:scale-105 transition-all"
                  >
                    <IoMdAddCircle />
                  </div>
                </div>
                <p className="text-gray-500">{product.subcategoryName}</p>
                <p className="text-lg font-semibold text-gray-700">
                  ${product.price}
                </p>
                <Link
                  to={`/product/${product.productID}`}
                  className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md transition hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            {Array.from(
              { length: Math.ceil(filteredProducts.length / productsPerPage) },
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
        </div>
      </div>
    </div>
  );
};

export default Product;
