
// This is 5-Cards design code which render in about page 

import { StyledCard } from "../../molecules/Cards/Card"
import  Image  from "next/image"

export default function Card({ item: { id, title, body, image ,alt} }) {
    return (
      <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>

        <div>
          <Image 
          src={`/./images/${image}`} 
          alt={alt}
          width={310} 
          height= {300}
          />
        </div>
      </StyledCard>
    )
  }
