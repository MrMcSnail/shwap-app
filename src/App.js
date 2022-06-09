import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NavBar from "./components/nav";
import ItemList from "./components/item-list";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/items" element={<ItemList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
