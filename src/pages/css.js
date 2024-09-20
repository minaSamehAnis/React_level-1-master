import React from "react";
import Header from "../Components/Header";
import Footer from '../Components/footer';
import MainContent from '../Components/MainContent';
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>CSS page</title>
        <meta name="description" content="css page in my website" />
      </Helmet>
      <Header />
      <MainContent pageType="CSS"/>
      <Footer />
    </>
  );
};

export default Css;
