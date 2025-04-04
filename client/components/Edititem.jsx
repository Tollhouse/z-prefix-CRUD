import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edititem(){
    const [itemname, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const {id} = useParams();
    const userid = localStorage.getItem('myid')

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/item/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            const filtered = data.find(item => String(item.userid) === String(id))
            console.log(data)
            setItemName(filtered.itemname || '');
            setDescription(filtered.description || '');
            setQuantity(filtered.quantity) || '';
        })
    }, [id])

    const submitHandler = async () => {
            const data = {
                itemname: String(itemname),
                description: String(description),
                quantity: Number(quantity)
            };
            console.log(data)
            const response = await fetch(`http://localhost:3000/item/${id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(response.ok){
                console.log(response)
                navigate(`/Myinventory/${id}`);
            }else{
                console.log('Failed')
            }
    }

    return (
        <>
            <h1>Edit Item</h1>
            <div>
                <input 
                id="itemid"
                type="text"
                placeholder="Item Name"
                value={itemname}
                onChange={(currentvalue) => setItemName(currentvalue.target.value)}/>
            </div>

            <div>
                <input 
                id="description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(currentvalue) => setDescription(currentvalue.target.value)}/>
            </div>
            

            <div>
                <input 
                id="quantity"
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(currentvalue) => setQuantity(currentvalue.target.value)}/>
            </div>

            <div>
                <button onClick={submitHandler}>Update Item</button>
            </div>
        </>
    )

}


export default Edititem