import { useState, useEffect, useContext } from 'react'

function Userlist(){
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUsers(data);
        })
      }, []);

    return (
      <>
        <div>
          Current Inventory List
        </div>
        <div className = "inventorylist">
          {users.map(user => <div>
                                {user.firstname} <br/>
                                {user.lastname} <br/>
                                {user.username} <br/>
                                {user.password} 
                              </div>)}
        </div>
      </>
    )

}


export default Userlist