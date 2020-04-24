import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"

const Hero = props => (
  <Heros>
    <TextContainer>
      <Fade bottom duration={800} delay={1200}>
        <h1>{props.heading}</h1>
      </Fade>
    </TextContainer>
    <ImgContainer>
      <Fade bottom duration={1200}>
        <AnchorLink href={`#${kebabCase(props.slug)}`} aria-label={props.text}>
          <Img title={props.heading} alt={props.heading} fluid={props.image} />
        </AnchorLink>
      </Fade>
    </ImgContainer>
  </Heros>
)

export default Hero

const Heros = styled.div`
  ${tw`relative pb-12 `}
`
const TextContainer = styled.header`
  ${tw`absolute inset-0 z-50 flex flex-col items-center justify-center`}
  h1 {
    ${tw`m-0 text-4xl text-white`}
  }
`
const ImgContainer = styled.div`
  ${tw`h-64 overflow-hidden bg-blue-900`}
  img {
    height: 265px;
    opacity: 0.8;
    object-fit: cover;
    object-position: center;
  }
`
