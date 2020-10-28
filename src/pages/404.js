import React, { useEffect } from "react"
import Fade from 'react-reveal/Fade';
import Layout from "../components/layout"
import SEO from "../components/seo"
import lottie from "lottie-web"
import reactLogo from "../assets/animations/404.json"

import SVGTaken from "../assets/taken.svg"
import tw from "twin.macro"
import styled from "@emotion/styled"

const NotFoundPage = () => {

    useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    })
  }, [])

  return (
    <>

  <Layout>
    <SEO title="404" />
    <Container>
    <div className="absolute top-0 left-0 right-0 z-0 max-w-4xl mx-auto h-screen bg-react-logo  ">
        <div id="react-logo" className="w-full h-full" />
      </div>
      <h1 className="mt-0 font-mono text-xl font-bold">Encontraste un 404</h1>

      <Fade>
      <SVGTaken className="svg-taken h-auto transition-opacity duration-500 transform relative z-50 max-w-md mx-auto" />
      </Fade>
    </Container>
  </Layout>
    </>
  )
}

const Container = styled.div`
  ${tw`flex h-screen  flex-col flex-wrap justify-center w-full bg-gray-100 pt-12 m-auto text-center`}
  body.dark & {
    ${tw`text-white bg-gray-900`}

    .bg-react-logo {
      opacity: 0;

    } h1 {
    opacity: 1;
  }
    .svg-taken {
      opacity: 1;
    }
  }

  h1 {
    opacity: 0;
  }

  .bg-react-logo {
      opacity: 1;

    }

  .svg-taken {
      opacity: 0;
    }

`

export default NotFoundPage
