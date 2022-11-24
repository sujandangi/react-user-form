import { useState } from 'react';
import "./UserList.css"
import UserListItem from './UserListItem'
 
const UserList = ({ users }) => {

    // const [usernames, setUsername] = useState(users)

    return (
        <div className="userlistcard">
            {users.map((item) => ( <UserListItem key={item.id} item={item} /> ))}
        </div>
      )
}

export default UserList


// import Task from "./Task"

// const Tasks = ({ tasks, onDelete, onToggle }) => {
//     return (
//     <>
//         {tasks.map((task) => ( <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} /> ))}
//     </>
//   )
// }

// export default Tasks