import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./algolia.css"
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom"
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
          <div className="flex flex-col w-full py-6 md:pb-8 ">
            <section className="container relative z-50 flex flex-col w-full max-w-6xl min-h-screen mx-auto overflow-x-hidden">
              <div className="flex flex-col h-full px-0">
                <div className="flex items-center flex-1">
                  <div className="">
                    <div className="w-full max-w-6xl mx-auto">
                      <h1 className="px-3 font-serif text-xl font-extrabold leading-tight text-left text-white md:text-center md:text-2xl">
                        Colección de recursos gratuitos
                      </h1>

                      <div className="min-h-screen pt-8 md:pt-12">
                        <InstantSearch
                          searchClient={searchClient}
                          indexName="netlify_54fb5aee-2bc5-4d65-8da9-b519a0027d2c_master_all"
                        >
                          <SearchBox
                            className="w-full max-w-lg px-3 mx-auto mb-6 text-left"
                            translations={{
                              submitTitle: "Add your search query.",
                              resetTitle: "Reset your search query.",
                              placeholder:
                                'Probá con "Juegos", "Arte", "Plantas", "Radios" y/o "etc"',
                            }}
                          />
                          <Hits
                            className="w-full mx-auto"
                            hitComponent={PostPreview}
                          />
                        </InstantSearch>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="custom-shape-divider-bottom">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default HomeComponent
