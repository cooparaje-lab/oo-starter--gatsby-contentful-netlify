import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import Slider from "react-slick"
import tw from "twin.macro"
function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className="slick-arrow slick-arrow-right" onClick={onClick}>
      <AiOutlineArrowRight />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div className="slick-arrow slick-arrow-left" onClick={onClick}>
      <AiOutlineArrowLeft />
    </div>
  )
}

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
    dots: false,
    infinite: true,
    center: true,
    className: "center",
    pauseOnHover: true,
    variableWidth: false,
    autoplay: true,
    swipeToSlide: true,
    speed: 5000,
    cssEase: "linear",
    autoplaySpeed: 2000,
    slidesToShow: 13,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
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
      <SliderContainer>
        <Slider {...settings}>
          {data.espacios.edges.map(({ node }) => {
            return (
              <Link
                to={`/espacios/${kebabCase(node.slug)}/`}
                key={node.slug}
                css={[
                  tw`flex flex-col items-center justify-center pt-1 mx-2 text-center text-indigo-100 hover:text-indigo-500`,
                ]}
              >
                <span css={[tw`block my-2 mt-3 text-xl`]}>{node.icono}</span>
                <b css={[tw`hidden py-2 mb-3 font-bold`]}>{node.title}</b>
              </Link>
            )
          })}
        </Slider>
      </SliderContainer>
    </>
  )
}

export default EspaciosIconComponent

const SliderContainer = styled.div`
  .slick-slider {
    ${tw`h-full `}
  }

  .slick-dots {
    ${tw`pt-1 pb-2 bg-indigo-100`}

    li button:before {
      ${tw`text-indigo-500 `}
    }

    body.dark & {
      ${tw`bg-indigo-800 `}

      li button:before {
        ${tw`text-indigo-500`}
      }
    }
  }

  .slick-arrow {
    ${tw`absolute bottom-0 z-50 hidden p-3 text-3xl text-indigo-500 md:block `}
    body.dark & {
      ${tw`text-indigo-800`}
    }
  }
  .slick-arrow-right {
    ${tw`right-0`}
  }
  .slick-arrow-left {
    ${tw`left-0`}
  }
`
