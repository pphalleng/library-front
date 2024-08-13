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
import CreateSale from 'views/crud/CreateLibrarian.js/';
import UpdateLibrarain from 'views/crud/UpdateLibrarain.js';

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import LoginLayout from "components/LoginValidation/LoginFormValidation.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginLayout />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/craete-category" element={<CreateCategory/>}/>
      <Route path="/create-product" element={<CreateProduct />}/>
      <Route path="/admin/create-librarian" element={<CreateSale/>}/>
      <Route path="/admin/edit-librarian/:id" element={<UpdateLibrarain/>}/>
      <Route path="*" element={<Navigate to="/admin/index" replace />} />
    </Routes>
  </BrowserRouter>
);
