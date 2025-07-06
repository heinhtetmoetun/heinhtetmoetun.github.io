import { useState } from 'react'
import './App.css'

function App() {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)

  const formatNumber = (value) => {
    const num = value.replace(/^0+(?=\d)/, '') // remove leading zeros
    return num === '' ? 0 : Number(num)
  }

  const gross = price - discount
  const vat = (gross * 0.07).toFixed(2)

  return (
    <div className="container">
      <label>
        Price
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(formatNumber(e.target.value))}
        />
      </label>

      <label>
        Discount
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(formatNumber(e.target.value))}
        />
      </label>

      <h2>Gross Price = {gross}</h2>
      <h2>VAT = {vat}</h2>
    </div>
  )
}

export default App
