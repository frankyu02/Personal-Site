import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default function fourOhFour(){
  return(
    <div>
      <Wrapper>
        <Link to="/">now... How did you get here I wonder... Thanks for stopping by but you really shouldn't be here :D</Link>
      </Wrapper>
    </div>
  )
}