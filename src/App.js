import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NavBar from "./components/nav";
import ItemList from "./components/item-list";
import SellItem from "./components/sell-item";
import CreateUser from "./components/create-user";
import CategoryList from "./components/category-list";
import UserList from "./components/user-list";
import { UserContext } from "./contexts/user";
import { useState } from "react";

const superUberUser = {
			"username": "xViolaine",
			"avatar_url": "https://64.media.tumblr.com/3a1730fccc0f8144e4823b333383855d/tumblr_ozu6r9kdg31rxye79o1_1280.jpg",
			"kudos": 7
		}

function App() {
  const [user, setUser] = useState(superUberUser)
  return (
    <BrowserRouter>
    <UserContext.Provider value={{user, setUser}}>
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
          <Route path="/basket" element={<CreateUser />} />
        </Routes>
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
