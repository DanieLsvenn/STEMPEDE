import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

function LabSpecial() {
  const { all_product } = useContext(Context);
  const { addToCart } = useContext(Context);
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-blue-50 p-10 flex flex-col justify-center">
        <div className="mb-8">
          <h2 className="text-5xl font-extrabold text-orange-500 mb-4">
            Special Offer
          </h2>
          <p className="text-lg text-orange-500 max-w-md">
            Discover our exclusive kits and tools designed to bring STEM
            learning to life! Up to 50% off on selected items.
          </p>
        </div>
        <div className="w-full overflow-y-auto p-8 bg-gray-50 relative mt-5 shadow-md">
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-50 to-transparent"></div>
          <div className="grid grid-cols-2 gap-6">
            {all_product.map((product) => (
              <div
                key={product.id}
                className="bg-white p-5 rounded-lg shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded-md mb-4"
                />
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <div
                    onClick={() => {
                      addToCart(product.id);
                    }}
                    className="text-blue-500 hover:text-blue-700 hover:scale-105 transition-all"
                  >
                    <IoMdAddCircle />
                  </div>
                </div>
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

      <div className="w-1/2 relative">
        <img
          src="https://img.freepik.com/premium-vector/stem-science-line-concept-colored-square-banner-with-4-signs-science-technology-engineering-math-vector-linear-colored-illustration_104589-5763.jpg"
          alt="Stem Kit"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center">
          <h1 className="text-9xl text-center font-bold text-white opacity-25">
            LAB SPECIALS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default LabSpecial;
