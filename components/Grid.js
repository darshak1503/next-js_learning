import React from "react";
import {
  Stylemain,
  Stylediv1,
  Stylediv2,
  Stylediv3,
  Stylediv4,
  Stylediv5,
  Stylediv6,
  Stylediv7,
  Stylegrid,
  Cards,
  Div,
} from "./Style/Grid.styled";
export default function Grid() {
  return (
    <>
      {/* <Stylemain>
        <Stylediv1>header</Stylediv1>
        <Stylediv2>box1</Stylediv2>
        <Stylediv3>box2</Stylediv3>
        <Stylediv4>box3</Stylediv4>
        <Stylediv5>siderbar</Stylediv5>
        <Stylediv6>main content</Stylediv6>
        <Stylediv7>footer</Stylediv7>
    </Stylemain> */}

       
      <Div>
          <Stylegrid>
            <div>
              <h2>Grow Together</h2>
              <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form</p>
            </div>
            <div>
              <img src= './images/illustration-grow-together.svg' alt="" />
            </div>
          </Stylegrid>
          <Stylegrid>
            <div>
              <h2>Flowing Conversations</h2>
              <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow</p>
            </div>
            <div>
              <img src= './images/illustration-flowing-conversation.svg' alt="" />
            </div>
          </Stylegrid>
          <Stylegrid>
            <div>
              <h2>Your Users</h2>
              <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately</p>
            </div>
            <div>
              <img src= './images/illustration-your-users.svg' alt="" />
            </div>
          </Stylegrid>
          <Stylegrid>
            <div>
              <h2>Grow Together</h2>
              <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form</p>
            </div>
            <div>
              <img src= './images/illustration-grow-together.svg' alt="" />
            </div>
          </Stylegrid>
      </Div>
        
    </>
  );
}
