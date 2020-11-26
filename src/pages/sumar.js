import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import lottie from "lottie-web"
import reactLogo from "../assets/animations/send-link.json"
import tw from "twin.macro"
import styled from "@emotion/styled"

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
        <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
        <SEO title="Sumar" />
        <Container>
          <form
            className="relative z-50 w-full max-w-md p-6 mx-auto my-12 "
            name="sumar"
            method="POST" data-netlify="true"
          >
            <p>
              <label className="flex flex-col justify-start text-left">
                <span className="mb-2 font-mono text-3xl font-bold text-white ">Compartir link</span>{" "}
                <input className="p-3 border-gray-800" type="url" name="url" />
              </label>
            </p>
            <p>
              <button
                className="flex items-center justify-center w-full px-4 py-2 text-base font-bold text-yellow-900 bg-yellow-500 border border-transparent rounded-md shadow-sm hover:bg-yello-60"
                type="submit"
              >
                Enviar
              </button>
            </p>
          </form>
          <div className="absolute top-0 left-0 right-0 z-0 h-screen bg-react-logo">
            <div id="react-logo" className="w-full h-full opacity-40" />
          </div>
        </Container>
      </Layout>
    </>
  )
}

const Container = styled.div`
  ${tw`flex flex-col flex-wrap justify-center w-full pt-0 m-auto text-center bg-gray-900`}
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

  form {
    input {
      ${tw`bg-gray-100`}
    }
    p {
      ${tw`my-3`}
    }
  }
`

export default SumarPage
