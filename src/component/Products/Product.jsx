
import { Link } from "react-router-dom";


const Product = ({ product }) => {

  const { price, description, imgSrc, title, id } = product;
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <Link to={`/details/${id}`}>
            <img className="w-64 h-52 mb-3  " src={imgSrc} alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          {/* <span className="text-sm text-gray-500 dark:text-gray-400">
           {description}
          </span> */}
          <div className="flex mt-4 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {price}
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
            >
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
