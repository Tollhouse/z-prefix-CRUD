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
      console.log("Redirecting to inventory page")
      navigate(`/`);
  };

    return (
      <>
        <div>
          Current Inventory List
        </div>
        <div className = "inventorylist">
          {items.map(item => <div>{item.itemname} Quantity:{item.quantity}
                              <button onClick={() => viewItem(item.id)}>View</button>
                              </div>)}
        </div>
        <button onClick={back}>Login</button>
      </>
    )

}



export default Fullinventory