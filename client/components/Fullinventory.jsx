import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Fullinventory(){
    const [items, setItems] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/item')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setItems(data);
        })
      }, []);


    const viewItem = (id) => {
        console.log("Redirecting to item page")
        navigate(`/Item/${id}`);
    };

    const back = () => {
      console.log("Redirecting to login page")
      navigate(`/`);
    };

    const shortDesc = (desc) => {
      if(desc.length > 100){
        return desc.slice(0,100) + '...'
      } else{
        return desc
      }
    }

    const personalInventory = () => {
      const storedId = localStorage.getItem('myid');
      console.log(storedId)
      if(typeof storedId === 'undefined'){
        alert("Please login to view your inventory.")
      } else {
        navigate(`/Myinventory/${storedId}`)
      }
    }

    return (
      <>
        <div>
          Current Inventory List
        </div>
        <div className = "inventorylist">
          {items.map(item => <div>
                                Item Name: {item.itemname} 
                                Quantity: {item.quantity} 
                                Description: {shortDesc(item.description)}
                              <button onClick={() => viewItem(item.id)}>View</button>
                              </div>)}
        </div>
        <button onClick={back}>Login</button>
        <button onClick={personalInventory}>My Inventory</button>
      </>
    )

}



export default Fullinventory