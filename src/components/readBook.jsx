import { useState,useEffect } from "react";
import { Params, useParams } from "react-router-dom";
const ReadBook = () => {
   
    let [book,setBook]=useState([])
    let params = useParams()//used for ftching the required id
    useEffect( () =>{
        let fetchData = async () => {
            let response = await fetch(`http://localhost:4000/books/${params.id}`);
            let data = await response.json();
            setBook(data);
          };
          fetchData();
        }, []);
    
    return ( 
        <div className="readBook">
            <h1>Read Book</h1>
            <h2 style={{fontWeight:"bold"}}>{book.title}</h2>
            <p> <span style={{fontWeight:"bold"}} >Short Description:</span>  <br />
              {book.shortDescription}
            </p>
            <p > <span  style={{fontWeight:"bold"}}  >Long Description:</span>  <br />
              {book.longDescription}
            </p>
        </div>
     );
}
 
export default ReadBook;