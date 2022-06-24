import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Topbar from "./admin/topbar/Topbar";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import WebFont from "webfontloader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
      // console.log("Thành Công 1");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
      // console.log("Thành công");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="main">
      <div
        className="p-4 box"
        style={{
          height: 500,
          boxShadow:
            "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)",
        }}
      >
        <h2
          className="mb-3"
          style={{
            fontFamily: "Myriad Pro",
            fontWeight: "bold",
            marginTop: 10,
            textAlign: "center",
            fontSize: 40,
          }}
        >
          Login
        </h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              style={{ borderRadius: 50, height: 50, marginTop: 30 }}
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              style={{ borderRadius: 50, height: 50, marginTop: 30 }}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="primary"
              type="Submit"
              style={{
                marginTop: 20,
                height: 50,
                borderRadius: 50,
                backgroundColor: "#F26F1E",
                border: 0,
              }}
            >
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <div className="p-4 box mt-3 text-center">
          Click To Admin Pagee <Link to="/topbar">Admin</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
