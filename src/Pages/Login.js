import { Hidden } from "@mui/material";
import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "../CSS/style3.css";

function Login() {
 
  return (
    <>
      <html
        style={{
          height: "100%",
          margin: "0",
          backgroundImage: `url("https://res.cloudinary.com/dloadmcdu/image/upload/v1669142913/poster/background_xyuqrt.jpg" )`,
          color: "#D6AD60",
          height: "100%",
          margin: "0",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <body
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dloadmcdu/image/upload/v1669142913/poster/background_xyuqrt.jpg" )`,
            color: "#D6AD60",
            height: "100%",
            margin: "0",
            backgroundPosition: "left",
            backgroundRepeat: "repeat",
            backgroundSize: "contain",
            overflow:"hidden"
          }}
        >
          <form action="/">
            <div className="sad" style={{ float: "right" }}>
              <h1>Sign In</h1>
              <br></br>
              <input
                type="text"
                name="Usid"
                placeholder="Username"
                required
                class="ask"
              />
              <br />
              <br />
              <input
                type="password"
                name="password"
                required=""
                id="id_password"
                placeholder="Password"
              />
              <br />
              <br />
              <br />
              <input
                type="checkbox"
                id="SignIn"
                name="SignIn"
                value="checkbox"
                class="bad"
              />
              <label for=" class=" bad>
                Remember Me
              </label>
              <br />
              <br />
              <br />
              <label class="a" />
              <button>
                <b>
                    Get Started
                </b>
              </button>
              <a />
              <label />
              <br />
              <p>
                <a href="#" className="want">
                  {" "}
                  Forgot password?
                </a>
              </p>
              <p>
                <Link to="/Signin" className="want">
                  New to BADAD? Sign Up Here
                </Link>
              </p>
              <br></br>
            </div>
          </form>

        </body>
      </html>
    </>
  );
}
export default Login;
