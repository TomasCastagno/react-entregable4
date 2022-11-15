import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {


  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setListUsers(res.data))
  }, []);

  const getListUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setListUsers(res.data))
  };


  const newUser = (user) => {
    axios.post('https://users-crud1.herokuapp.com/users/', user)
      .then(() => getListUsers())
      .catch(error => console.log(error.response?.data))
  };

  const [modalDelete, setModalDelete] = useState(false);


  const deleteUser = (user) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
      .then(() => getListUsers());
    setModalDelete(false)
  };

  const [selected, setSelected] = useState(null);

  const userSelected = (user) => {
    setSelected(user)
  };


  const editedUser = (user) => {
    axios.put(`https://users-crud1.herokuapp.com/users/${selected.id}/`, user)
      .then(() => getListUsers())

    setSelected(null)
  };

  return (
    <div className="App">
      <UsersForm
        newUser={newUser}
        selected={selected}
        editedUser={editedUser}
      />
      <UsersList
        listUsers={listUsers}
        deleteUser={deleteUser}
        userSelected={userSelected}
        setModalDelete={setModalDelete}
        modalDelete={modalDelete}
      />
      <footer>by Walter Tomás Castagno</footer>

    </div>
  )

}
export default App
