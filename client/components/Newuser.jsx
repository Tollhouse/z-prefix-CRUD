import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

function Newuser(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();

    const submitHandler = async () => {
            const data = {
                firstname: String(firstName),
                lastname: String(lastName),
                username: String(userName),
                password: String(password)
            };
            console.log(data)
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(response.ok){
                console.log(response)
                navigate('/');
            }else{
                console.log('Failed')
            }
    }

    const newUser = () => {
        console.log('Redirecting to user reg...');
    };

    return (
        <>
            <h1>Sign Up</h1>
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
                <button onClick={submitHandler}>Create Account</button>
            </div>
        </>
    )

}


export default Newuser