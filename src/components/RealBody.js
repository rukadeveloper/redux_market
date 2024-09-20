import React from "react";

import ItemList from "./ItemList";
import CartList from "./CartList";

import { useSelector } from "react-redux";

const RealBody = () => {
  const isCart = useSelector((state) => state.isCart.isCart);

  return (
    <main>
      {isCart && <CartList />}
      <ItemList />
    </main>
  );
};

export default RealBody;
