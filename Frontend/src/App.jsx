import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Women } from "./components/Women/Women";
import {Men} from "./components/Men/Men"
import { Route, Routes } from "react-router-dom";
import { Kid } from "./components/Kid/Kid";
import { Snkrs } from "./components/SNKRS/Snkrs";
import {Signup} from "./components/Signup/Signup"
import { Login } from "./components/Login/Login";
import { Productdetail } from "./components/Product_Details/ProductDetail";
import {Bag} from "./components/Addtocart/Addtocart"
import { Payment } from "./components/Payment/Payment";
import { Order } from "./components/Order/Order";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/kids' element={<Kid/>}/>
        <Route path="/snkrs" element={<Snkrs/>}/>
        <Route path="/signIn" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/detail/:id" element={<Productdetail/>}/>
        <Route path="/cart"  element={<Bag/>} />
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/ordersuccess" element={<Order/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
