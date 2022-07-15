import React from "react";

import Header from "../components/Header";
// import { ThemeProvider } from "styled-components";
import GlobalStyle from "../components/Style/Global";
import { Container } from "../components/Style/Container.styled";
import content from './content';
import Card from "../components/Card";


// const theme = {
//   colors: {
//     header: "#ebfbff",
//     body: "#fff",
//     footer:"#003333",
//   },
//   mobile: "768px",
// };
const about = () => {
  return (
    // <ThemeProvider theme={theme}>
      <>
      <GlobalStyle/>
        <Header />
        <Container>
        {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        
        </Container>
      </>
    // </ThemeProvider>
  );
};

export default about;
