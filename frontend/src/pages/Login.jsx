
import React, { useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../components/AuthContext"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogin = async () => {

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password }
    )

    login(res.data.token)

    navigate("/dashboard")
  }

  return (
    <div>

      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  )
}

export default Login