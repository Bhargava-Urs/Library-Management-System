import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
import { useState,useEffect } from "react";
const UserLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
let navigate  = useNavigate();
let Login = (e) =>{
  e.preventDefault();
  let data = { email, password }; //data from input
  //user validation
  if (email == "user@gmail.com" && password == 7896) {
    navigate("/admin/");
  } else {
    alert("Invalid Credentials");
  }
  navigate('/user/')
}

    return ( 
        <div className="userLogin">
      <div className="form">
        <div className="h1">
        <h1>Sign In as User</h1>
        </div>
        <div className="form_input">
          <form onSubmit = {Login} >
            <div className="email">
             
              <input required  value={email} onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                className="email"
              />
            </div>
            <div className="password">
              
              <input value={password} onChange={(e)=>setPassword(e.target.value)}
                type="password" required 
                placeholder="Enter Password"
                className="password"
              />
            </div>
            <button className="btn" >Login</button>
          </form>
        </div>
      </div>
    </div>
     );
}
 
export default UserLogin;