import { useState, useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import SocialLoginContainer from "../components/SocialLoginContainer";
import "./Home2.css";
import axios from "axios";

const Home2 = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/home1";
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status < 500) {
        setError(error.response.data.message);
      }
    }
  };

  const onCTAClick = useCallback(() => {
    navigate("/home1");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/get-started");
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="home">
      <Header />
      <section className="home-inner">
        <div className="frame-group">
          <div className="log-in-wrapper">
            <form className="log-in" onSubmit={handleSubmit}>
              <div className="login-form-header">
                <h3 className="title5">Login</h3>
                <div className="subtitle">
                  Welcome back. Enter your credentials to access your account
                </div>
              </div>
              <div className="email-input-container">
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
                <div className="password">
                  <div className="label3">
                    <div className="left-text">Password</div>
                    <div className="right-text">Forgot Password</div>
                  </div>
                  <div className="bar1">
                  <input
                    className="text1"
                    placeholder="●●●●●●●●●●●●●●"
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                  />
                  <img
                    className="password-icon"
                    alt="Toggle Password Visibility"
                    src={passwordVisible ? "/icons.svg" : "/password-hide.svg"}
                    onClick={togglePasswordVisibility}
                  />
                  </div>
                </div>
                {error && <div className="error-message">{error}</div>}
              </div>
              <div className="remember-me-container">
                <div className="remember-me-checkbox">
                  <input className="checkbox-icon" type="checkbox" />
                </div>
                <div className="keep-me-signed">Keep me signed in</div>
              </div>
              <button className="cta1" type="submit">
                <div className="label4">Continue</div>
              </button>
              <SocialLoginContainer />
              <div
                className="dont-have-an-container"
                onClick={onDontHaveAnClick}
              >
                <span>
                  <span className="dont-have-an">
                    Don’t have an Account?
                  </span>
                  <span className="sign-up-here"> Sign up here</span>
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
                <img className="fill-16-icon" alt="" src="/fill-16.svg" />
                <img className="leaf-icon" alt="" src="/leaf.svg" />
                <img className="fill-10-icon" alt="" src="/fill-10.svg" />
                <img
                  className="leave-the-leaf"
                  alt=""
                  src="/leave-the-leaf.svg"
                />
                <img
                  className="clip-path-group"
                  alt=""
                  src="/clip-path-group.svg"
                />
                <div className="mobile3">
                  <img className="container-icon" alt="" src="/container.svg" />
                  <img className="touch-icon" alt="" src="/touch.svg" />
                  <img className="camera-icon" alt="" src="/camera.svg" />
                  <img className="row-icon" alt="" src="/row@2x.png" />
                  <img className="row-2-icon" alt="" src="/row-2@2x.png" />
                  <img className="row-3-icon" alt="" src="/row-3@2x.png" />
                  <img className="row-4-icon" alt="" src="/row-4@2x.png" />
                </div>
                <div className="mobile3-2">
                  <img className="group-icon" alt="" src="/group.svg" />
                  <img
                    className="container-2-icon"
                    alt=""
                    src="/container-2.svg"
                  />
                  <img className="touch-2-icon" alt="" src="/touch-2.svg" />
                  <img className="camera-2-icon" alt="" src="/camera-2.svg" />
                  <img className="row-5-icon" alt="" src="/row-5@2x.png" />
                  <img className="row-6-icon" alt="" src="/row-6@2x.png" />
                  <img className="row-7-icon" alt="" src="/row-7@2x.png" />
                  <img className="row-8-icon" alt="" src="/row-8@2x.png" />
                </div>
                <div className="web">
                  <img
                    className="container-icon"
                    alt=""
                    src="/container-5.svg"
                  />
                  <img
                    className="background-9-icon"
                    alt=""
                    src="/background-9.svg"
                  />
                  <img
                    className="profile-info-icon"
                    loading="lazy"
                    alt=""
                    src="/profile-info.svg"
                  />
                  <img className="header-icon" alt="" src="/header.svg" />
                  <img className="buttons-icon" alt="" src="/buttons.svg" />
                  <img
                    className="components-icon"
                    alt=""
                    src="/components.svg"
                  />
                  <img
                    className="row-9-icon"
                    loading="lazy"
                    alt=""
                    src="/row-9@2x.png"
                  />
                  <img
                    className="row-10-icon"
                    loading="lazy"
                    alt=""
                    src="/row-10@2x.png"
                  />
                  <img
                    className="row-11-icon"
                    loading="lazy"
                    alt=""
                    src="/row-11@2x.png"
                  />
                  <img
                    className="row-12-icon"
                    loading="lazy"
                    alt=""
                    src="/row-12@2x.png"
                  />
                  <img
                    className="row-13-icon"
                    loading="lazy"
                    alt=""
                    src="/row-13@2x.png"
                  />
                  <img
                    className="row-14-icon"
                    loading="lazy"
                    alt=""
                    src="/row-14@2x.png"
                  />
                </div>
                <img className="fill-1-icon" alt="" src="/fill-1.svg" />
                <img
                  className="fill-20-icon"
                  loading="lazy"
                  alt=""
                  src="/fill-20.svg"
                />
                <img className="plant-icon" alt="" src="/plant.svg" />
                <img
                  className="graph-icon"
                  loading="lazy"
                  alt=""
                  src="/graph.svg"
                />
                <img
                  className="pie-chart-icon"
                  loading="lazy"
                  alt=""
                  src="/pie-chart.svg"
                />
                <img
                  className="chart-icon"
                  loading="lazy"
                  alt=""
                  src="/chart.svg"
                />
                <img
                  className="chart-2-icon"
                  loading="lazy"
                  alt=""
                  src="/chart-2.svg"
                />
                <img className="image-icon" alt="" src="/image.svg" />
                <img className="image-2-icon" alt="" src="/image-2.svg" />
              </div>
              <img className="scene-content-child" alt="" src="/group-2.svg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
