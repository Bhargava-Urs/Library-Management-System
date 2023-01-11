import { Routes,Route } from "react-router-dom";
import UserNavbar from "./userNavbar";
import UserDashboard from "./userDashBoard";
import BookList from "./bookList";
import ReadBook from "./readBook";
const UserHome = () => {
    return ( 
        <div className="userHome">
         <UserNavbar/>
         <Routes>
            <Route path='/' element={<UserDashboard/>} />
            <Route path='/book-list' element={<BookList/>} />
           <Route path='/book-list/:id' element={<ReadBook/>} />

         </Routes>
        </div>
     );
}
 
export default UserHome;