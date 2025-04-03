import { useState, useEffect, useContext } from 'react'

function Newuser(){
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const submitHandler = () => {
            console.log(userName)
            console.log(password)
            console.log(firstName)
            console.log(lastName)
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