import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/item')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setItems(data);
    })
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setUser(data);
      console.log(user)
    })
  }, []);

  return (
    <>
      <div>
        Inventory Management
      </div>
      <div className = "buttonlist">
        {items.map(item => <button>{item.itemname} Quantity:{item.quantity} <br/> Added by: {user[0].username}</button>)}
      </div>
    </>
  )
}

export default App
