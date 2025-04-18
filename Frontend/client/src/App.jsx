import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./Components/Books";
import CreateBook from "./Components/CreateBook";
import UpdateBook from "./Components/UpdateBook";
import Nav from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />}></Route>
        <Route path="/create" element={<CreateBook />}></Route>
        <Route path="/update/:id" element={<UpdateBook />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
