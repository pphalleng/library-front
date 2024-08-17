/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CreateCategory from 'views/crud/CreateCategory.js';
import CreateProduct from 'views/crud/CreateProduct.js';
import CreateSale from '../src/views/crud/CreateLibrarain.js';
import UpdateLibrarain from '../src/views/crud/UpdateLibrarain.js';
import CreateBook from '../src/views/crud/CreateBook.js';
import Updatebook from '../src/views/crud/UpdateBook.js';
import CreateMemberCardShip from '../src/views/crud/CreateMembershipCards.js';
import UpdateMemberCardShip from '../src/views/crud/UpdateMembershipCard.js';
import CreateCustomer from '../src/views/crud/CreateCustomer.js';
import UpdateCustomer from '../src/views/crud/UpdateCustomer.js';


import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import LoginLayout from "components/LoginValidation/LoginFormValidation.js";
import { ContextProvider } from "../src/contexts/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <ContextProvider>
    <Routes>
      <Route path="/login" element={<LoginLayout />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/craete-category" element={<CreateCategory/>}/>
      <Route path="/create-product" element={<CreateProduct />}/>

      <Route path="/admin/create-librarian" element={<CreateSale/>}/>
      <Route path="/admin/edit-librarian/:id" element={<UpdateLibrarain/>}/>

      <Route path="/admin/create-book" element={<CreateBook/>}/>
      <Route path="/admin/edit-book/:id" element={<Updatebook/>}/>

      <Route path="/admin/create-membercardship" element={<CreateMemberCardShip/>}/>
      <Route path="/admin/edit-membercardship/:id" element={<UpdateMemberCardShip/>}/>

      
      <Route path="/admin/create-Customer" element={<CreateCustomer/>}/>
      <Route path="/admin/edit-customer/:id" element={<UpdateCustomer/>}/>

      {/* <Route path="*" element={<Navigate to="/admin/index" replace />} /> */}
    </Routes>
  </ContextProvider>
  </BrowserRouter>
);
