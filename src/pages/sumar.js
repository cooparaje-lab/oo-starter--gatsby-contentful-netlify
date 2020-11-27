import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import lottie from "lottie-web"
import reactLogo from "../assets/animations/send-link.json"
import tw from "twin.macro"
import styled from "@emotion/styled"
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
        <SEO title="Sumar" />
        <Container>
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
        </Container>
        <div className="absolute top-0 left-0 right-0 z-0 h-screen bg-react-logo">
          <div id="react-logo" className="w-full h-full" />
        </div>
      </Layout>
    </>
  )
}

const Container = styled.div`
  ${tw`flex flex-col flex-wrap justify-center w-full pt-0 m-auto text-center `}
  min-height: 100vh;
  body.dark & {
    ${tw`text-white bg-gray-900`}

    .bg-react-logo {
      opacity: 0;
    }

    h1 {
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

  .pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
`

export default SumarPage
