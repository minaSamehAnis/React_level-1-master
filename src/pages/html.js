import React from "react";
import Header from "../Components/Header";
import Footer from '../Components/footer';
import MainContent from '../Components/MainContent';
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <><Helmet>
        <title>HTML page</title>
        <meta name="description" content="html page in my website" />
      </Helmet>
      <Header />
      <MainContent pageType="HTML"/>
      <Footer />
    </>
  );
};

export default Html;
