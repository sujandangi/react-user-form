import './App.css';
import UserInput from './components/UserInput';
import UserList from './components/UserList';
import {useState} from 'react'



function App() {

  // let usersDb = [
  //   {
  //       id: 1,
  //       name: 'Bruce',
  //       age: 30,
  //   },
  //   {
  //       id: 2,
  //       name: 'Charlie',
  //       age: 40,
  //   },
  // ]
  
  let [users, setUsers] = useState([]) //useState(usersDb)

  const onAdd = (name, age) => {
    
    const newUser = {
      id: users.length + 1,
      name: name,
      age: age,
    }
  
    users = [...users, newUser];
    console.log(users)
    setUsers(users)
  }

  return (
    <div className="App">
      <UserInput onAdd={onAdd} />
      <UserList users={users} />
    </div>
  );
}

export default App;
