import React, { useState } from "react";
import FormCreate from "./components/formCreate";
import FormEdit from "./components/formEdit";
import Listado from "./components/listado";

function App() {

  const [user, setUser] = useState()
  const [users, setUsers] = useState([])
  const [modoEdit, setModoEdit] = useState(false)
  const [id, setId] = useState("")

  const updateUser = (id, newUser) => {
    setModoEdit(false);
    setUsers(users.map(item => item.id === id ? newUser : item))
  }

  return (
    <div className="container">
      <h1>Desarrollando CRUD</h1>
      <div className="row">
        <div className="col-5">
          {modoEdit ?
            <FormEdit users={users} setUsers={setUsers} id={id} user={user} updateUser={updateUser} />
            :
            <FormCreate users={users} setUsers={setUsers} id={id} user={user} />
          }
        </div>
        <div className="col-7">
          <Listado users={users} setUsers={setUsers} setModoEdit={setModoEdit} setUser={setUser} setId={setId} />
        </div>
      </div>

    </div>
  );
}

export default App;
