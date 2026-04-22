import React from 'react'

const Input = ({data , setData , addNewItem}) => {
  return (
    <div className="input-data">
      <p>What do you need for your 😍 trip?</p>
      <form onClick={(e) => e.preventDefault()}>
        <select value={data.count} onChange={(e) => setData({...data , count: e.target.value})}>
          {Array.from({length: 20} , (op , i) => (
            <option key={i} value={i + 1}>{i + 1}</option>
          ))}
        </select>
        <input type="text" placeholder="Item..." value={data.input} onChange={(e) => setData({...data , input: e.target.value})}/>
        <button type="button" onClick={addNewItem}>Add</button>
      </form>
    </div>
  )
}

export default Input
