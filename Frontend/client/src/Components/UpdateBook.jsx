import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [values, setValues] = useState({
    publisher: "",
    name: "",
    date: "",
  });

  const navigate = useNavigate();

  const handleSummit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3030/update" + id, values)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));

    setValues({
      publisher: "",
      name: "",
      date: "",
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3030/getrecords/" + id)
      .then((res) =>
        setValues({
          ...values,
          publisher: res.data[0].publisher,
          name: res.data[0].name,
          date: res.data[0].date,
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex  flex-column align-items-center justify-content-center mt-3">
      <h1>Update Book</h1>
      <form className="w-50" onSubmit={handleSummit}>
        <div class="mb-3 mt-3">
          <label for="publisher" class="form-label">
            Publisher
          </label>
          <input
            type="text"
            class="form-control"
            onChange={(e) =>
              setValues({ ...values, publisher: e.target.value })
            }
            id="publisher"
            value={values.publisher}
            placeholder="Enter Publisher Name"
            name="publisher"
          />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            Book Name:
          </label>
          <input
            type="text"
            class="form-control"
            value={values.name}
            id="text"
            placeholder="Enter Book's Name"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            name="name"
          />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">
            Publish Date:
          </label>
          <input
            type="date"
            values={values.date}
            class="form-control"
            id="date"
            name="date"
            onChange={(e) => setValues({ ...values, date: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
