import { useEffect, useState } from "react";
import productApi from "./api/productApi";

function Product() {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = await productApi.get();
        console.log(res);
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>This is product page</h1>
      {products &&
        products.map(({ name, image }) => {
          return (
            <div>
              <p>{name}</p>
              <img width={300} src={image} alt="" />
            </div>
          );
        })}
    </div>
  );
}

export default Product;
