import React, { Fragment } from "react";
import Header from "../components/index/Header";
import About from "../components/index/About";
import Project from "../components/index/Project";
import { Alumin } from "../components/index/Alumin";
import Experience from "../components/index/Experience";
import Tools from "../components/index/Tools";
import Footer from "../components/index/Footer";
import Achievements from "../components/index/Achievements";
import Nav from "../components/Nav";
import Services from "../components/index/Services";

const Index: React.FC = () => {

 
  

  return (
    <Fragment>
      <Nav />

      <Header id="header" />
      <About id="about" />

      <Tools id="language" />
      <Experience id="experience" />  
      <Services id="services" /> 
      <Project id="projects" />
      <Achievements id="achievement" />
      <Alumin id="education" />

      <div className="h-24 md:h-32" />
      <Footer id="contact" />
    </Fragment>
  );
};

export default Index;
