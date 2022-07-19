import React from "react";
import {Stylemain,Stylediv1,Stylegrid,Div,StyleSection,Stylecard,StyleBox,} from "../../molecules/Grid/Grid";

import content from "../../pages/content";
import cardata from "../../pages/cardata";

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

     

      <StyleBox>
        <a href="">LinkedIn</a>
        <a href="">Instagram</a>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">Github</a>
      </StyleBox>
    </>
  );
}
