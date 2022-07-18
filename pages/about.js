import React from "react";

import Header from "../template/Header/Header";
// import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/Global";
import  Container  from "../atoms/Container/Container";
import content from '../pages/content';
import Card from "../template/Card/Card";


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
