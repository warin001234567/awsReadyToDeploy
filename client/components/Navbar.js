import React, { useState } from "react";
import Link from "next/link";
import { Nav, Form, FormControl, Alert } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Axios from "axios";

const Navbar = (props) => {
  const { buttonLabel, className } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showSignupAlert, setShowSignupAlert] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [signInModal, setSignInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const toggleSignIn = () => setSignInModal(!signInModal);

  const toggleSignUp = () => setSignUpModal(!signUpModal);

  return (
    <div>
      <Nav
        className={
          "solid-nav pt-3 navbar navbar-expand-lg justify-content-between"
        }
        style={{ position: "fixed", width: "100%", zIndex: 10 }}
      >
        <Link href="./">
          <a class="navbar-brand m-0 pl-3">
            <img
              id="logo"
              src="../static/logos/logo.png"
              style={{ width: "60%" }}
            />
          </a>
        </Link>
        <Form inline className=" my-2 my-lg-0" id="login-cont">
          <a
            id="signinbtn"
            className="mr-4 text-white"
            onClick={toggleSignIn}
            style={{ cursor: "pointer" }}
          >
            {" "}
            SIGN IN
          </a>

          <a
            id="signupbtn"
            className="mr-3 text-white"
            onClick={toggleSignUp}
            style={{ cursor: "pointer" }}
          >
            SIGN UP
          </a>
          <FormControl
            type="text"
            aria-label="Search"
            className="mr-2 myform pl-2 pb-1"
            style={{
              height: "5%",
              width: "13vw",
              borderRadius: "45px / 45px",
            }}
          />
          <i
            className="fa fa-search fa-sm m-0"
            style={{ color: "white", cursor: "pointer" }}
            aria-hidden="true"
          ></i>
        </Form>
      </Nav>
      <Modal isOpen={signInModal} toggle={toggleSignIn}>
        <ModalHeader toggle={toggleSignIn}>SIGN IN</ModalHeader>
        <ModalBody>
          {showLoginAlert ? (
            <Alert
              variant="danger"
              onClose={() => setShowLoginAlert(false)}
              dismissible
            >
              <p>Invalid Username or Password</p>
            </Alert>
          ) : (
            <></>
          )}
          <Form
            className="needs-validation"
            novalidate
            name="signInForm"
            onsubmit="signInCheck()"
          >
            <div className="sign-in-htm">
              <div className="group">
                <label
                  for="validationCustom01"
                  className="label"
                  style={{ fontSize: "80%" }}
                >
                  USERNAME
                </label>
                <input
                  name="id"
                  type="text"
                  className="form-control input"
                  id="validationCustom01 user"
                  placeholder="Username"
                  required
                  onChange={(value) => {
                    setUsername(value.target.value);
                  }}
                />
              </div>

              <div className="group">
                <label
                  for="validationCustom02"
                  className="label"
                  style={{ fontSize: "80%" }}
                >
                  PASSWORD
                </label>
                <input
                  name="password"
                  type="password"
                  data-type="password"
                  className="form-control input"
                  id="validationCustom02 pass"
                  placeholder="Password"
                  onChange={(value) => setPassword(value.target.value)}
                  required
                />
              </div>

              <div className="group"></div>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="button"
            onClick={() => {
              signinHandler();
            }}
            type="button"
            style={{ width: "100%" }}
          >
            SIGN IN
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={signUpModal} toggle={toggleSignUp} className={className}>
        <ModalHeader toggle={toggleSignUp}>SIGN UP</ModalHeader>
        {showSignupAlert ? (
          <Alert
            variant="danger"
            onClose={() => setShowSignupAlert(false)}
            dismissible
          >
            <p>Password not match</p>
          </Alert>
        ) : (
          <></>
        )}
        <ModalBody>
          <Form
            className="needs-validation"
            novalidate
            name="signInForm"
            onsubmit="signInCheck()"
          >
            <div className="sign-in-htm">
              <div className="group">
                <label
                  for="validationCustom01"
                  className="label"
                  style={{ fontSize: "80%" }}
                >
                  USERNAME
                </label>
                <input
                  name="id"
                  type="text"
                  className="form-control input"
                  id="validationCustom01 user"
                  placeholder="Username"
                  onChange={(value) => setUsername(value.target.value)}
                  required
                />
              </div>

              <div className="group">
                <label
                  for="validationCustom02"
                  className="label"
                  style={{ fontSize: "80%" }}
                >
                  PASSWORD
                </label>
                <input
                  name="password"
                  type="password"
                  data-type="password"
                  className="form-control input"
                  id="validationCustom02 pass"
                  placeholder="Password"
                  onChange={(value) => setPassword(value.target.value)}
                  required
                />
              </div>

              <div className="group">
                <label
                  for="validationCustom02"
                  className="label"
                  style={{ fontSize: "80%" }}
                >
                  CONFIRM PASSWORD
                </label>
                <input
                  name="password"
                  type="password"
                  data-type="password"
                  className="form-control input"
                  id="validationCustom02 pass"
                  placeholder="Confirm Password"
                  onChange={(value) => setConfirmPassword(value.target.value)}
                  required
                />
              </div>

              <div className="group"></div>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            class="button"
            type="button"
            style={{ width: "100%" }}
            onClick={() => {
              signupHandler();
            }}
          >
            SIGN UP
          </Button>
        </ModalFooter>
      </Modal>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: "Roboto Condensed", sans-serif;
        }
        .myform {
          background: rgba(255, 255, 255, 0);
          color: white;
          border: 2px solid white;
        }
        .myform::placeholder {
          color: white;
          font-size: 1em;
        }
        .solid-nav {
          background-color: rgba(0, 0, 0, 1);
          /*transition: background-color 1s ease 0s;*/
        }
        .tabs [class^="tab"] label,
        .tabs [class*=" tab"] label {
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          display: block;
          font-size: 1.1em;
          font-weight: 300;
          line-height: 0.1em;
          padding: 2rem 0;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
