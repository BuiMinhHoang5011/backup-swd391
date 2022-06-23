import React, { Component } from "react";
import Listcompany from "../listcompany/Listcompany";
import Industry from "../industry/Industry";
import { Routes, Route } from "react-router-dom";
import "./sidebar.css";
import {
  Person,
  Timeline,
  BarChart,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Apartment,
  Bookmark,
  Category,
  KeyboardBackspace,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import UpdateBusiness from "../edit/UpdateBusiness";
import StudentApply from "../studentApply/StudentApply";
import Department from "../deparment/Department";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <Link to="/listcompany" className="link">
                <li className="sidebarListItem">
                  <Apartment className="sidebarIcon" />
                  Company Home
                </li>
              </Link>
              <Link to="/studentapply" className="link">
                <li className="sidebarListItem">
                  <Person className="sidebarIcon" />
                  Student Apply
                </li>
              </Link>
              <li className="sidebarListItem">
                <Bookmark className="sidebarIcon" />
                Specialization
              </li>
              <Link to="/semester" className="link">
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Semester
                </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <Link to="/industry" className="link">
                <li className="sidebarListItem">
                  <Category className="sidebarIcon" />
                  Industry
                </li>
              </Link>
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            {/* <h3 className="sidebarTitle">Staff</h3> */}
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Manage
              </li>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <KeyboardBackspace className="sidebarIcon" />
                Logout
              </li>
            </ul>
          </div>
        </div>
        <div className="viewList">
          {/* <Listcompany /> */}
          {/* <Industry /> */}
          {/* <StudentApply /> */}
          <Department />
        </div>
      </div>
    );
  }
}
export default Sidebar;
