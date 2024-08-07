import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpSuccess.css";

const SignUpSuccess = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCTAClick = useCallback(() => {
    navigate("/home2");
  }, [navigate]);

  return (
    <div className="sing-up-success">
      <header className="header3">
        <div className="vector-parent" onClick={onGroupContainerClick}>
          <img
            className="vector-icon1"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className="logo-wrapper">
            <h2 className="logo">Genix Auctions</h2>
          </div>
        </div>
        <div className="seperator" />
      </header>
      <main className="main-content-wrapper">
        <section className="main-content1">
          <h1 className="uncover-deals-unleash-container">
            <span>{`Uncover Deals, Unleash Excitement: `}</span>
            <span className="dive-into-our">Dive into Our Auctions Today!</span>
          </h1>
          <div className="left-illustration-wrapper">
            <div className="left-illustration">
              <div className="triangle-container-wrapper">
                <div className="triangle-container">
                  <img
                    className="confetti-triangle-icon"
                    loading="lazy"
                    alt=""
                    src="/confetti-triangle.svg"
                  />
                  <div className="we-are-coming-soon-wrapper">
                    <h1 className="we-are-coming">SIGNED UP SUCCESSFULLY!</h1>
                  </div>
                </div>
              </div>
              <div className="right-illustration">
                <div className="success-illustration-container">
                  <div className="illustration-elements">
                    <img
                      className="confetti-dot-icon"
                      loading="lazy"
                      alt=""
                      src="/confetti-dot.svg"
                    />
                  </div>
                  <div className="success-image-container">
                    <img
                      className="illustration-success-social"
                      loading="lazy"
                      alt=""
                      src="/illustration--success-social-media---achievement-woman-trophy-award-reward-win-competition.svg"
                    />
                    <div className="cta-wrapper">
                      <button className="cta2" onClick={onCTAClick}>
                        <div className="label5">Login now</div>
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  className="confetti-badge-icon"
                  loading="lazy"
                  alt=""
                  src="/confetti-badge.svg"
                />
                <div className="arch-container-wrapper">
                  <div className="arch-container">
                    <img
                      className="confetti-arch-icon"
                      loading="lazy"
                      alt=""
                      src="/confetti-arch.svg"
                    />
                    <div className="ribbon-container">
                      <img
                        className="confetti-ribbon-icon"
                        loading="lazy"
                        alt=""
                        src="/confetti-ribbon.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SignUpSuccess;
