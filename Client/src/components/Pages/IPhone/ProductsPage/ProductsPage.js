import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../../../Four04/Four04";

function ProductsPage() {
  const { productId } = useParams();
  // console.log(productId);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("/iphone.json")
      .then((response) => response.json())
      .then((data) => {
        const products = data.products;
        // console.log(products);
        const filterdProduct = products.filter(
          (product) => product.product_url === productId
        );
        // console.clear()
        console.log(filterdProduct);
        setProduct(filterdProduct);
      })
      .catch((err) => console.log(err));
  }, []);
  if (product.length) {
    return (
      <div>
        {product.map((products) => {
          const key = products.product_id;
          let viewProduct = (
            <div key={key} className="container iphone-wrapper">
              <div className="row title-wrapper">
                <div className="col-sm-12 text-center">
                  <h2 className="title-heading">{products.product_name}</h2>
                </div>
                <div className="col-sm-12 text-center">
                  <h3 className="subHeading">{products.product_description}</h3>
                </div>
              </div>
              <div className="row product-wrapper">
                <div className="col-sm-12 col-md-6 text_content order">
                  <h4>{"Starting at " + products.starting_price}</h4>
                  <h4>{products.price_range}</h4>
                  <h4 className="text-center">
                    {products.product_brief_description}
                  </h4>
                </div>
                <div className="image-wrapper col-sm-12 col-md-6 order-">
                  <img
                    className="image"
                    src={require("../../../../images/iPhone/" +
                      products.product_img)}
                  />
                </div>
              </div>
            </div>
          );
          return viewProduct;
        })}
      </div>
    );
  } else {
    return <Four04 />;
  }
}

export default ProductsPage;
