import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edituser(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/users/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            const filtered = data.find(user => String(user.id) === String(id))
            console.log(data)
            setUserName(filtered.username || '');
            setPassword(filtered.password || '');
            setFirstName(filtered.firstname) || '';
            setLastName(filtered.lastname || '');
        })
    }, [id])

    const submitHandler = async () => {
            const data = {
                firstname: String(firstName),
                lastname: String(lastName),
                username: String(userName),
                password: String(password)
            };
            console.log(data)
            const response = await fetch(`http://localhost:3000/users/${id}`, {
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
            <h1>Edit Profile</h1>
            <div>
                <input 
                id="userid"
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(currentvalue) => setUserName(currentvalue.target.value)}/>
            </div>

            <div>
                <input 
                id="password"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(currentvalue) => setPassword(currentvalue.target.value)}/>
            </div>
            

            <div>
                <input 
                id="First Name"
                type="text"
                placeholder="FirstName"
                value={firstName}
                onChange={(currentvalue) => setFirstName(currentvalue.target.value)}/>
            </div>

            <div>
                <input 
                id="Last Name"
                type="text"
                placeholder="LastName"
                value={lastName}
                onChange={(currentvalue) => setLastName(currentvalue.target.value)}/>
            </div>

            <div>
                <button onClick={submitHandler}>Update Account</button>
            </div>
        </>
    )

}


export default Edituser