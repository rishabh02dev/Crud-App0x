import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3030/delete/" + id)
      .then((res) => window.location.reload)
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <Link to="/create" className="btn btn-success">
        Create Book
      </Link>
      {books.length !== 0 ? (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Publisher</th>
              <th scope="col">Book Name</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.publisher}</td>
                <td>{book.name}</td>
                <td>{book.date}</td>
                <td>
                  <Link
                    type="button"
                    className="btn btn-information btn-sm me-2"
                    to={`/update/${book.name}`}
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <Link
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="container">No Records</h1>
      )}
    </div>
  );
};

export default Books;
