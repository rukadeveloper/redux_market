import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../slices/cartSlice";

const CartItem = (props) => {
  const { id, name, price, totalPrice, quantity } = props.data;
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        quantity,
      })
    );
  };

  const removeHandler = () => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  return (
    <div>
      <span>{name}</span>
      <span>{totalPrice}</span>
      <span>{quantity}</span>
      <div>
        <button onClick={addHandler}>+</button>
        <button onClick={removeHandler}>-</button>
      </div>
    </div>
  );
};

export default CartItem;
