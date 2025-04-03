import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Item(){
    const [item, setItem] = useState({});
    const [userName, setUserName] = useState({});
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/item/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            setItem(data[0]);
        })
        fetch(`http://localhost:3000/users/${id}`)
        .then((res) => {
            return res.json();;
        })
        .then((data) =>{
            setUserName(data[0])
        })
    }, []);

    const fullInventory = () => {
        console.log("Redirecting to inventory page")
        navigate(`/Fullinventory`);
    };

    const myInventory = () => {
        const storedId = localStorage.getItem('myid');
        console.log(storedId)
        if(typeof storedId === 'undefined'){
          alert("Please login to view your inventory.")
        } else {
          navigate(`/Myinventory/${storedId}`)
        }
    };

    return(
    <>
        <div>
        Viewing
        </div>
        <div className = "inventorylist">
            <div>
            {item.itemname} <br></br>
            Quantity:{item.quantity} <br></br>
            Created by: {userName.username} <br></br>
            Description: {item.description}
            </div>
        </div>
        <button onClick={fullInventory}>Full Inventory</button>
        <button onClick={myInventory}>My Inventory</button>
    </>
    )
}

export default Item
