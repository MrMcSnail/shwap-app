import { useState, useEffect } from "react";
import { fetchAllCategories } from "../api";
import CategoryCard from "./categorycard";


const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories().then((categories) => {
      setAllCategories(categories);
    });
  }, []);

  const allCategoryCards = allCategories.map((categoryObj) => {
    const { category_name } = categoryObj;
    return <CategoryCard category_name={category_name}/>;
  });

  return <ul className="CategoryList">{allCategoryCards}</ul>;
};

export default Categories;