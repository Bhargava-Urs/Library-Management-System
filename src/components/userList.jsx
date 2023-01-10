import { useState,useEffect } from "react";
import '../styles/userList.css'
const UserList = () => {
    let [user,setUser]=useState([])
    useEffect( () =>{
        let fetchData = async () =>{
            let response = await fetch('http://localhost:4000/users')
            let data = await response.json()
            setUser(data)
        }
        fetchData() 
    } ,[])
    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="userInfo">
            {
                user.map( (data) =>(
                    <div className="user">
                      <h2>Name: {data.name}</h2>
                      <h3>Email-id: {data.email}</h3>
                      <h3>Ph-No: {data.phoneNumber}</h3>
                      <h4>Age: {data.age}</h4>
                    </div>
                ) )
            }
        </div>
        </div>
     );
}
 
export default UserList;