import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./algolia.css"
import {
  InstantSearch,
  Hits,
  ClearRefinements,
  SearchBox,
  RefinementList,
} from "react-instantsearch-dom"
import PostPreview from "../components/postPreview"
import algoliasearch from "algoliasearch/lite"

const searchClient = algoliasearch(
  "K8WTAMXCZT",
  "91627040f2b233f6958fdbdbe2b6193d"
)
//import Fade from "react-reveal/Fade"
const HomeComponent = () => {
  return (
    <>
      <Layout>
        <Seo title="Inicio" />
        <div className="relative flex flex-col items-center justify-center py-6 text-center bg-gradient-to-r from-teal-400 to-gray-500">
          <div className="relative z-50 flex flex-col w-full py-6 md:pb-8 ">
            <div className="flex flex-col w-full min-h-screen px-0 pt-64">
              <h1 className="w-full px-3 font-serif text-xl font-extrabold leading-tight text-left text-white md:text-center md:text-2xl">
                Una colección de recursos libres.
              </h1>

              <div className="w-full max-w-6xl pt-8 mx-auto md:pt-6">
                <InstantSearch searchClient={searchClient} indexName="recursos">
                  <SearchBox
                    className="w-full max-w-lg px-3 mx-auto mb-6 text-left"
                    translations={{
                      submitTitle: "Add your search query.",
                      resetTitle: "Reset your search query.",
                      placeholder:
                        'Probá con "Juegos", "Arte", "Plantas", "Radios" y/o "etc"',
                    }}
                  />
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-full md:w-72">
                      <div className="mb-2">
                        <ClearRefinements
                          translations={{
                            reset: "Reiniciar",
                          }}
                        />
                      </div>
                      <RefinementList
                        attribute="espacio.title"
                        showMore={true}
                        operator="and"
                        showMoreLimit={100}
                        translations={{
                          showMore(expanded) {
                            return expanded ? "Mostrar menos" : "Más espacios"
                          },
                          noResults: "Sin resultados",
                          submitTitle: "Iniciar búsqueda",
                          resetTitle: "Reiniciar búsqueda",
                          placeholder: "Buscador",
                        }}
                      />
                    </div>
                    <div className="w-full pl-3">
                      <Hits
                        className="w-full mx-auto"
                        hitComponent={PostPreview}
                      />
                    </div>
                  </div>
                </InstantSearch>
              </div>
            </div>
          </div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="z-0 opacity-40 md:opacity-10 backgroundVideoFixed"
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

export default HomeComponent
