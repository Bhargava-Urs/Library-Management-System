import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminLogin.css";
const AdminLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let naviagte = useNavigate();
  let Login = (e) => {
    e.preventDefault();
    let data = { email, password }; //data from input
    //admin validation
    if (email == "admin@gmail.com" && password == 1234) {
      naviagte("/admin/");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="adminLogin">
      <div className="form">
        <div className="h1">
          <h1>Sign In as Admin</h1>
        </div>
        <div className="form_input">
          <form onSubmit={Login}>
            <div className="email">
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                className="email"
              />
            </div>
            <div className="password">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="password"
              />
            </div>
            <button className="btn1">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
