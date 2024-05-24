import React from "react";
import { useCart } from "./CartContext";

function Cart() {
  const { cart } = useCart();

  const formatPrice = (price) => {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "PHP",
    });
  };

  // Log cart for debugging
  console.log("Cart:", cart);

  // Calculate total amount
  const totalAmount = cart.reduce((acc, item) => {
    const quantity = 1;
    const itemTotal = !isNaN(quantity) ? item.price * quantity : 0;
    return acc + itemTotal;
  }, 0);

  const totalAmountSummary = cart.reduce((acc, item) => {
    const quantity = 1;
    const itemTotal = !isNaN(quantity) ? item.price * quantity + 100 : 0;
    return acc + itemTotal;
  }, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <h1>Your Cart Is Empty</h1>
        </div>
      ) : (
        <div className="cart-table-summary">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const quantity = 1;
                const itemTotal = !isNaN(quantity) ? item.price * quantity : 0;
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="product-column">
                        <img
                          className="item-image"
                          src={item.image}
                          alt={item.name}
                        />
                        <p>{item.name}</p>
                      </div>
                    </td>
                    <td>1</td>
                    <td>{formatPrice(item.price)}</td>
                    <td>{formatPrice(itemTotal)}</td>
                  </tr>
                );
              })}
              <h2>Total: {formatPrice(totalAmount)}</h2>
            </tbody>
          </table>
          <div className="summary-container">
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    <div>
                      <h3>
                        {item.name} - {formatPrice(item.price)}
                      </h3>
                    </div>
                  </li>
                ))}
                <h3>Shipping - {formatPrice(100)}</h3>
                <h3>__________________________</h3>
                <h3>
                  Total: <span>{formatPrice(totalAmountSummary)}</span>
                </h3>
              </ul>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
