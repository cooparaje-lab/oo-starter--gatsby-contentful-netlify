import algoliasearch from "algoliasearch/lite"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom"
import Slider from "react-slick"
import reactLogo from "../../animations/working-together.json"
import Layout from "../../components/layout"
import PostPreview from "../../components/postPreview"
import Seo from "../../components/Seo"
import EspaciosIcons from "../../queries/espaciosIcons"
import "./algolia.css"

const searchClient = algoliasearch(
  "K8WTAMXCZT",
  "91627040f2b233f6958fdbdbe2b6193d"
)

const BuscarComponent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    })
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
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
      <Layout>
        <div className='relative bg-gray-300'>
          <Seo title="Buscar" />
          <div className='grid grid-cols-8 gap-1 pt-12'>
            <Slider {...settings}>
              <EspaciosIcons />
            </Slider>
          </div>
          <div className="max-w-2xl pt-10 mx-auto">
            <InstantSearch
              searchClient={searchClient}
              indexName="netlify_54fb5aee-2bc5-4d65-8da9-b519a0027d2c_master_all"
            >
              <SearchBox
                className="max-w-lg mx-auto mb-6"
                
                translations={{
                  submitTitle: "Add your search query.",
                  resetTitle: "Reset your search query.",
                  placeholder: "Buscar",
                }}
              />
              <Hits className="max-w-lg mx-auto" hitComponent={PostPreview} />
            </InstantSearch>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BuscarComponent
