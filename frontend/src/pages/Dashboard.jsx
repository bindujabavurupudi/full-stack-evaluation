import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const Dashboard = () => {

  const [balance, setBalance] = useState(0)

  const token = localStorage.getItem("token")

  useEffect(() => {

    axios.get(
      "http://localhost:5000/api/account/balance",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then(res => setBalance(res.data.balance))

  }, [])

  return (
    <div>

      <h1>Dashboard</h1>

      <h2>Balance: ₹{balance}</h2>

    </div>
  )
}

export default Dashboard