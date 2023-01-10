import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin = () => {
let navigate  = useNavigate();
let Login = () =>{
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
             
              <input required 
                type="email"
                placeholder="Email Address"
                className="email"
              />
            </div>
            <div className="password">
              
              <input
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