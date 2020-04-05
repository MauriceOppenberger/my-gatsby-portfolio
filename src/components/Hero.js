import React from "react"
import styled from "styled-components"

const HeroWrapper = styled.div`
  background: red;
`
const Hero = props => {
  return (
    <HeroWrapper>
      <div className="about">
        <h1
          dangerouslySetInnerHTML={{
            __html: props.title,
          }}
        />

        <div
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
      </div>

      <div></div>
    </HeroWrapper>
  )
}

export default Hero
