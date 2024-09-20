import React from "react";

import "./Header.css";
import { useDispatch } from "react-redux";
import { isCartActions } from "../slices/isCartSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const click = () => {
    dispatch(isCartActions.toggle());
  };

  return (
    <header className="header">
      <h1>ReduxCart</h1>
      <button onClick={click}>
        <span>내 카트</span>
        <span>{totalQuantity}</span>
      </button>
    </header>
  );
};

export default Header;
