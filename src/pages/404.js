import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import lottie from "lottie-web"
import reactLogo from "../assets/animations/404.json"
import SVGTaken from "../assets/taken.svg"
import SquareBlender from "../assets/square-animation.svg"

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
        <Seo title="404" />
        <div className='flex flex-col flex-wrap justify-center w-full pt-12 m-auto text-center bg-gray-100'>
          <div className="absolute top-0 left-0 right-0 z-0 h-screen max-w-4xl mx-auto bg-react-logo ">
            <div id="react-logo" className="w-full h-full" />
          </div>
          <h1 className="mt-0 font-mono text-xl font-bold">
            Encontraste un 404
          </h1>
          <SquareBlender className="fixed inset-0 z-50 mx-auto transition-opacity duration-500 transform opacity-20" />
          <SVGTaken className="relative z-50 h-screen max-w-md mx-auto transition-opacity duration-500 transform svg-taken" />
        </div>
      </Layout>
    </>
  )
}


export default NotFoundPage
