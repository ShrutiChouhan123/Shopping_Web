import './App.css';
import Product from "./Components/ProductData";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import Header from "./Components/Header";
import Product_Details from "./Components/Product_Details";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Protected from "./Components/Protected";
import Register from './Components/Register';


function App() {
  let login = JSON.parse(localStorage.getItem("login"))

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/products" element={<Protected Component={login ? Product : Login} />}></Route>
          <Route path="/cart" element={<Protected Component={login ? Cart: Login} />} ></Route>
          <Route path="/wishlist" element={<Protected Component={login ? Wishlist : Login}/>}></Route>
          <Route exact path="/productdetails/:id" element={<Protected Component={login ? Product_Details: Login}/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>

          <Route exact path="/products/profile" element={<Protected Component={login ? Profile : Login}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;


