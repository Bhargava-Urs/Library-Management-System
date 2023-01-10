import AdminNavbar from "./adminNavbar";
import {Routes,Route} from 'react-router-dom'
import AdminDashboard from "./adminDashboard";
import UserList from "./userList";
import BookList from "./bookList";
import ReadBook from "./readBook";
import AddUser from "./addUser";
import AddBooks from "./addBook";
const AdminHome = () => {
    return ( 
        <div className="adminHome">
           <AdminNavbar/>
           <Routes>
           <Route path="/" element={<AdminDashboard/>} />
           <Route path="/book-list" element={<BookList/>} />
           <Route path='/user-list' element={<UserList/>} />
           <Route path="/add-user" element={<AddUser/>}/>
           <Route path='/book-list/:id' element={<ReadBook/>} />
           <Route path="/add-book" element={<AddBooks/>} />
           </Routes>
        </div>
     );
}
 
export default AdminHome;