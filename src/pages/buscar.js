import algoliasearch from "algoliasearch/lite"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom"
import reactLogo from "../animations/working-together.json"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"
import SEO from "../components/seo"
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
        <SEO title="Buscar" />
        <div className="max-w-2xl pt-10 mx-auto">
          <InstantSearch
            searchClient={searchClient}
            indexName="netlify_54fb5aee-2bc5-4d65-8da9-b519a0027d2c_master_all"
          >
            <SearchBox
              className="mb-6"
              autoFocus="true"
              defaultRefinement="recursos"
              translations={{
                submitTitle: "asdddddd your search query.",
                resetTitle: "asd your search query.",
                placeholder: "Buscar",
              }}
            />
            <Hits hitComponent={PostPreview} />
          </InstantSearch>
        </div>
      </Layout>
    </>
  )
}

export default BuscarComponent
