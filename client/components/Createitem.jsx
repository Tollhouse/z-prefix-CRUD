import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Createitem(){
    const [userid, setUserName] = useState('');
    const [itemname, setPassword] = useState('');
    const [description, setFirstName] = useState('');
    const [quantity, setLastName] = useState(0);

    const navigate = useNavigate();

    const submitHandler = () => {
            console.log(userid)
            console.log(itemname)
            console.log(description)
            console.log(quantity)
    }

    const fullInventory = () =>{
        console.log('Redirecting to full inventory...');
        navigate('/Fullinventory');
      };

    const Myinventory = () => {
        console.log('Redirecting to personal invnetory...');
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