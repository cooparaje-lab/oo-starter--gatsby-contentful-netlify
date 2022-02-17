import algoliasearch from "algoliasearch/lite"
import React from "react"
import { Helmet } from "react-helmet"

import {
  InstantSearch,
  Hits,
  ClearRefinements,
  SearchBox,
  RefinementList,
} from "react-instantsearch-dom"
import Layout from "../components/layout"
import PostPreview from "../components/AlgoliaRecursos"
import Seo from "../components/seo"
import "./algolia.css"
import EspaciosIcons from "./espacios/EspaciosIconSlider"

const searchClient = algoliasearch(
  "K8WTAMXCZT",
  "91627040f2b233f6958fdbdbe2b6193d"
)

const BuscarComponent = () => {
  return (
    <>
      <Layout>
        <Helmet>
          <body className="searcher" />
        </Helmet>
        <div className="relative min-h-screen pt-3 text-gray-100 bg-gray-900 border-gray-800">
          <Seo title="Buscar" />
          <div className="relative items-center justify-center w-full py-1 mt-1 overflow-x-auto overflow-y-hidden bg-gray-800 border-t-2 border-b-2 border-gray-900">
            <EspaciosIcons />
          </div>
          <InstantSearch searchClient={searchClient} indexName="recursos">
            <div className="flex flex-col items-start justify-start p-2 pb-0 mb-3 md:flex-row">
              <div className="items-center justify-between flex-initial hidden pt-1 font-mono text-2xl font-medium text-white opacity-100 md:flex md:w-72">
                <span className="pl-1 text-base">Filtrar</span>
                <div className="">
                  <ClearRefinements
                    translations={{
                      reset: "Reiniciar",
                    }}
                  />
                </div>
              </div>
              <SearchBox
                className="w-full mx-auto text-left md:pl-3"
                translations={{
                  submitTitle: "Add your search query.",
                  resetTitle: "Reset your search query.",
                  placeholder:
                    'Buscar',
                }}
              />
            </div>
            <div className="flex flex-col px-2 md:flex-row">
              <div className="relative flex flex-col w-full mb-12 md:w-72">
                <RefinementList
                  attribute="espacio.title"
                  showMore={true}
                  operator="and"
                  showMoreLimit={100}
                  translations={{
                    showMore(expanded) {
                      return expanded ? "Menos espacios" : "Más espacios"
                    },
                    noResults: "Sin resultados",
                    submitTitle: "Iniciar búsqueda",
                    resetTitle: "Reiniciar búsqueda",
                    placeholder: "Buscador",
                  }}
                />
              </div>
              <div className="w-full pl-3 overflow-auto">
                <Hits className="w-full mx-auto" hitComponent={PostPreview} />
              </div>
            </div>
          </InstantSearch>
        </div>
      </Layout>
    </>
  )
}

export default BuscarComponent
