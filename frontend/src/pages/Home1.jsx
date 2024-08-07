import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import Dropdown from "../components/Dropdown";
import Product from "../components/Product";
import Badge from "../components/Badge";
import Productlight from "../components/Productlight";
import Productlight1 from "../components/Productlight1";
import Productlight2 from "../components/Productlight2";
import Productlight3 from "../components/Productlight3";
import FrameComponent from "../components/FrameComponent";
import "./Home1.css";

const Home1 = () => {
  const navigate = useNavigate();

  const onButtonsContainerClick = useCallback(() => {
    navigate("/bidding");
  }, [navigate]);

  return (
    <div className="home3">
      <Header2 />
      <main className="content9">
        <section className="user-header-parent">
          <div className="user-header">
            <div className="greeting">
              <h1 className="welcome-olivia1">
                <span>{`Welcome `}</span>
                <span className="olivia1">User!</span>
              </h1>
              <div className="dropdown-menu1">
                <Dropdown
                  textLabel="Showing all"
                  descriptionLabel="Description"
                  titleLabel="Label"
                  mandatory
                  title={false}
                  description={false}
                />
              </div>
            </div>
            <div className="product-grid1">
              <div className="product-listing">
                <Product
                  propFlex="unset"
                  propMinWidth="unset"
                  propWidth="297px"
                  propBackgroundImage="url('/image@3x.png')"
                  propHeight1="unset"
                  propAlignSelf="unset"
                  propWidth1="unset"
                  propMinWidth2="59px"
                  propHeight2="unset"
                  propAlignSelf1="unset"
                  propWidth2="unset"
                  propMinWidth3="54px"
                  onLightButtonContainerClick={onButtonsContainerClick}
                  propHeight3="unset"
                  propAlignSelf2="unset"
                  propAlignSelf3="unset"
                  propWidth3="unset"
                  propAlignSelf4="unset"
                  propFlex1="unset"
                  propDisplay="inline-block"
                  propMinWidth4="59px"
                />
                <div className="productlight8">
                  <div className="image9">
                    <img
                      className="image-1-icon2"
                      alt=""
                      src="/image-1@2x.png"
                    />
                    <div className="like9">
                      <img className="icon9" alt="" src="/icon-2.svg" />
                    </div>
                  </div>
                  <div className="product-details2">
                    <div className="content10">
                      <div className="container27">
                        <div className="header28">
                          <Badge propHeight="unset" propMinWidth="70px" />
                          <div className="title30">Apple AirPod 2nd Gen</div>
                        </div>
                      </div>
                      <div className="container28">
                        <div className="header29">
                          <div className="title31">Minimum Bid</div>
                        </div>
                        <div className="price18">$80</div>
                      </div>
                      <div className="container28">
                        <div className="header29">
                          <div className="title31">Current Bid</div>
                        </div>
                        <div className="price19">$95</div>
                      </div>
                      <div className="paragraph9">
                        <div className="ends-in9">
                          Ends in : 1 day 12 hrs 43 minutes
                        </div>
                      </div>
                    </div>
                    <div className="buttons9">
                      <div className="cta11">
                        <div className="layout9">
                          <div className="label16">Bid now</div>
                        </div>
                        <img
                          className="right-icon10"
                          alt=""
                          src="/right-icon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productlight8">
                  <div className="image10">
                    <img
                      className="image-2-icon3"
                      alt=""
                      src="/image-21@2x.png"
                    />
                    <div className="like10">
                      <img className="icon9" alt="" src="/icon-1.svg" />
                    </div>
                  </div>
                  <div className="product-details2">
                    <div className="content10">
                      <div className="container27">
                        <div className="header28">
                          <Badge propHeight="unset" propMinWidth="70px" />
                          <div className="title30">
                            Mi 3i 20000mAh Power Bank
                          </div>
                        </div>
                      </div>
                      <div className="container28">
                        <div className="header29">
                          <div className="title31">Minimum Bid</div>
                        </div>
                        <div className="price18">$40</div>
                      </div>
                      <div className="container28">
                        <div className="header29">
                          <div className="title31">Current Bid</div>
                        </div>
                        <div className="price21">$46</div>
                      </div>
                      <div className="paragraph9">
                        <div className="ends-in9">
                          Ends in : 1 day 12 hrs 43 minutes
                        </div>
                      </div>
                    </div>
                    <div className="buttons9">
                      <div className="cta11">
                        <div className="layout9">
                          <div className="label16">Bid now</div>
                        </div>
                        <img
                          className="right-icon10"
                          alt=""
                          src="/right-icon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productlight8">
                  <div className="image10">
                    <img
                      className="image-3-icon2"
                      alt=""
                      src="/image-3@2x.png"
                    />
                    <div className="like10">
                      <img className="icon9" alt="" src="/icon-1.svg" />
                    </div>
                  </div>
                  <div className="product-details2">
                    <div className="content10">
                      <div className="container27">
                        <div className="header28">
                          <Badge propHeight="unset" propMinWidth="70px" />
                          <div className="title30">
                            Tribit Bluetooth Speaker
                          </div>
                        </div>
                      </div>
                      <div className="container28">
                        <div className="header29">
                          <div className="title31">Minimum Bid</div>
                        </div>
                        <div className="price22">$10</div>
                      </div>
                      <div className="container28">
                        <div className="header29">
                          <div className="title31">Current Bid</div>
                        </div>
                        <div className="price23">$15</div>
                      </div>
                      <div className="paragraph9">
                        <div className="ends-in9">
                          Ends in : 1 day 12 hrs 43 minutes
                        </div>
                      </div>
                    </div>
                    <div className="buttons9">
                      <div className="cta11">
                        <div className="layout9">
                          <div className="label16">Bid now</div>
                        </div>
                        <img
                          className="right-icon10"
                          alt=""
                          src="/right-icon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="productlight8">
                  <div className="image9">
                    <img
                      className="image-4-icon2"
                      alt=""
                      src="/image-4@2x.png"
                    />
                    <div className="like10">
                      <img className="icon9" alt="" src="/icon-1.svg" />
                    </div>
                  </div>
                  <div className="product-details2">
                    <div className="content10">
                      <div className="container27">
                        <div className="header28">
                          <Badge propHeight="unset" propMinWidth="70px" />
                          <div className="title39">WiFi Security Camera</div>
                        </div>
                      </div>
                      <div className="container28">
                        <div className="header29">
                          <div className="title31">Minimum Bid</div>
                        </div>
                        <div className="price24">$100</div>
                      </div>
                      <div className="container28">
                        <div className="header29">
                          <div className="title31">Current Bid</div>
                        </div>
                        <div className="price25">$157</div>
                      </div>
                      <div className="paragraph9">
                        <div className="ends-in9">
                          Ends in : 1 day 12 hrs 43 minutes
                        </div>
                      </div>
                    </div>
                    <div className="buttons9">
                      <div className="cta11">
                        <div className="layout9">
                          <div className="label16">Bid now</div>
                        </div>
                        <img
                          className="right-icon10"
                          alt=""
                          src="/right-icon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
            </div>
          </div>
        </section>
      </main>
      <FrameComponent propAlignSelf="stretch" propWidth="unset" />
    </div>
  );
};

export default Home1;
