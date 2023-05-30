import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../Components/Header/Header";
import Slider from "../../../Components/Slider/Slider";
import "./home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Slider />
      <section id="buy-sell">
        <div className="container">
          <div className="buy-sell-row">
            <div className="buy-sell-side">
              <div className="side-img">
                <img
                  src="https://preview.colorlib.com/theme/invest/images/intro.png.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="buy-sell-side">
              <div className="texts">
                <div className="line"></div>
                <h2>Buy and Sell Bitcoin</h2>
                <p>
                  Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris.
                  Integer ut ultricies orci, lobortis egestas sem. Morbi ut
                  dapibus dui. Sed ut iaculis elit.Morbi ut dapibus dui. Sed ut
                  iaculis elit, quis varius mauris. Integer ut ultricies orci,
                  lobo rtis egestas sem. Morbi ut dapibus dui. Sed ut iaculis
                  elit. Morbi ut dapibus dui. Sed ut iaculis elit, quis varius
                  mauris. Integer ut ultricies orci, lobortis egestas sem. Morbi
                  ut dapibus dui. Sed ut iaculis elit.
                </p>

                <a href="/" className="slider-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trading">
        <div className="container">
          <div className="trading-header">
            <div className="texts">
              <div className="line"></div>
              <h2>Buy and Sell Bitcoin</h2>
            </div>
          </div>

          <div className="trading-row">
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
