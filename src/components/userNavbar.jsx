import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="adminNavbar">
             <div  className="navbar">
                <div className="right">
                <img height='75' width='75' src='https://images-platform.99static.com//BwC3S-3fzGv9AL9dmV6XP-EkD0g=/0x0:1000x1000/fit-in/500x500/99designs-contests-attachments/137/137628/attachment_137628251' alt="" />
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