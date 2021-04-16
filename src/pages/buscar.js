import algoliasearch from "algoliasearch/lite"
import React from "react"
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"
import Seo from "../components/seo"
import "./algolia.css"
import EspaciosIcons from "./espacios/EspaciosIcons"

const searchClient = algoliasearch(
  "K8WTAMXCZT",
  "91627040f2b233f6958fdbdbe2b6193d"
)

const BuscarComponent = () => {
  return (
    <>
      <Layout>
        <div className="relative text-gray-100 bg-gray-900 border-gray-800">
          <Seo title="Buscar" />
          <div className="relative flex items-center justify-center w-full pb-1 mt-3 overflow-x-auto overflow-y-hidden bg-gray-700">
            <EspaciosIcons />
          </div>
          <div className="max-w-2xl min-h-screen p-6 pt-6 mx-auto">
            <InstantSearch
              searchClient={searchClient}
              indexName="netlify_54fb5aee-2bc5-4d65-8da9-b519a0027d2c_master_all"
            >
              <SearchBox
                className="w-full mx-auto mb-6"
                translations={{
                  submitTitle: "Add your search query.",
                  resetTitle: "Reset your search query.",
                  placeholder: 'Probá con "Juegos", "Arte", "Plantas", "Radios" y/o "etc"',
                }}
              />
              <Hits className="w-full mx-auto" hitComponent={PostPreview} />
            </InstantSearch>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BuscarComponent
