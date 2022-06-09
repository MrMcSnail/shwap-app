import { Link } from "react-router-dom";

export default function CategoryCard({ category_name }) {
  return (
    <>
      <li key={category_name}>
        <Link to={`/items/${category_name}`}>
          <h2>{category_name}</h2>
        </Link>
      </li>
    </>
  );
}
