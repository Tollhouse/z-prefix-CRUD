import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Myinventory(){
    const [items, setItems] = useState([]);
    const [personalItems, setPersonalItems] = useState([]);
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/item')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const filtered = data.filter(item => String(item.userid) === String(id))
          setItems(filtered)
        })
      }, []);

      const deleteHandler = async (itemId) => {
        const response = await fetch(`http://localhost:3000/item/${itemId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok){
          window.location.reload()
        }
      };

      const shortDesc = (desc) => {
        if(desc.length > 100){
          return desc.slice(0,100) + '...'
        } else{
          return desc
        }
      }

      const fullInventory = () =>{
        console.log('Redirecting to full inventory...');
        navigate('/Fullinventory');
      };

      const createItem = () => {
        console.log('Redirecting to item creation page...');
        navigate(`/Createitem/${id}`);
      }

    return (
        <>
      <div>
        Personal Inventory Management
      </div>
      <div>
      <button onClick={createItem}>Create New Item</button>
      <button onClick={fullInventory}>Full Inventory</button>
      </div>
      <div>
        Your item list
      </div>
      <div className = "inventorylist">
        {items.map(item => 
          <div>
            {item.itemname} <br/>
            Quantity:{item.quantity} <br/>
            Description: {shortDesc(item.description)} <br/>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
            </div>)}
      </div>
        </>
    )

}

export default Myinventory