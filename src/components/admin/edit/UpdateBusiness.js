import React, { Component } from "react";
import { useParams } from "react-router";
import "./update.css";
function UpdateBusiness() {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="title">Update Bussiness</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
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
            <div className="input-box">
              {" "}
              <span className="details">ID</span>{" "}
              <input type="text" value={id} read-only disabled />{" "}
            </div>
            <div className="input-box">
              {" "}
              <span className="details">Bussiness Name</span>{" "}
              <input type="text" placeholder="Enter Company name" required />{" "}
            </div>
            <div className="input-box">
              {" "}
              <span className="details">Website</span>{" "}
              <input type="text" placeholder="Enter Company Website" required />{" "}
            </div>
            <div className="input-box">
              {" "}
              <span className="details">Request</span>{" "}
              <input type="text" placeholder="Enter Company Request" required />{" "}
            </div>
            <div className="input-box">
              {" "}
              <span className="details">Detail</span>{" "}
              <input type="text" placeholder="Enter Company Detail" required />{" "}
            </div>
            <div className="input-box">
              {" "}
              <span className="details">Email</span>{" "}
              <input type="email" placeholder="Enter Company Email" required />{" "}
            </div>
            <div className="input-box">
              {" "}
              <span className="details">Phone Contact</span>{" "}
              <input
                type="number"
                placeholder="Enter Student number"
                required
              />{" "}
            </div>
            <div className="input-box">
              {" "}
              <span className="details">Address</span>{" "}
              <input type="text" placeholder="Enter Student Address" required />{" "}
            </div>
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="button">
            {" "}
            <input type="submit" defaultValue="Update" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default UpdateBusiness;
