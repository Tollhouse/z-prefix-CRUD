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

      const viewItem = (id) => {
        console.log("Redirecting to item page")
        navigate(`/Item/${id}`);
      };

      const fullInventory = () =>{
        console.log('Redirecting to full inventory...');
        navigate('/Fullinventory');
      };

      const createItem = () => {
        console.log('Redirecting to item creation page...');
        navigate(`/Createitem/${id}`);
      }

      const editHandler = async (itemid) => {
        console.log(`Editing ${itemid}...`);
      }

      const editUser= () => {
        console.log('Redirecting to User edit page...');
        navigate(`/Edituser/${id}`);
      }

    return (
    <>
      <div>
        Personal Inventory Management
      </div>
      <div>
      <button onClick={createItem}>Create New Item</button>
      <button onClick={fullInventory}>Full Inventory</button>
      <button onClick={editUser}>Edit Profile</button>
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
            <button onClick={() => viewItem(item.id)}>View</button>
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
            <button onClick={() => editHandler(item.id)}>Edit</button>
            </div>)}
      </div>
    </>
    )

}

export default Myinventory