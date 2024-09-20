import React from "react";

import "./Item.css";

import { useDispatch } from "react-redux";

import { cartActions } from "../slices/cartSlice";

const Item = ({ data }) => {
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: data.id,
        name: data.name,
        price: data.price,
        quantity: data.quantity,
      })
    );
  };

  return (
    <li>
      <div className="left">
        <p>{data.name}</p>
        <p>{data.ins}</p>
      </div>
      <div className="right">
        <span>{data.price.toLocaleString()}원</span>
        <button onClick={addCart}>카트 추가</button>
      </div>
    </li>
  );
};

export default Item;
