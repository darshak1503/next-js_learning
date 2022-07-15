import styled from "styled-components";

export const Stylemain = styled.div`
  width: 85%;
  height: 80%;
  color: white;
  margin: 50px auto;
  border: 1px solid grey;
  display: grid;
  grid-template-rows: 60px 100px 200px 60px;
  grid-template-columns: repeat(3, 1fr) 150px;
  grid-gap: 20px;
`;

export const Stylediv1 = styled.div`
  background-color: #ff4757;
  grid-column: 1/-1;
`;

export const Stylediv2 = styled.div`
  background-color: #2ed573;
`;

export const Stylediv3 = styled.div`
  background-color: #1e90ff;
`;

export const Stylediv4 = styled.div`
  background-color: #5352ed;
`;

export const Stylediv5 = styled.div`
  background-color: #2f3542;
  grid-row: 2/4;
  grid-column: 4/5;
`;

export const Stylediv6 = styled.div`
  background-color: #ffa502;
  grid-column: 1/ 4;
`;

export const Stylediv7 = styled.div`
  background-color: #00d2d3;
  grid-column: 1/-1;
`;

export const Stylegrid = styled.div`
  display: flex;
  //flex-wrap: wrap;
  align-items: center;
  background-color: #badcf5;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  // margin: 0 30px;
  padding: 60px;

  height: 100%;
  img {
    display: inline-block;
    margin: 0 100px;
    width: 80%;
  }
`;
export const Div = styled.div`
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.2rem;
  background-color: #fff;
  margin: 0 auto;
`;

export const StyleSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  order: 3;
  justify-content: center;
`;
export const Stylecard = styled.div`
  background-color: #fcf5f5;
  width: 270px;
  height: 500px;
  margin: 10px;
  border-radius: 15px;
  &:hover {
    background-color: rgb(62, 62, 62);
    color: white;
    transform: scale(1.03);
    transition: all 1s ease;
  }
  div {
    // background-color: red;
    height: 150px;
    margin-bottom: 15px;
    backgroung-size: cover;
    border-radius: 15px 15px 0 0;
  }
  h2,
  p {
    padding: 10px;
    text-align: center;
  }
  img {
    border-radius: 15px 15px 0 0;
    height: 180px;
    width: 270px;
  }
  a {
    background-color: black;
    color: white;
    padding: 15px 20px;
    display: block;
    text-align: center;
    margin: 20px 50px;
    border-radius: 15px;
  }
`;
export const StyleBox = styled.div`
  display: flex;
  background-color: #dff0f2;
  margin: 2rem;
  padding: 4rem 2rem;
  justify-content: center;
  flex-wrap: wrap;
  a {
    padding: 25px 40px;
    background-color: #acf2fa;
    border-radius: 15px;
    margin: 10px 10px;
    width: 25%;
    text-align: center;
    &:hover {
      background-color: #53b7f5;
      transform: scale(1.1);
      transition: all 0.5s ease;
    }
  }
`;
