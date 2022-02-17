import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import Slider from "react-slick"
import ReactTooltip from "react-tooltip"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div
      className="slick-arrow slick-arrow-right"
      role="button"
      tabIndex={-1}
      onKeyDown={onClick}
      onClick={onClick}
    >
      <AiOutlineArrowRight />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className="slick-arrow slick-arrow-left"
      role="button"
      onKeyDown={onClick}
      onClick={onClick}
      tabIndex={-1}
    >
      <AiOutlineArrowLeft />
    </div>
  )
}

const EspaciosIconSliderComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryEspaciosIconSliderQuery {
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
    variableWidth: true,
    autoplay: false,
    swipeToSlide: true,
    speed: 5000,
    cssEase: "linear",
    autoplaySpeed: 2000,
    slidesToShow: 13,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    arrows: false,
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
          arrows: true,
        },
        
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
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
      <ReactTooltip
        place="bottom"
        type="dark"
        effect="solid"
        className="bg-red-500 shadow"
      />
      <div>
        <Slider {...settings}>
          {data.espacios.edges.map(({ node }) => {
            return (
              <Link
                to={`/espacios/${kebabCase(node.slug)}/`}
                key={node.slug}
                data-tip={`Ir al espacio ${kebabCase(node.slug)}`}
                className="flex flex-col items-center justify-center pt-1 mx-2 font-bold text-center text-gray-100 transition-all duration-200 transform opacity-50 hover:text-gray-500 hover:opacity-100"
              >
                <span role="img" aria-label={node.title} className="block pb-1 my-0 text-3xl">{node.icono}</span>
                <b className="hidden py-2 mb-3 font-bold">{node.title}</b>
              </Link>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default EspaciosIconSliderComponent
