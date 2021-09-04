import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import lottie from "lottie-web"
// import reactLogo from "../assets/animations/send-link.json"
import Fade from "react-reveal/Fade"

const SumarPage = () => {

  return (
    <>
      <Layout>
        <Seo title="Sumar" />
        <div className="flex flex-col flex-wrap justify-center w-full pt-0 m-auto text-center bg-yellow-600 ">
          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
          <div className="relative z-10 p-6 pattern ">
            <div className="relative max-w-3xl mx-auto">
              <Fade duration={1800} delay={500}>
                <iframe
                  class="airtable-embed airtable-dynamic-height "
                  src="https://airtable.com/embed/shr26Q67QZhbE7NCJ?backgroundColor=yellow"
                  title="Sumar recurso"
                  frameborder="0"
                  onmousewheel=""
                  width="100%"
                  height="700"
                ></iframe>
              </Fade>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="opacity-40 md:opacity-10 backgroundVideoFixed"
            poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_100,w_1600/v1628557649/encoder/sunset0001-0120_osaihl.jpg"
          >
            <source
              src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628557649/encoder/sunset0001-0120_osaihl.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628557649/encoder/sunset0001-0120_osaihl.webm"
              type="video/webm"
            />
            <source
              src="https://res.cloudinary.com/srcouto/video/upload/q_auto:low/v1628557649/encoder/sunset0001-0120_osaihl.ogv"
              type="video/ogg"
            />
          </video>
        </div>
      </Layout>
    </>
  )
}

export default SumarPage
