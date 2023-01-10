import { Link } from "react-router-dom";
import "../styles/landingpage.css";
const LandingPage = () => {
  return (
    <div className="landingpage">
      <div className="selectLoginType">
        <h1 className='h1'>Library Management System</h1>
        <div className="main">
          <div className="left">
            <img src="images/adminlogin.jpg" alt="" />
            <br />
            <Link className="link1" to="/admin-login">
              Admin Login
            </Link>
          </div>
          <div className="left">
            <img src="images/userlogin.jpg" alt="" />
            <br />
            <Link className="link2" to="/user-login">
              User Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
