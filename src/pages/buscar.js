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
import EspaciosIcons from "./espacios/EspaciosIcons"

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
        <div className="relative max-h-screen overflow-hidden text-gray-100 bg-gray-900 border-gray-800">
          <Seo title="Buscar" />
          <div className="relative items-center justify-center hidden w-full pb-1 overflow-x-auto overflow-y-hidden bg-gray-800">
            <EspaciosIcons />
          </div>
          <InstantSearch searchClient={searchClient} indexName="recursos">
            <div className="relative grid w-full min-h-screen grid-cols-5 gap-2 mx-auto overflow-hidden">
              <div className="relative hidden col-span-1 pt-2 text-white shadow-xl bg-gradient-to-b from-gray-800 to-gray-900 md:block">
                <div className="absolute bottom-0 w-full mt-0 mb-12 ">
                  <ClearRefinements
                    translations={{
                      reset: "Borrar filtros",
                    }}
                  />
                </div>
                <RefinementList
                  attribute="espacio.title"
                  showMore={true}
                  showMoreLimit={100}
                  translations={{
                    showMore(expanded) {
                      return expanded ? "Mostrar menos" : "Mostrar más"
                    },
                    noResults: "Sin resultados",
                    submitTitle: "Iniciar búsqueda",
                    resetTitle: "Reiniciar búsqueda",
                    placeholder: "Buscador",
                  }}
                />
              </div>
              <div className="relative h-screen col-span-5 p-2 pt-6 overflow-y-auto md:col-span-4 ">
                <SearchBox
                  className="w-full mx-auto mb-6"
                  showLoadingIndicator
                  translations={{
                    submitTitle: "Add your search query.",
                    resetTitle: "Reset your search query.",
                    placeholder:
                      'Probá con "Juegos", "Arte", "Plantas", "hardware" y/o "etc"',
                  }}
                />
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
