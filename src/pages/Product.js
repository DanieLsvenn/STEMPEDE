import React, { useState } from "react";
import { Link } from "react-router-dom";
import all_product from "./../assets/products/all_products.js";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState(""); // For search
  const [selectedBrand, setSelectedBrand] = useState("All"); // For filtering by brand
  const [sortType, setSortType] = useState("default"); // For sorting

  // Filter products by search term and selected brand
  const filteredProducts = all_product.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  // Sorting the filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "price_asc") return a.price - b.price;
    if (sortType === "price_desc") return b.price - a.price;
    if (sortType === "brand_asc") return a.brand.localeCompare(b.brand);
    if (sortType === "brand_desc") return b.brand.localeCompare(a.brand);
    return 0;
  });

  // Get all unique brands for the filter dropdown
  const uniqueBrands = [
    "All",
    ...new Set(all_product.map((product) => product.brand)),
  ];

  return (
    <div className="p-4 pt-40">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by product name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
      />

      {/* Filter by Brand */}
      <div className="flex items-center mb-4">
        <label className="mr-2 font-semibold">Filter by Brand:</label>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2"
        >
          {uniqueBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
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
          <option value="brand_asc">Brand: A-Z</option>
          <option value="brand_desc">Brand: Z-A</option>
        </select>
      </div>

      {/* Product Grid */}

      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-5 rounded-lg shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-500">{product.brand}</p>
                <p className="text-lg font-semibold text-gray-700">
                  ${product.price}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md transition hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
