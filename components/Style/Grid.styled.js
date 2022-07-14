import styled from "styled-components";

export const Stylemain = styled.div`
 width: 85%;
 height: 80%;
 color:white;
 margin: 50px auto;
 border: 1px solid grey;
 display: grid;
 grid-template-rows: 60px 100px 200px 60px;
 grid-template-columns: repeat(3, 1fr) 150px;
 grid-gap: 20px;
`

export const Stylediv1 = styled.div`
background-color: #ff4757;
grid-column: 1/-1;
`

export const Stylediv2 = styled.div`
background-color: #2ed573;
`

export const Stylediv3 = styled.div`
background-color: #1e90ff;
`

export const Stylediv4 = styled.div`
background-color: #5352ed;
`

export const Stylediv5 = styled.div`
background-color: #2f3542;
grid-row: 2/4;
grid-column:4/5;
`

export const Stylediv6 = styled.div`
background-color: #ffa502;
grid-column:1/ 4;
`

export const Stylediv7 = styled.div`
background-color: #00d2d3;
grid-column: 1/-1;
`