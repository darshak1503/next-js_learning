import React from "react";
import { Container } from "../atoms/Container/Container";

import content from '../organisms/content'
import GlobalStyle from "../styles/Global";
import Card from "../template/Aboutpagecards/Card";
import Header from "../template/Header/Header";

const about = () => {
  return (
      <>
     <GlobalStyle/>
     {/* Header component render in about page */}
        <Header/>
        <Container>
          {/* 5 card component */}
        {content.map((item, index) => (
            <Card key={index} item={item}/>
          ))}
        </Container>
      </>
   
  );
};

export default about;
