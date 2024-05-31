import React from "react";
import { ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

function Helo(){
    return (
      <>
        <body
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dloadmcdu/image/upload/v1669142913/poster/background_xyuqrt.jpg" )`,
            overflow: "hidden",
            backgroundSize:"contain",
            backgroundRepeat:"repeat"
          }}
        >
          <div className="d">
            <div className="sadd">
              <h1>Sign up</h1>
              <br />
              <div className="hello">
                <br />
                <form action="/login">
                  {/* <h1>Hello</h1> */}
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                    required
                  />
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    id="mname"
                    name="mname"
                    placeholder="Middle Name"
                  />
                  <br />
                  <br />
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Last Name"
                    required
                  />
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    id="psw"
                    required
                  />
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="password"
                    placeholder="Repeat Password"
                    name="psw"
                    id="psw"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="number"
                    placeholder="Enter Age"
                    name="number"
                    id="number"
                    required
                    className="wanted"
                  />
                  &nbsp;&nbsp;&nbsp;
                  <label>Gender</label>
                  <select name="Gender" id="gen">
                    {" "}
                    &nbsp;&nbsp;
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="t">Transgender</option>
                    <option value="o">Others</option>
                  </select>
                  <br />
                  <br />
                  <br />
                  <br />
                  <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    value="chb"
                    required
                  />
                  <label for="checkbox">
                    <b>
                      {" "}
                      By creating an account you agree to our{" "}
                      <a href="#" className="want">
                        {" "}
                        Terms and Privacy
                      </a>
                    </b>
                  </label>
                  <br />
                  <br />
                  <button type="submit">
                    <b>Register</b>
                  </button>
                  <Link to="/login">
                    <h5 className="want">Already have an account?</h5>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </body>
      </>
    );
}

export default Helo;

                      
            
                    
           
               
       
            {/* <input type="text" id="fname" name="fname" placeholder="First Name" required /> */}
            {/* <input type="text" id="mname" name="mname" placeholder="Middle Name" /><br /><br />            */}
             // <button type="submit"><b><a href="New login stream.html" class="ss"> Register</a></b></button>
            //     <a href="New login stream.html" class="sd" style="text-decoration:None;"><h5>Already have an account?</h5></a>