import React, { useEffect } from "react";

import "./CartList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const cartList = useSelector((state) => state.cart.items);

  return (
    <section className="list_section">
      <div>
        <h3>당신의 쇼핑 카트</h3>
        <div>
          {cartList.map((list) => (
            <CartItem key={list.id} data={list} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartList;
