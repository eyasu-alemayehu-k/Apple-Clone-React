const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

var app = express();

const corsOption = {
  origin: [
    "http://localhost:3000"
  ]
}

app.use(cors(corsOption));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

var mysqlConnection = mysql.createConnection({
  user: "root",
  password: "",
  host: "127.0.0.1",
  database: "apple",
});

mysqlConnection.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected");
});

app.get("/install", (req, res) => {
  let message = "Tables Created";
  let createProducts = `CREATE TABLE if not exists Products(
        product_id int auto_increment,
        product_url varchar(255) not null,
        product_name varchar(255) not null,
        PRIMARY KEY (product_id)
    )`;
  let createProductDescription = `CREATE TABLE if not exists ProductDescription(
      description_id int auto_increment,
      product_id int(11) not null,
      product_brief_description TEXT not null,
      product_description TEXT not null,
      product_img varchar(255) not null,
      product_link varchar(255) not null,
      PRIMARY KEY (description_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;
  let createProductPrice = `CREATE TABLE if not exists ProductPrice(
      price_id int auto_increment,
      product_id int(11) not null,    
      starting_price varchar(255) not null,
      price_range varchar(255) not null,
      PRIMARY KEY (price_id),
      FOREIGN KEY (product_id) REFERENCES Products(product_id)
    )`;
  mysqlConnection.query(createProducts, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductDescription, (err, results, fields) => {
    if (err) console.log(err);
  });
  mysqlConnection.query(createProductPrice, (err, results, fields) => {
    if (err) console.log(err);
  });

  res.end(message);
});

app.post("/addiphones", (req, res) => {
  console.log(req.body);

  let prodcutName = req.body.iphone_name;
  let ProdcutUrl = req.body.iphone_url;
  let StartPrice = req.body.starting_price;
  let PriceRange = req.body.price_range;
  let product_link = req.body.product_link;
  let Description = req.body.product_description;
  let Brief = req.body.product_brief_description;
  let img = req.body.product_img;

  let sqlAddToProducts =
    "INSERT INTO Products  (product_url, product_name) VALUES ('" +
    ProdcutUrl +
    "', '" +
    prodcutName +
    "')";

  mysqlConnection.query(sqlAddToProducts, (err, results) => {
    if (err) console.log(err);
    else console.log("one row inserted.");
  });

  let getMeTheId =
    "SELECT product_id from Products WHERE product_url = '" + ProdcutUrl + "'";

  mysqlConnection.query(getMeTheId, (err, rows, fields) => {
    console.log(rows);
    addedProductId = rows[0].product_id;
    console.log(addedProductId);
    if (err) console.log(err);
    if (addedProductId != 0) {
      let sqlAddToProductDescription =
        "INSERT INTO ProductDescription (product_id, product_brief_description, product_description, product_img, product_link) VALUES ('" +
        addedProductId +
        "', '" +
        Brief +
        "', '" +
        Description +
        "', '" +
        img +
        "', '" +
        product_link +
        "' )";

      let sqlAddToProductPrice =
        "INSERT INTO ProductPrice (product_id, starting_price, price_range) VALUES ('" +
        addedProductId +
        "', '" +
        StartPrice +
        "', '" +
        PriceRange +
        "')";

      mysqlConnection.query(sqlAddToProductDescription, function (err, result) {
        if (err) throw err;
        console.log("Product description inserted");
      });

      mysqlConnection.query(sqlAddToProductPrice, function (err, result) {
        if (err) throw err;
        console.log("Product price inserted");
      });
    }
  });
  res.end("Product added");
});

app.post("/updateiphone", (req, res) => {
  let prodcutName = req.body.iphone_name;
  let ProdcutUrl = req.body.iphone_url;
  let StartPrice = req.body.starting_price;
  let PriceRange = req.body.price_range;
  let product_link = req.body.product_link;
  let Description = req.body.product_description;
  let Brief = req.body.product_brief_description;
  let img = req.body.product_img;

  let getMeTheId =
    "SELECT product_id from Products WHERE product_url = '" + ProdcutUrl + "'";
  mysqlConnection.query(getMeTheId, (err, rows, fields) => {
    addedProductId = rows[0].product_id;
    if (err) console.log(err);
    if (addedProductId != 0) {
      let updateProducts =
        "UPDATE Products SET product_name = '" +
        prodcutName +
        "' WHERE product_id = '" +
        addedProductId +
        "'";

      mysqlConnection.query(updateProducts, (err, results, fields) => {
        if (err) console.log(err);
        else res.end("table updated");
      });
    }
  });
});
      
//Get all iphones
app.get("/iphones", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphones = { products: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});

app.listen(4000, () => {
  console.log("listening on port 4000...");
});
