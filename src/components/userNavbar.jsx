import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="adminNavbar">
             <div className="navbar">
                <div className="right">
                    <h1>User Portal</h1>
                </div>
                <div className="left1">
                <Link to='/user/'>Dashboard</Link>
                <Link to='/user/book-list' >Book List</Link>
                </div>
                <div className="button1">
                <Link to='/'>Logout</Link>
                </div>
            </div>
        </div>
     );
}
 
export default UserNavbar;