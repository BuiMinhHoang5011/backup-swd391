import React from "react";
import { Link } from "react-router-dom";
import "./business.css";
import { Person, Apartment, HowToReg, Work } from "@material-ui/icons";

function Business() {
  return (
    <div className="main-warapper">
      <div className="topbarCompany">
        <div className="topbarWrapperCompany">
          <div className="topLeftCompany">
            <span className="logo">Business Home</span>
          </div>
        </div>
      </div>
      <div className="sidebarCompany">
        <div className="sidebarWrapperCompany">
          <div className="sidebarMenuCompany">
            <ul className="sidebarListCompany">
              <Link to="/jobpost" className="link">
                <li className="sidebarListItemCompany">
                  <HowToReg className="sidebarIcon" />
                  Profile
                </li>
              </Link>
              <Link to="/#" className="link">
                <li className="sidebarListItemCompany">
                  <Person className="sidebarIcon" />
                  Student Apply
                </li>
              </Link>
              <Link to="/#" className="link">
                <li className="sidebarListItemCompany">
                  <Work className="sidebarIcon" />
                  Job Post
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
