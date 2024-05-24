import React, { useState } from "react";
import { useCart } from "./CartContext";
import phone1 from "../assets/iphone 12.png";
import phone2 from "../assets/iphone 12 pro.png";
import phone3 from "../assets/iphone 13.png";
import phone4 from "../assets/iphone 13 mini.png";
import phone5 from "../assets/iphone 14.png";
import phone6 from "../assets/iphone 14 plus.png";

function Catalog() {
  const products = [
    { id: 1, name: "iPhone 12", price: 44990, image: phone1, brand: "Apple" },
    {
      id: 2,
      name: "iPhone 12 Pro",
      price: 51990,
      image: phone2,
      brand: "Apple",
    },
    { id: 3, name: "iPhone 13", price: 49990, image: phone3, brand: "Apple" },
    {
      id: 4,
      name: "iPhone 13 Mini",
      price: 45990,
      image: phone4,
      brand: "Apple",
    },
    { id: 5, name: "iPhone 14", price: 52990, image: phone5, brand: "Apple" },
    {
      id: 6,
      name: "iPhone 14 Plus",
      price: 56990,
      image: phone6,
      brand: "Apple",
    },
  ];

  const formatPrice = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "PHP",
    });
  };

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedBrand && product.brand !== selectedBrand) {
      return false;
    }
    if (minPrice && product.price < parseInt(minPrice)) {
      return false;
    }
    if (maxPrice && product.price > parseInt(maxPrice)) {
      return false;
    }
    return true;
  });

  const { addToCart } = useCart();

  return (
    <div className="catalog-header">
      <h1>Catalog</h1>
      <div className="catalog-container">
        <div className="filter-container">
          <h2>Filtering </h2>
          <div className="radio-checkbox">
            <h3>Brand</h3>
            <label className="radio-option">
              <input
                type="radio"
                name="brand"
                value="Apple"
                checked={selectedBrand === "Apple"}
                onChange={handleBrandChange}
              />
              Apple
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="brand"
                value="Samsung"
                checked={selectedBrand === "Samsung"}
                onChange={handleBrandChange}
              />
              Samsung
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="brand"
                value="Huawei"
                checked={selectedBrand === "Huawei"}
                onChange={handleBrandChange}
              />
              Huawei
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="brand"
                value="Xiaomi"
                checked={selectedBrand === "Xiaomi"}
                onChange={handleBrandChange}
              />
              Xiaomi
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="brand"
                value="Google"
                checked={selectedBrand === "Google"}
                onChange={handleBrandChange}
              />
              Google
            </label>
          </div>
          <div className="price-filter">
            <h3>Price Range</h3>
            <input
              type="number"
              placeholder="Minimum Price"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <p>To</p>
            <input
              type="number"
              placeholder="Maximum Price"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{formatPrice(product.price)}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catalog;
