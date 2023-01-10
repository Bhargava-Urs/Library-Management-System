import '../styles/addUser.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [email,setEmail]=useState("")
    let [phoneNumber,setPhNo]=useState("")
    let navigate = useNavigate()
    let handleUserSubmit = (e) =>{
        e.preventDefault()
        let data = {name,age,email,phoneNumber}
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{ "Content-Type": "application/json" },
            body:JSON.stringify(data)
        })
        alert('User Details added sucessfully....!')
        navigate('/admin/user-list')
    }
    return ( 
        <div className="addUser">
            <h1 style={{color:'black'}} >Add a New User</h1>
            <div className="information">
            <form action="" onSubmit={handleUserSubmit}>
               
               <div className="name">
                <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" type="text" />
               </div>
               <div className="age">
                <input required value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" min='1' type="number" />
               </div>
               <div className="emailid">
                <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter E-mail ID" type="email" />
               </div>
               <div className="phno">
                <input required value={phoneNumber} onChange={(e)=>setPhNo(e.target.value)} placeholder="Enter Contact Number" type="tel" minLength='10' maxLength='10' />
               </div>
               <div className="add">
                <button>Add User</button>
               </div>
            </form>
            </div>
        </div>
     );
}
 
export default AddUser;