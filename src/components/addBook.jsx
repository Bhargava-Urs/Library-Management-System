import "../styles/addBook.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBooks = () => {
  let [title, setTitle] = useState("");
  let [authors, setAuthors] = useState("");
  let [categories, setCategories] = useState("");
  let [pageCount, setPagecount] = useState("");
  let [shortDescription, setShortDescription] = useState("");
  let [longDescription, setLongDescription] = useState("");
  let [thumbnailUrl, setThumbnailUrl] = useState("");
  let navigate = useNavigate();
  let handleBookSubmit = (e) => {
    e.preventDefault();
    //data to be posted
    let data = {
      title,
      authors,
      categories,
      pageCount,
      shortDescription,
      longDescription,
      thumbnailUrl,
    };
    //posting the data to server or database
    fetch("http://localhost:4000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Book Added Successfully......!");
    navigate('/admin/book-list');
  };
  return (
    <div className="addBooks">
      <h1>Add a Book</h1>
      <div className="bookform">
        <form action="" onSubmit={handleBookSubmit}>
          <div className="title">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter Title of Book"
              type="text"
            />
          </div>
          <div className="authors">
            <input
              value={authors}
              onChange={(e) => setAuthors(e.target.value)}
              required
              placeholder="Enter Author's Name's"
              type="text"
            />
          </div>
          <div className="categories">
            <input
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              required
              placeholder="Enter Category"
              type="text"
            />
          </div>
          <div className="pageCount">
            <input
              value={pageCount}
              onChange={(e) => setPagecount(e.target.value)}
              required
              placeholder="Enter Page Count"
              type="number"
            />
          </div>
          <div className="shortDescription">
            <textarea
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Short Description"
              name=""
              id=""
              cols="45"
              rows="5"
            ></textarea>
          </div>
          <div className="longDescription">
            <textarea
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              placeholder="Long Description"
              name=""
              id=""
              cols="45"
              rows="10"
            ></textarea>
          </div>
          <div className="thumbnailUrl">
            <input
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              required
              placeholder="Image Adress"
              type="text"
            />
          </div>
          <button>Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
