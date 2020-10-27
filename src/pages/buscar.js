import styled from "@emotion/styled"
import algoliasearch from "algoliasearch/lite"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom"
import tw from "twin.macro"
import reactLogo from "../animations/working-together.json"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"
import SEO from "../components/seo"
import EspaciosIcons from "../queries/espaciosIcons"
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

  return (
    <>
      <Layout>
        <SearchContainer>
          <SEO title="Buscar" />
          <EspaciosContainer>
            <EspaciosIcons />
          </EspaciosContainer>
          <div className="max-w-2xl p-6 pt-10 mx-auto">
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
        </SearchContainer>
      </Layout>
    </>
  )
}

export default BuscarComponent

const SearchContainer = styled.div`
  ${tw`relative bg-indigo-300`}
  min-height: 90vh;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E");
  body.dark & {
    ${tw`bg-gray-900 border-gray-800 `}

    p {
      ${tw`text-gray-300 `}
    }
    h1 {
      ${tw`text-gray-100`}
    }
  }
`

const EspaciosContainer = styled.div`
  ${tw`w-full mt-6 overflow-hidden bg-gray-100`}
  body.dark & {
    ${tw`bg-indigo-900 `}

    a {
      ${tw`text-gray-300 `}
    }
  }
`
