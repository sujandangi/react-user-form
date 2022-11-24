import React, { Component, useState } from "react";
import Button from "./Button";
import "./UserInput.css";
import ErrorModal from './ErrorModal';

const UserInput = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

 
//Submission of form data
  const onSubmit = (e) => {
    e.preventDefault();

    //Input validation [alternatively use required in HTML]
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        errorTitle: 'Invalid Input',
        errorMessage: 'Please enter a valid name and age'
      });
      return;
    }

    if(+age < 1){
      setError({
        errorTitle: 'Invalid Age',
        errorMessage: 'Age should be more than 1'
      });
        return;
    }
    console.log("Clicked");
    console.log(name, age);

    onAdd(name, age); //sending data name and age to parent

    setName("")
    setAge("")
  };

  const handleOnConfirm = () => {
    setError(null)
  }

  return (
    <>
    {/* Conditionally render errorModal */}
    
    { error && <ErrorModal errorTitle={error.errorTitle} errorMessage={error.errorMessage} onConfirm={handleOnConfirm} />}

    <form onSubmit={onSubmit}>
      <div className="userinputcard">
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // required
        />
        <br />
        <label>Age (Years)</label>
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          // required
        />
        <br />

        <button type="submit" value="Add User" className="submitbtn">Add User</button>
      </div>
    </form>
    </>
  );
};

export default UserInput;
