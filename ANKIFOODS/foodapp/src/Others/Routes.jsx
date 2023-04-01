import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import MyOrder from "../Screens/MyOrder";
import Cart from '../Screens/Cart';
import ThanksForOrder from '../Screens/ThanksForOrder';

export default function RoutesComp() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
             <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/myorder" element={<MyOrder />} />
            <Route path="/thanksfororder" element={<ThanksForOrder />} />
            {/* <Route path="/mycart" element={<Mycart />} /> */}
            {/*<Route path="/ordercompleted" element={<OrderCompleted />} />
            <Route path="/Signup" element={ <Signup/>}/>
            <Route path="/Login" element={ <Login/>}/> */}
            {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>

    </div>
  )
}
