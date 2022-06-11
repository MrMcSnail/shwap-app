import { List } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchAllCategories } from "../api";
import CategoryCard from "./category-card";


const CategoryList = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories().then((categories) => {
      setAllCategories(categories);
    });
  }, []);

  const allCategoryCards = allCategories.map((categoryObj) => {
    const { category_name } = categoryObj;
    return <CategoryCard key={category_name} category_name={category_name}/>;
  });

  return <List className="CategoryList">{allCategoryCards}</List>;
};

export default CategoryList;