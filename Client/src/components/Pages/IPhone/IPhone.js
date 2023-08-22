import React, { useEffect, useState } from "react";
import "../../../css/bootstrap.css";
import "./iphone.css";
import { Link } from "react-router-dom";


function IPhone() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("/iphone.json")
      .then((response) => response.json())
      .then((data) => {
        const products = data.products;
        // console.log(products);
        setProduct(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let flip = true;
  return (
    <div className="container iphone-wrapper">
      <div className="row title-wrapper">
        <div className="col-sm-12 text-center">
          <h2 className="title-heading">iPhone</h2>
        </div>
        <div className="col-sm-12 text-center">
          <h3 className="subHeading">The best for the brightest.</h3>
        </div>
      </div>
      {product.map((products) => {
        let key = products.product_id;
        let order_one = 2;
        let order_two = 1;

        if (flip) {
          order_one = 1;
          order_two = 2;

          flip = !flip;
        } else {
          flip = !flip;
        }
        let viewProduct = (
          <div key={key} className="row product-wrapper">
            <div className={"col-sm-12 col-md-6 text_content order-" + order_one}>
              <h1 className="text-bold product-name">
                {products.product_name}
              </h1>
              <h4>{products.product_description}</h4>
              <h4>{"Starting at " + products.starting_price}</h4>
              <h4>{products.price_range}</h4>
              <div className="link">
                <Link to={"/iPhone/" + products.product_url}>Learn more {">"}</Link>
              </div>
            </div>
            <div className={"image-wrapper col-sm-12 col-md-6 order-" + order_two }>
              <img className="image" src={require("../../../images/iPhone/" + products.product_img)} />
            </div>
          </div>
        );
        return viewProduct;
      })}
    </div>
  );
}

export default IPhone;
