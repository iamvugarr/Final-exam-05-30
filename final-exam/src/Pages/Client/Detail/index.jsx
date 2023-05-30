import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(`http://localhost:8080/trading/${params.id}`);
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <section
      style={{
        marginTop: "120px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
          }}
          className="detail-row"
        >
          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
              textAlign:'center'
            }}
            className="img"
          >
            <img src={data.image} alt="" />
          </div>

          <div
            style={{
              flex: "0 0 50%",
              maxWidth: "50%",
            }}
            className="detail-about"
          >
            <h1 style={{
              marginBottom:'50px'
            }}>Title: <span style={{fontSize: "24px", color:'red'}}>{data.title}</span> </h1>
            <h2>Description:  <span style={{fontSize: "24px", color:'green'}}>{data.description}</span> </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
