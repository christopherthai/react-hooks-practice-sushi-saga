import React, { useState } from 'react'


function SushiWallet({ onAddMoney }) {

  const [value, setValue] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddMoney(value)
  }

  const handleChange = (e) => {
    setValue(parseInt(e.target.value))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="money"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Add Money</button>
    </form>
  )
}

export default SushiWallet