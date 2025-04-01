import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/item')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data)
      setItems(data);
    })
  }, []);
  return (
    <>
      <div>
        Inventory Management
      </div>
      <div className = "buttonlist">
        {items.map(item => <button>{item.itemname}</button>)}
      </div>
    </>
  )
}

export default App
