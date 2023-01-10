import { Link } from "react-router-dom";
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="navbar">
                <div className="right">
                    <h1>Admin Portal</h1>
                </div>
                <div className="left1">
                    <Link to='/admin/'>Dashboard</Link>
                 <Link to='/admin/add-book' >Add Books</Link>
                 <Link to='/admin/add-user'>Add Users</Link>
                 <Link to='/admin/book-list' >Book List</Link>
                 <Link to= '/admin/user-list'>User List</Link>
                </div>
                <div className="button1">
                <Link to='/'>Logout</Link>
                </div>
            </div>
        </div>
     );
}
 
export default AdminNavbar;