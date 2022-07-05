import React from "react";
import "./createcompany.css";

function CreateCompany() {
  return (
    <div className="container" style={{ padding: "0px 40px" }}>
      <div className="title">Create Bussiness</div>
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
              <input type="text" placeholder="Enter ID Company" required />{" "}
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
            {/* <div class="input-box"> <span class="details">Request</span> <input type="text"
                            placeholder="Enter Company Request" required> </div> */}
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
            <div className="input-box">
              <label>Active</label>
              <select className="details" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div className="button">
            {" "}
            <input type="submit" defaultValue="Create" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateCompany;
