import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NavBar from "./components/nav";
import ItemList from "./components/item-list";
import CategoryList from "./components/category-list";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/:category_name" element={<ItemList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
