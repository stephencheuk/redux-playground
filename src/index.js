import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import PureRedux from './redux';
// import ReduxToolkit from './redux-toolkit';
// import Cart from './cart';
// import Cart from './mobx';
// import Cart from './recoil';
// import Cart from "./recoilWhale";
// import Cart from "./recoilTodo";

import "./index.css";

import App from "./App";
import Redux from "./redux";
import ReduxToolkit from "./reduxToolkit";
import Mobx from "./mobx";
import Cart from "./cart";
import Recoil from "./recoil";
import RecoilTodo from "./recoilTodo";
import RecoilWhale from "./recoilWhale";
import RecoilPost from "./recoilPost";

const root = ReactDOM.createRoot(document.getElementById("root"));
// <React.StrictMode>
// </React.StrictMode>

// use process.env.PUBLIC_URL as the router basename which is auto defined by homepage in package.json
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Redux />} />
        <Route path="redux" element={<Redux />} />
        <Route path="reduxToolkit" element={<ReduxToolkit />} />
        <Route path="mobx" element={<Mobx />} />
        <Route path="cart" element={<Cart />} />
        <Route path="recoil" element={<Recoil />} />
        <Route path="recoilTodo" element={<RecoilTodo />} />
        <Route path="recoilWhale" element={<RecoilWhale />} />
        <Route path="recoilPost" element={<RecoilPost />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
