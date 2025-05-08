import { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5
  });

  const handleInputChange = (event) => {
    setFormData((currData) => {
      return {
        ...currData,
        [event.target.name]: event.target.value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      remarks: "",
      rating: 5
    });
  };

  return (
    <div>
      <h4>Give a Comment!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          id="Username"
        />
        <br /><br /><br />

        <label htmlFor="Remarks">Remarks</label>
        <textarea
          name="remarks"
          value={formData.remarks}
          placeholder="add few remarks"
          onChange={handleInputChange}
          id="Remarks"
        />
        <br /><br /><br />

        <label htmlFor="Rating">Rating</label>
        <input
          placeholder="rating"
          type="number"
          name="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          id="Rating"
        />
        <br /><br /><br />

        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
