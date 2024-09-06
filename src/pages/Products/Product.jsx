import React from "react";
const Product = ({ product }) => {
  return (
    <div>
      <div className=" md:max-w-[270px]  sm:max-w-xs relative bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-4">
        <div className="">
          <img
            src={product.image}
            alt={product.title}
            className=" w-2/3 md:w-full   h-auto object-cover"
          />
          <div
            style={{ borderRadius: "0px 10px 0px 23.42px" }}
            className="absolute top-0 h-[54px] w-14  right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 "
          >
            {product.discountPercentage}
          </div>
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-500">Points: {product.points}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-gray-500 line-through">
              {product.originalPrice}
            </span>
            <span className="text-red-500 font-bold">
              {product.discountedPrice}
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <button className="flex-1 bg-white border border-red-500 text-red-500 py-2 rounded-md hover:bg-red-50">
              Add to Cart
            </button>
            <button className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
