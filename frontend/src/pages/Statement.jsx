import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

const Statement = () => {

  const [transactions, setTransactions] = useState([])

  const token = localStorage.getItem("token")

  useEffect(() => {

    axios.get(
      "http://localhost:5000/api/account/statement",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then(res => setTransactions(res.data))

  }, [])

  return (
    <table border="1">

      <thead>
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>

      <tbody>

        {transactions.map(t => (

          <tr key={t.id}>

            <td>{t.created_at}</td>

            <td
              style={{
                color: t.transaction_type === "credit"
                  ? "green"
                  : "red"
              }}
            >
              {t.transaction_type}
            </td>

            <td>{t.amount}</td>

          </tr>

        ))}

      </tbody>

    </table>
  )
}

export default Statement;