import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Test from "./pages/Test.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Layout from "./components/Layout.jsx";
import { AuthProvider } from "./auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import Share from "./pages/Share.jsx";
import AllUsers from "./pages/AllUsers.jsx";

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="/share/:email" element={<Share />}></Route>
            <Route path="/home" element={<Home />} />
            <Route path="/all-users" element={<AllUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
