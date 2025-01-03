import React, { Fragment } from "react";
import Header from "../components/index/Header";
import Background from "../components/index/Background";
import Projects from "../components/index/Projects";
import { Check } from "../components/index/Check";
import { Alumin } from "../components/index/Alumin";

const Index: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Background /> 
      <Alumin />
      
      <div className="h-24 md:h-32" />
      <Projects /> 
      {/* <Check /> */}
    </Fragment>
  );
};

export default Index;
