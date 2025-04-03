import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Createitem(){
    const [userid, setUserName] = useState('');
    const [itemname, setPassword] = useState('');
    const [description, setFirstName] = useState('');
    const [quantity, setLastName] = useState(0);
    const {id} = useParams();

    const navigate = useNavigate();

    const submitHandler = async () => {
        console.log(id)
        console.log(itemname)
        console.log(description)
        console.log(quantity)
        const data = {
            userid: Number(id),
            itemname: String(itemname),
            description: String(description),
            quantity: Number(quantity)
        };
        const response = await fetch('http://localhost:3000/item', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(response)
        navigate(`/Myinventory/${id}`)
    }

    const fullInventory = () =>{
        console.log('Redirecting to full inventory...');
        navigate('/Fullinventory');
      };

    const Myinventory = () => {
        console.log('Redirecting to personal invnetory...');
        navigate(`/Myinventory/${id}`)
    };

    return (
        <>
            <h1>New Item</h1>
            <div>
            <button onClick={Myinventory}>My Inventory</button>
            <button onClick={fullInventory}>Full Inventory</button>
            </div>

            <div>
                <input 
                id="ItemName"
                type="text"
                placeholder="Item Name"
                value={itemname}
                onChange={(currentvalue) => setPassword(currentvalue.target.value)}/>
            </div>
            

            <div>
                <input 
                id="Description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(currentvalue) => setFirstName(currentvalue.target.value)}/>
            </div>

            <div>
                <input 
                id="Quantity"
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(currentvalue) => setLastName(currentvalue.target.value)}/>
            </div>

            <div>
                <button onClick={submitHandler}>Create Item</button>
            </div>
        </>
    )

}


export default Createitem