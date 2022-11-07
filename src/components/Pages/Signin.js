import Axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Signin.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [invalidCreds, setinvalidCreds] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
      navigate("../", { replace: true });
    }
  }, []);

  const signIn = (event) => {
    event.preventDefault();
    // email: "kunjani@gmail.com",
    // password: "12345678",
    Axios.post(
      "https://hiring-stackroots-server.herokuapp.com/auth/signin/user",
      {
        email: email,
        password: password,
      }
    )
      .then((response) => {
        // console.log(response.data.error,8998);

        if (response.data.isError === false || response.data.error === false) {
          setinvalidCreds(false);
          localStorage.setItem("user", JSON.stringify(response.data.data.user));
          navigate("../", { replace: true });
        } else {
          setinvalidCreds(true);
        }
      })

      .catch(function (error) {
        // console.warn(error,88);
        if (error.response && error.response.status === 400) {
          setinvalidCreds(true);
        }

      });
  };

  const handleInputEmail = (event) => {
    setemail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setpassword(event.target.value);
  };

  return (
    <>
      <div className="inner h-100 ">
        <div className="item">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Form onSubmit={signIn} className="form">
                <div className="imgContainer">
                  <img
                    src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                    alt="Avatar"
                    className="avatar m-4"
                  />
                </div>

                <input
                  type="email"
                  className="input mb-3"
                  required
                  placeholder="Enter Email"
                  onChange={handleInputEmail}
                />
                <input
                  type="password"
                  className="input mb-3"
                  required
                  placeholder="Password"
                  onChange={handleInputPassword}
                />
                {/* <div className="checkbox ">
                  <input type="checkbox" id='check' checked="checked" />
                  <label className='label m-2' htmlFor="check">Remember me</label>
                </div> */}
                {invalidCreds && (
                  <div className="invalid-creds">Invalid Credentials</div>
                )}
                <Button className="primary w-100" type="submit">
                  Sign In
                </Button>

                <span className="psw">
                  Forgot <a href="#">password?</a>
                </span>
                <br />
                <br />
                <span className="signupFree">
                  Don't have an Account? <a href="/signup">Sign Up for Free</a>
                </span>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signin;
