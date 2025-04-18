import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [values, setValues] = useState({
    publisher: "",
    name: "",
    date: "",
  });

  const navigate = useNavigate();

  const handleSummit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/create", values)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));

    setValues({
      publisher: "",
      name: "",
      date: "",
    });
  };

  return (
    <div className="d-flex  flex-column align-items-center justify-content-center mt-3">
      <h1>Add a Book</h1>
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

export default CreateBook;
