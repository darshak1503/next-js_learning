// This is Header of about page

import {Container} from "../../atoms/Container/Container";
import { StyledHeader, Nav, Logo, Image } from "../../molecules/Header/Header";
import {Button} from "../../atoms/Button/Button";
import {Flex} from "../../molecules/Flex/Flex";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Nav>
            <Logo src="./images/logo.svg" alt="logo" />
            <Button>Try it Free</Button>
          </Nav>
          <Flex>
            <div>
              <h1>Build The Community Your Fans Will Love</h1>

              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
              </p>

              <Button bg="#ff0099" color="#fff">
                Get Started For Free
              </Button>
            </div>
            <Image src="./images/illustration-mockups.svg" alt="" />
          </Flex>
        </Container>
      </StyledHeader>
    </>
  );
}