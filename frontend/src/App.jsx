import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import SendMoney from "./pages/SendMoney.jsx"
import Statement from "./pages/Statement.jsx"

import ProtectedRoute from "./components/ProtectedRoute.jsx"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/send"
          element={
            <ProtectedRoute>
              <SendMoney />
            </ProtectedRoute>
          }
        />

        <Route
          path="/statement"
          element={
            <ProtectedRoute>
              <Statement />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App