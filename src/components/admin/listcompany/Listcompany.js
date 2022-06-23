import React, { Component, useEffect } from "react";
import "./listcompany.css";
import axios from "axios";
import {
  createDataByPath,
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

Listcompany.propTypes = {
  onSubmit: PropTypes.func,
};
Listcompany.defaultProps = {
  onSubmit: null,
};
function Listcompany(props) {
  const [business, setBusiness] = useState(null);
  useEffect(() => {
    loadDataBussiness();
  }, []);

  async function loadDataBussiness() {
    const path = `api/v1/businesses`;
    const res = await getDataByPathTest(path, "", "");
    console.log(res);
    if (res !== null && res !== undefined && res.status === 200) {
      setBusiness(res.data);
    }
  }

  async function deleteDataBusiness(id) {
    const path = `api/v1/businesses`;
    const res = await deleteDataByPath(path, "", id);
    console.log(res);
    if (res !== null && res !== undefined && res.status === 200) {
      loadDataBussiness();
    }
  }

  async function searchDataBussiness(id) {
    const path = `api/v1/businesses/Search`;
    let data = `name=${id}`;
    if (id === "") {
      data = "";
    }
    const res = await getDataByPathTest(path, "", data);
    console.log("Search res: ", res.data);
    if (res && res.status === 200) {
      setBusiness(res.data);
    }
  }

  async function pushUpdateLayout(id) {
    history.push(`/updateBusiness/${id}`);
    window.location.reload();
  }

  // const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    // if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      console.log("Value: ", value);
      // const formValues = {
      //   searchTerm: value,
      // };
      // onSubmit(formValues);
      searchDataBussiness(value);
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
        <div className="btn-create">
          <button type="button" class="btn btn-success">
            Create Business
          </button>
        </div>
      </div>
      <div className="list-table">
        <div class="pb-20">
          <table class="data-table table stripe hover nowrap">
            <thead>
              <tr>
                <th class="table-plus datatable-nosort">No</th>
                <th>Business ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>IndustryId</th>
                <th>SemesterId</th>
                <th class="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
              {business ? (
                business.map((e, value) => {
                  return (
                    <tr>
                      <td class="table-plus">{value + 1}</td>
                      <td>{e.businessId}</td>
                      <td>{e.businessName}</td>
                      <td>{e.contactEmail} </td>
                      <td>{e.contactPhone}</td>
                      <td>{e.industryId}</td>
                      <td>{e.semesterId}</td>
                      <td>
                        <div class="dropdown">
                          <a
                            class="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                          >
                            <i class="dw dw-more"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                            {/* <a class="dropdown-item">
                              <i class="dw dw-eye"></i> View Detail
                            </a> */}

                            <a
                              class="dropdown-item"
                              onClick={() => pushUpdateLayout(e.businessId, e)}
                            >
                              <i class="dw dw-edit2"></i> View Detail
                            </a>
                            {/* <a
                              class="dropdown-item"
                              onClick={() => deleteDataBusiness(e.businessId)}
                            >
                              <i class="dw dw-delete-3"></i> Delete
                            </a> */}
                          </div>
                        </div>
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
export default Listcompany;
