import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const detailsData = useLoaderData();
  const [details, setDetails] = useState({});
  const [filters, setFilters] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Find details based on the id parameter
    const findData = detailsData.find((detail) => detail.id == id);
    setDetails(findData);

    // Filter data based on category (example)
    const filteredData = detailsData.filter(
      (item) => item.category === findData?.category
    );

    setFilters(filteredData);
    console.log(filteredData);
  }, [id, detailsData]);

  return (
    <div>
      <div className="max-w-2xl mx-auto p-8">
        <div className="text-center">
          <div className="mb-3 ml-48">
            <img className="w-56" src={details.imgSrc} alt="" />
          </div>
          <p className="text-gray-700 mb-4">{details.description}</p>
          <div className="flex justify-center space-x-4">
            {/* Primary Button */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
              type="button"
            >
              Add To Cart
            </button>

            {/* Secondary Button */}
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray"
              type="button"
            >
              ${details.price}
            </button>
          </div>
        </div>
      </div>

      {/* Display filtered products in a grid */}
      <div className="grid grid-cols-3 gap-4">
        {filters.map((product) => (
          <div key={product.id}>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10">
                <Link>
                  <img
                    className="w-64 h-52 mb-3"
                    src={product.imgSrc}
                    alt="Product image"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </Link>
                <div className="flex mt-4 md:mt-6">
                  <a
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {product.price}
                  </a>
                  <a
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                  >
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
