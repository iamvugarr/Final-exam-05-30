import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../Components/Header/Header";

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
    </>
  );
};

export default Home;
