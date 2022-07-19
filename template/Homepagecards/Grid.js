// In this file  there are 4 component
// 1) simple component
// 2) 5-cards component
// 3) 6-card component 
// 4) 5 Socials Box

import React from "react";
import {Stylemain,Stylediv1,Stylegrid,Div,StyleSection,Stylecard,StyleBox,} from "../../molecules/Grid/Grid";

import content  from "../../organisms/content";
 import cardata from "../../organisms/cardata";

export default function Grid() {
  const data = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <Stylemain>
        {data.map((index) => (
          <Stylediv1 key={index}>header</Stylediv1>
        ))}
      </Stylemain>

      {/* --> Here 5 Card component render */}
      <Div>
        {content.map((item) => (
          <Stylegrid key={item}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
            <div>
              <img src= {`./images/${item.image}`} alt={item.alt} />
            </div>
          </Stylegrid>
        ))}
      </Div>

      {/* --> Here 6 Card component render */}
      <StyleSection>
        {cardata.map((data) => (
          <Stylecard key={data}>
            <div>
              <img src= {`./images/${data.image}`} alt={data.alt} />
              <h2>{data.title}</h2>
              <p>{data.body}</p>
              <a href="">{data.buttom}</a>
            </div>
          </Stylecard>
        ))}
      </StyleSection>

     
{/* --> Here 5 box component render */}
      <StyleBox>
        <a href="https://www.linkedin.com/in/darshak-sondagar-6a92711b5/" target="_blanck">LinkedIn</a>
        <a href="https://www.instagram.com/_.iam_darshak/" target="_blanck" >Instagram</a>
        <a href="https://www.facebook.com/profile.php?id=100008063298857" target="_blanck" >Facebook</a>
        <a href="https://twitter.com/DarshakSondagar" target="_blanck" >Twitter</a>
        <a href="https://github.com/darshak1503" target="_blanck">Github</a>
      </StyleBox>
    </>
  );
}
