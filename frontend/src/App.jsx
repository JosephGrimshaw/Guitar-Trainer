import React from "react";
import { Route, BrowserRouter, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import PageNavbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <PageNavbar />
            <Home />
          </div>
          } />
        <Route path="/logout" element={<Logout />}/>
        <Route path="/login" element={
          <div>
            <PageNavbar />
            <Login />
          </div>
        } />
        <Route path="/register" element={
          <div>
            <Register />
            <Login />
          </div>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
