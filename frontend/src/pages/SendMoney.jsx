import { useState } from "react"
import axios from "axios"

const SendMoney = () => {

  const [receiverEmail, setReceiverEmail] = useState("")
  const [amount, setAmount] = useState("")

  const token = localStorage.getItem("token")

  const handleTransfer = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/api/account/transfer",
        {
          receiverEmail,
          amount: Number(amount)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      alert(res.data.message)

    } catch (err) {

      alert("Transfer failed")

    }
  }

  return (

    <div>

      <h2>Send Money</h2>

      <input
        placeholder="Receiver Email"
        onChange={(e) => setReceiverEmail(e.target.value)}
      />

      <input
        placeholder="Amount"
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleTransfer}>
        Send
      </button>

    </div>

  )
}

export default SendMoney