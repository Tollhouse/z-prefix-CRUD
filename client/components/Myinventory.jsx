import { useState, useEffect, useContext } from 'react'

function Myinventory(){
    const [items, setItems] = useState([]);
    const [personalItems, setPersonalItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/item')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setItems(data);
        })
      }, []);

    return (
        <>
      <div>
        Personal Inventory Management
      </div>
      <div className = "inventorylist">
        {items.map(item => <div>{item.itemname} Quantity:{item.quantity}</div>)}
      </div>
        </>
    )

}



export default Myinventory