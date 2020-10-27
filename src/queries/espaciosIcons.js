import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import Slider from "react-slick"
import tw from "twin.macro"

const EspaciosIconComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryRecursosQuery {
      espacios: allContentfulEspacios {
        edges {
          node {
            title
            id
            slug
            excerpt {
              excerpt
            }
            icono
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: false,
    variableWidth: false,
    autoplay: true,
    swipeToSlide: true,
    speed: 5000,
    autoplaySpeed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      ></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings}>
        {data.espacios.edges.map(({ node }) => {
          return (
            <Link
              to={`/espacios/${kebabCase(node.slug)}/`}
              css={[
                tw`flex flex-col items-center justify-center pt-1 mx-6 text-center text-indigo-100 hover:text-indigo-500`,
              ]}
            >
              <span css={[tw`block my-2 mt-3 text-xl`]}>{node.icono}</span>
              <b css={[tw`block py-2 mb-3 font-bold`]}>{node.title}</b>
            </Link>
          )
        })}
      </Slider>
    </>
  )
}

export default EspaciosIconComponent
