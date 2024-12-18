import React, { useState } from "react";
import list from "../data";
import Shopcart from "./shopcart";

const Product = ({ handleClick }) => {
  const [products, setProducts] = useState(list); // Product list
  const [sortOrder, setSortOrder] = useState("lowToHigh"); // Sort order state

  // Sorting function
  const handleSort = () => {
    const sortedProducts = [...list].sort((a, b) => {
      return sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
    setSortOrder(sortOrder === "lowToHigh" ? "highToLow" : "lowToHigh");
  };

  return (
    <section>
      {/* Sort button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={handleSort}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            backgroundColor: "rgb(14, 27, 77)",
            color: "#FFF",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sort by Price: {sortOrder === "lowToHigh" ? "High to Low" : "Low to High"}
        </button>
      </div>

      {/* Product list */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.map((item) => (
          <Shopcart item={item} handleClick={handleClick} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Product;
