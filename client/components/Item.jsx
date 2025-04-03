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

      const back = () => {
        console.log("Redirecting to inventory page")
        navigate(`/Fullinventory`);
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
        <button onClick={back}>Back</button>
    </>
    )
}

export default Item
