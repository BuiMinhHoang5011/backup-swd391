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

Department.propTypes = {
  onSubmit: PropTypes.func,
};
Department.defaultProps = {
  onSubmit: null,
};
function Department(props) {
  const [department, setDepartment] = useState(null);
  useEffect(() => {
    loadDataDepartment();
  }, []);

  async function loadDataDepartment() {
    const path = `api/v1/departments`;
    const res = await getDataByPathTest(path, "", "");
    console.log(res);
    if (res !== null && res !== undefined && res.status === 200) {
      setDepartment(res.data);
    }
  }

  async function searchDataDepartment(id) {
    const path = `api/v1/departments`;
    const res = await searchDataByPath(path, "", id);
    console.log("id: ", id);
    console.log("Search res: ", res.data);
    id !== ""
      ? res.data === ""
        ? setDepartment(null)
        : setDepartment([res.data])
      : loadDataDepartment();
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
      searchDataDepartment(value);
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
                <th>Department ID</th>
                <th>Department Name</th>
              </tr>
            </thead>
            <tbody>
              {department ? (
                department.map((e, value) => {
                  return (
                    <tr>
                      <td class="table-plus">{value + 1}</td>
                      <td>{e.departmentId}</td>
                      <td>{e.departmentName}</td>
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
export default Department;
