import { useState, useEffect } from "react";
import "../styles/bookList.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BookList = () => {
  let [book, setBook] = useState([]);
  let location = useLocation() //to fetch that route value
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:4000/books");
      let data = await response.json();
      setBook(data);
    };
    fetchData();
  }, [book]);
  let remove = (id, title) => {
   fetch(`http://localhost:4000/books/${id}`,{
    method:'DELETE'
   } )
   alert(`${title} will be deleted permanently`)
  };
let navigate = useNavigate('')
 let read = (id) =>{
  if(location.pathname == '/admin/book-list'){
    navigate(`/admin/book-list/${id}`)
  }else{
    navigate(`/user/book-list/${id}`)
  }
  // for(let i=0;i<book.length;i++){
  //   let ele=document.getElementsByClassName("desc")
  //   let ele1=document.getElementsByClassName("button2")
  
  //     if(ele[i].style.display=="none")
  //     {
  //       ele[i].style.display="inline"
  //       ele1[i].textContent="Read less"
  //     }
  //     else{
  //       ele[i].style.display="none"
  //       ele1[i].textContent="Read more"
  //     }   
  // }
 }

  return (
    <div className="bookList">
      <h1>Book List: {book.length}</h1>
      <div className="book_section">
        {book.map((data) => (
          <div className="info">
            <div className="image">
              <img height="200" width="150" src={data.thumbnailUrl} alt="" />
            </div>
            <div className="bookinfo">
              <h1>Title: {data.title}</h1>
              <h3>Authors: {data.authors}</h3>
              <h3>PageCount: {data.pageCount}</h3>
              <h4>Category: {data.categories}</h4>
              <p  className="desc" style={{display:"none"}}>{data.shortDescription}</p>
              </div>
              <div className="btnbook">
               {location.pathname == '/admin/book-list' &&  <button onClick={() => remove(data.id, data.title)}>
                  Remove
                </button>}
                <br />
                <button className="button2" info={data.id} onClick={()=>read(data.id)}>Read more</button>
              </div>
            
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default BookList;
