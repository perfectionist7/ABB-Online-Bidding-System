import { useState, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import SocialLoginContainer from "../components/SocialLoginContainer";
import "./GetStarted.css";
import axios from "axios";

const GetStarted = () => {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/user";
      const { data: res } = await axios.post(url, data);
      navigate("/sign-up-success");
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  const onDontHaveAnClick = useCallback(() => {
    navigate("/home2");
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="get-started">
      <Header />
      <section className="get-started-inner">
        <div className="frame-group">
          <div className="log-in-wrapper">
            <form className="log-in" onSubmit={handleSubmit}>
              <div className="login-form-header">
                <h3 className="title5">Sign Up</h3>
                <div className="subtitle">
                  New bidders, as soon as you have submitted your information you will
                  be eligible to bid in the auction.
                </div>
              </div>
              <div className="input-container">
                <div className="label2">First Name</div>
                <div className="bar">
                  <input
                    className="text"
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={data.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-container">
                <div className="label2">Last Name</div>
                <div className="bar">
                  <input
                    className="text"
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="input-container">
                <div className="label2">Email Address</div>
                <div className="bar">
                  <input
                    className="text"
                    placeholder="hello@example.com"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="password">
                <div className="label3">
                  <div className="left-text">Password</div>
                </div>
                <div className="bar1">
                  <input
                    className="text1"
                    placeholder="●●●●●●●●●●●●●●"
                    type={showPassword ? "text" : "password"} // Toggle between text and password
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    <img 
                      src={showPassword ? "/icons.svg" : "/password-hide.svg"} 
                      alt={showPassword ? "Hide password" : "Show password"} 
                      className="password-icon"
                    />
                  </span>
                </div>
              </div>
              {error && <div className="error-message">{error}</div>}
              <button className="cta1" type="submit">
                <div className="label4">Sign Up</div>
              </button>
              <SocialLoginContainer />
              <div
                className="dont-have-an-container"
                onClick={onDontHaveAnClick}
              >
                <span>
                  <span className="dont-have-an">
                    Already have an account? 
                  </span>
                  <span className="sign-up-here"> Login here</span>
                </span>
              </div>
            </form>
          </div>
          <div className="scenescene-wireframe-sample-t">
            <img className="vector-icon" alt="" src="/vector1.svg" />
            <div className="scene-content">
              <div className="scenehome">
                <img
                  className="twisted-leaf-icon"
                  alt=""
                  src="/twisted-leaf.svg"
                />
                {/* Add other images and elements as needed */}
              </div>
              <img className="scene-content-child" alt="" src="/group-2.svg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
