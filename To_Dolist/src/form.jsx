import { useState } from "react";

export default function Form() {
 let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });

 let handleInputChange = (event) => {
   let fieldName = event.target.name;
   let fieldValue = event.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldValue,
    }));
   };

  return (
    <form>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="Enter your full name"
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleInputChange}
      />

      <label htmlFor="username">Username</label>
      <input
        placeholder="Enter username"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleInputChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
 
