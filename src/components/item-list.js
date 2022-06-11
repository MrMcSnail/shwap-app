import React from "react";
import { fetchAllItems, fetchItemsByCategory } from "../api";
import { useState, useEffect } from "react";
import ItemCard from "./item-card";
import { useParams } from "react-router-dom";
import { List } from "@mui/material";

const ItemList = () => {
  const { category_name } = useParams();
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    if (category_name) {
      fetchItemsByCategory(category_name).then((items) => {
        setAllItems(items);
      });
    } else {
      fetchAllItems().then((items) => {
        setAllItems(items);
      });
    }
  }, [category_name]);

  const allCards = allItems.map((itemObj) => {
    const { item_id, item_name, description, img_url, price, category_name } =
      itemObj;

    return (
      <ItemCard
        key={item_id}
        item_id={item_id}
        item_name={item_name}
        description={description}
        img_url={img_url}
        price={price}
        category_name={category_name}
      />
    );
  });

  return <List className='ItemList'>{allCards}</List>;
};

export default ItemList;
