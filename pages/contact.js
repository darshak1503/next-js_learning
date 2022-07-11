import React from "react";
import styled from "styled-components";
import Image from "next/image";
const Main = styled.div`
   background-color:#f6f7be;
`;
const Contact__container = styled.h1`
  width: 75%;
  margin: 0 auto;
  width: 60%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 30% 50%;
  gap: 12%;
  background-color: #debef7;
  border:3px solid black;
  border-radius: 1.2rem;
`;
const Contact__ops = styled.h1`
  display: flex;
  flex-direction: column;
  margin: 8.9px;
  gap: 1.2rem;
`;

const Title = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: Red;
`;
const Hed = styled.h2`
  font-size: 2.5em;
  text-align: center;
  color: Blue;
`;
const Contact_List = styled.h4`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
`;
const Contact_op = styled.h2`
  background-color:pink ;
  font-size: 1.4rem;
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 3px solid red;
`;
const From = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  
`;
const Button = styled.button`
  width: 100;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #93f5f2;
  border: 4px solid black;
`;

const contact = () => {
  return (
    <div>
      <Main>
      <Title>Get in Touch</Title>
      <Hed>Contact With Me</Hed>
      <Contact__container>
          {/* <Image src="/contact.jpg" alt="image" height={"500px"} width={"500px"}/> */}
        <Contact__ops>
          <Contact_List>
            <Contact_op>
              <h5>Email</h5>
              <h6>darshaksondagar48144@gmail.com</h6>
            </Contact_op>
            <Contact_op>
              <h5>WhatsApp</h5>
              <h6>+91 9512558153</h6>
              <a href=" https://wa.me/+919512558153" target="_blank">
                Sent a message
              </a>
            </Contact_op>
            <Contact_op>
              <h5>LinkedIn</h5>
              <h6>Darshak Sondagar</h6>
              <a
                href=" https://www.linkedin.com/in/darshak-sondagar-6a92711b5/"
                target="_blank"
              >
                Sent a message
              </a>
            </Contact_op>
          </Contact_List>
        </Contact__ops>
        <From>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <Button type="submit">Send Message</Button>
        </From>
      </Contact__container>
      </Main>
    </div>
  );
};

export default contact;
