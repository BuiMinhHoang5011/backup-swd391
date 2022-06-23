import React, { Component, useEffect } from "react";
import axios from "axios";
import {
  deleteDataByPath,
  getDataByPathTest,
  searchDataByPath,
} from "../../../service/data";
import { useState } from "react";
import useModal from "../../../hook/useModal";
import Modal from "../../modal/modal";
import { history } from "../../../App";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useRef } from "react";
import "./semester.css";

Semester.propTypes = {
  onSubmit: PropTypes.func,
};
Semester.defaultProps = {
  onSubmit: null,
};
function Semester(props) {
  const [semesters, setSemester] = useState(null);
  useEffect(() => {
    loadDataSemester();
  }, []);

  async function loadDataSemester() {
    const path = `api/v1/semesters`;
    const res = await getDataByPathTest(path, "", "");
    console.log(res);
    if (res !== null && res !== undefined && res.status === 200) {
      setSemester(res.data);
    }
  }

  async function searchDataSemester(id) {
    const path = `api/v1/semesters`;
    const res = await searchDataByPath(path, "", id);
    console.log("id: ", id);
    console.log("Search res: ", res.data);
    id !== ""
      ? res.data === ""
        ? setSemester(null)
        : setSemester([res.data])
      : loadDataSemester();
  }

  async function pushUpdateLayout(id) {
    history.push(`/updateBusiness/${id}`);
    window.location.reload();
  }

  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      console.log("Value: ", value);
      searchDataSemester(value);
    }, 300);
  }
  return (
    <div className="listcompany">
      <div
        className="col-xs-4 col-sm-4 col-md-4 col-lg-4 container-search"
        style={{ width: "100%" }}
      >
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="Type to search"
            style={{ fontWeight: 500 }}
          />
          <a className="search-btn" href="#">
            <i className="fas fa-search" />
          </a>
        </div>
        <div className="btn-create"></div>
      </div>
      <div className="list-table">
        <div class="pb-20">
          <table class="data-table table stripe hover nowrap">
            <thead>
              <tr>
                <th class="table-plus datatable-nosort">No</th>
                <th>SemesterID</th>
                <th>Semester Name</th>
                <th>StartDate</th>
                <th>EndDate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {semesters ? (
                semesters.map((e, value) => {
                  return (
                    <tr className="box-status">
                      <td class="table-plus">{value + 1}</td>
                      <td>{e.semesterId}</td>
                      <td>{e.semesterName}</td>
                      <td>{e.startDate} </td>
                      <td>{e.endDate}</td>
                      <td>
                        <div className="color-box">{e.statusId}</div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Semester;
