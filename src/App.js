import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Routes, Route, Router } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Sidebar from "./components/admin/sidebar/Sidebar";
import Topbar from "./components/admin/topbar/Topbar";
import Listcompany from "./components/admin/listcompany/Listcompany";
import CreateCompany from "./components/admin/listcompany/CreateCompany";
import UpdateBusiness from "./components/admin/edit/UpdateBusiness";
import Department from "./components/admin/deparment/Department";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserHistory } from "history";
import Semester from "./components/admin/semester/Semester";
import Industry from "./components/admin/industry/Industry";
import StudentApply from "./components/admin/studentApply/StudentApply";
import { Create } from "@material-ui/icons";
export const history = createBrowserHistory();
function App() {
  return (
    // <Col>
    //   <UserAuthContextProvider history={history}>
    //     <Routes>
    //       <Route
    //         path="/home"
    //         element={
    //           <ProtectedRoute>
    //             <Home />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route path="/" element={<Login />} />
    //       <Route path="/topbar" element={<Topbar />} />
    //       <Route path="/sidebar" element={<Sidebar />} />
    //       <Route path="/listcompany" element={<Listcompany />} />
    //       <Route path="/semester" element={<Semester />} />
    //       <Route path="/industry" element={<Industry />} />
    //       <Route path="/studentapply" element={<StudentApply />} />
    //       <Route path="/department" element={<Department />} />
    //       <Route
    //         exact
    //         path="/updateBusiness/:id"
    //         element={<UpdateBusiness />}
    //       />
    //     </Routes>
    //   </UserAuthContextProvider>{" "}
    // </Col>
    <Router>
      <Topbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Sidebar />
        </Route>
        <Route path="/company">
          <Listcompany />
        </Route>
        <Route path="/studentapply">
          <StudentApply />
        </Route>
        <Route path="/department">
          <Department />
        </Route>
        <Route path="/semester">
          <Semester />
        </Route>
        <Route path="/industry">
          <Industry />
        </Route>
        <Route path="/createcompany">
          <CreateCompany />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
