import { useState, useEffect, useContext } from 'react'

function Newuser(){
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
            console.log(userID)
            console.log(password)
        }
    };

    const newUser = () => {
        console.log('Redirecting to user reg...');
    };

    return (
        <>
            <h1>Login</h1>
            <div>
                <input 
                id="userid"
                type="text"
                placeholder="Username"
                value={userID}
                onChange={(currentvalue) => setUserID(currentvalue.target.value)}/>

                <input 
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(currentvalue) => setPassword(currentvalue.target.value)}/>
                
                <button onClick={loginHandler}>Log In</button>
            </div>
            <div>
                <button onClick={newUser}>New User?</button>
            </div>
        </>
    )




export default Newuser