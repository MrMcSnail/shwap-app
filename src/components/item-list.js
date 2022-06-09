import React from "react";
import fetchAllItems from "../api";
import { useState, useEffect } from "react";
import ItemCard from "./item-card";

const ItemList = () => {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetchAllItems().then((items) => {
      setAllItems(items);
    });
  }, []);

  const allCards = allItems.map((itemObj) => {
    const { item_id, item_name, description, img_url, price, category_name } = itemObj;
    
    return (
      <ItemCard
        item_id={item_id}
        item_name={item_name}
        description={description}
        img_url={img_url}
        price={price}
        category_name={category_name}
      />
    );
  });

  return <ul className='ItemList'>{allCards}</ul>;
};

export default ItemList;
