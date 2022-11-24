import { useState } from 'react';
import "./UserList.css"
import UserListItem from './UserListItem'
 
const UserList = ({ users }) => {

    // const [usernames, setUsername] = useState(users)

    return (
        <div className="userlistcard">
            {(users.length != 0) ? 
            users.map((item) => ( <UserListItem key={item.id} item={item} /> )) : 
            "No users. Please add."}
        </div>
      )
}

export default UserList
