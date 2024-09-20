import React from "react";
import Header from "../Components/Header";
import Footer from '../Components/footer';
import MainContent from '../Components/MainContent';
import { Helmet } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
      <Helmet>
        <title>JavaScript page</title>
        <meta name="description" content="javascript page in my website" />
      </Helmet>
      <Header />
      <MainContent pageType="JavaScript"/>
      <Footer />
    </>
  );
};

export default Javascript;
