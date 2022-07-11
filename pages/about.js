import React from 'react'
import styled from 'styled-components'

const about = () => {

  const Title = styled.h2`
  
  font-size: 2.5em;
  text-align: center;
  color: blue ;

  `;
  const Grd = styled.h3`
  fonr-size = 1.7rem;
  text-align: center;
  color: black;
  
  `;
  return (
    <div>
      <Title>Darshak Sondagar</Title>
      <Grd>IT Engineer</Grd>
    </div>
  )
}  

export default about