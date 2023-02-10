import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";

const BASE_URL = "https://users-crud.academlo.tech/";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}users/`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
<ModalForm/>
      <UsersList users={users} />
    </div>
  );
}

export default App;
