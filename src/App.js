import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NavBar from "./components/nav";
import ItemList from "./components/item-list";
import SellItem from "./components/sell-item";
import CreateUser from "./components/create-user";
import CategoryList from "./components/category-list";
import UserList from "./components/user-list";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/items" element={<ItemList />} />
          <Route path="/items/:category_name" element={<ItemList />} />
          <Route path="/sell" element={<SellItem />} />
          <Route path="/createuser" element={<CreateUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
