import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../Components/Header/Header";
import Slider from "../../../Components/Slider/Slider";
import "./home.css";
import { Space } from "antd";
import axios from "axios";
import Search from "antd/es/input/Search";
import { useNavigate } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'

const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/trading");
    console.log(res.data);
    setData(
      res.data.filter((card) =>
        card.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getData();
  }, [value]);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/trading/${id}`);
    await getData();
  };

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
              <div className="line center"></div>
              <h2>A simple trading system</h2>
            </div>
          </div>

          <Space direction="horizontal">
            <Search
              style={{
                marginTop: "10px",
              }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search..."
              enterButton
            />
          </Space>

          <div className="trading-row">
            {data.map((cart) => (
              <div key={cart._id} className="card">
                <div className="card-container">
                  <div onClick={() => navigate(`/${cart._id}`)} className="card-image">
                    <img src={cart.image} alt="" />
                  </div>
                  <div className="card-title">{cart.title}</div>
                  <p>{cart.description}</p>
                  <button
                    onClick={() => deleteData(cart._id)}
                    style={{
                      marginTop: "10px",
                      padding: "15px 20px",
                      border: "none",
                      borderRadius: "5px",
                      color: "white",
                      backgroundColor: "red",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news">
        <div className="container">
          <div className="trading-header">
            <div className="texts">
              <div className="line center"></div>
              <h2>Latest News in Crypto</h2>
            </div>
          </div>

          <div className="trading-row">
            <div className="card">
              <div className="card-container">
                <div className="card-img">
                  <img
                    src="https://preview.colorlib.com/theme/invest/images/news_1.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="content-top">
                    New Regulations on the Crypto Market
                  </div>
                  <p>
                    Morbi ut dapibus dui. Sed ut iaculis elit, quis varius
                    mauris. Integer ut ultricies orci.
                  </p>
                  <a href="/" className="slider-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-container">
                <div className="card-img">
                  <img
                    src="https://preview.colorlib.com/theme/invest/images/news_2.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="content-top">
                    Good News from the Crypto World
                  </div>
                  <p>
                    Morbi ut dapibus dui. Sed ut iaculis elit, quis varius
                    mauris. Integer ut ultricies orci.
                  </p>
                  <a href="/" className="slider-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-container">
                <div className="card-img">
                  <img
                    src="https://preview.colorlib.com/theme/invest/images/news_3.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="content-top">
                    Bitcoin price goes to the Moon with new laws
                  </div>
                  <p>
                    Morbi ut dapibus dui. Sed ut iaculis elit, quis varius
                    mauris. Integer ut ultricies orci.
                  </p>
                  <a href="/" className="slider-btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-top">
          Copyright ©2023 All rights reserved | This template is made with <AiOutlineHeart style={{margin: "0 5px"}} />  by Colorlib
          </div>
          <div className="footer-bottom">
            <ul className="footer-ul">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
