import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

const Hero = (props) => (
  <div className="relative">
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center">
      <Fade bottom duration={800} delay={600}>
        <AnchorLink href={`#${kebabCase(props.slug)}`} aria-label={props.text}>
          <h1 className="m-0 font-serif text-4xl text-center text-white md:text-6xl">
            {props.heading}
          </h1>
        </AnchorLink>
      </Fade>
    </div>
    <div className="overflow-hidden bg-gray-900 opacity-30">
      <Fade duration={1200}>
        <Img title={props.heading} alt={props.heading} fixed={props.image} />
      </Fade>
    </div>
  </div>
)

export default Hero
