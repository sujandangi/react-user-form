import "./UserListItem.css"

const UserListItem = ({ item, onDelete }) => {
  return (
    <div className="userlistitem">
        {item.name} is {item.age} Years old.
        {" "}
        {/* <button onClick={onDelete}>x</button> */}
    </div>
  );
};

export default UserListItem;