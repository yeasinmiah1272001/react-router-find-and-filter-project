import { useLoaderData } from "react-router-dom";
import Product from "./Product";



const Products = () => {
  const products = useLoaderData();
  // console.log(products)

  return (
    <div>
      <h1>This is product</h1>
      <div className="grid grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;