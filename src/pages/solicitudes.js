import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import lottie from "lottie-web"
import reactLogo from "../assets/animations/send-link.json"
// import Fade from "react-reveal/Fade"

const SumarPage = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    })
  }, [])

  return (
    <>
      <Layout>
        <Seo title="Solicitudes" />
        <div className="flex flex-col flex-wrap justify-start w-full min-h-screen pt-0 m-auto text-center">
          <div className="relative z-10 w-full max-w-2xl p-2 pt-12 mx-auto pattern ">
            <iframe
              class="airtable-embed"
              src="https://airtable.com/embed/shracdfhPNgfhblRW?backgroundColor=yellow&layout=card&viewControls=on"
              frameBorder="0"
              onmousewheel=""
              title="Solicitudes"
              width="100%"
              height="533"
            ></iframe>
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
