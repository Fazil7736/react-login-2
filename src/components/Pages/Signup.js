import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [existingAccount, setexistingAccount] = useState(false);
  const [success, setsuccess] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fullName, setfullName] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
      navigate("../", { replace: true });
    }
  }, []);

  const handleInputEmail = (event) => {
    setemail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setpassword(event.target.value);
  };

  const handleInputName = (event) => {
    setfullName(event.target.value);
  };
  const signUp = (event) => {
    event.preventDefault();
    Axios.post(
      "https://hiring-stackroots-server.herokuapp.com/auth/signup/user",
      {
        fullname: fullName,
        email: email,
        password: password,
      }
    )
      .then((response) => {
        console.log(response);
        if (response.data) {
          if (response.data.isError === false) {
            setsuccess(true);
            setexistingAccount(false);
            setTimeout(() => {
                navigate("../signin", { replace: false });

            }, 1000);
          } else {
            setsuccess(false);

            setexistingAccount(true);
          }
        } else {
        }
      })

      .catch(function (error) {
        console.warn(error.response.data);
      });
  };
  return (
    <>
      <div className="inner h-100">
        <div className="item">
          <div className="container">
            <div className="Col-lg-4 col-md-6 col-sm-12">
              <Form onSubmit={signUp} className="form">
                <div className="imgContainer">
                  <img
                    src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                    alt="Avatar"
                    className="avatar m-3"
                  />
                </div>

                <input
                  type="text"
                  className="input mb-3"
                  required
                  placeholder="Full Name"
                  onChange={handleInputName}
                />
                <input
                  type="email"
                  className="input mb-3"
                  required
                  placeholder="Email"
                  onChange={handleInputEmail}
                />
                <input
                  type="password"
                  className="input mb-3"
                  required
                  placeholder="Password"
                  onChange={handleInputPassword}
                />
                
                {existingAccount && (
                  <div className="invalid-creds">
                    Account with this email already exists
                  </div>
                )}

                {success && (
                  <div className="success-creds">
                    Registration Successfull. Please sign in
                  </div>
                )}
                <Button className="primary w-100" type="submit">
                  Sign Up
                </Button>

                <span className="signupFree">
                  Already have an Account? <a href="/signin">Sign In Now</a>
                </span>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
