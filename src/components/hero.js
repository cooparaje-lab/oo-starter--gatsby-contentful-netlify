import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
const Hero = props => (
  <header>
    <AnchorLink href={`#${kebabCase(props.slug)}`} aria-label={props.text}>
      <Img title={props.heading} alt={props.heading} fluid={props.image} />
    </AnchorLink>
    <h1>{props.heading}</h1>
    <p>{props.text}</p>
  </header>
)

export default Hero
