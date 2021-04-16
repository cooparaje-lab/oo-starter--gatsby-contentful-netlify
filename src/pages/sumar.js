import React, { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import lottie from "lottie-web"
import reactLogo from "../assets/animations/send-link.json"
import Fade from "react-reveal/Fade"

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
        <Seo title="Sumar" />
        <div className='flex flex-col flex-wrap justify-center w-full pt-0 m-auto text-center '>
          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>

          <div className="relative z-10 pattern ">
            <div className="max-w-xl mx-auto">
              <Fade duration={800} delay={1500}>
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
        </div>

      </Layout>
    </>
  )
}



export default SumarPage
