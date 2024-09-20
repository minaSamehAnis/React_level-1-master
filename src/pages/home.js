import React from "react";
import Header from "../Components/Header";
import Footer from '../Components/footer';
import MainContent from '../Components/MainContent';
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
        <meta name="description" content="Home page in my website" />
      </Helmet>
      <Header />
      <MainContent pageType="Home"/>
      <Footer />
      </>
  );
};

export default Home;
