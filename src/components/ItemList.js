import React from "react";
import Item from "./Item";

import "./ItemList.css";
import { useSelector } from "react-redux";

const ItemList = () => {
  const dummyData = useSelector((state) => state.cart.dummy);

  return (
    <section className="list_section">
      <h2>좋아하는 제품 구매</h2>
      <ul>
        {dummyData.map((data) => (
          <Item key={data.id} data={data} />
        ))}
      </ul>
    </section>
  );
};

export default ItemList;
