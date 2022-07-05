import React from "react";
import "./createstudentapply.css";

function CreateStudentApply() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Student</h1>
      <form className="newUserForm">
        <div className="productUpload">
          <img
            src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="productUploadImg"
          />
          <label htmlFor="file">
            <publish></publish>
          </label>
          <input type="file" id="file" />
        </div>
        <div className="newUserItem">
          <label>ID Student</label>
          <input type="text" placeholder />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" defaultValue="male" />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              defaultValue="female"
            />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" defaultValue="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className="newUserButton">Create</button>
    </div>
  );
}
export default CreateStudentApply;
