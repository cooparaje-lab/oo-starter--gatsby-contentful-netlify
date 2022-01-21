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
import { graphql} from "gatsby"
import Fade from "react-reveal/Fade"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { VscFoldDown } from "react-icons/vsc"
import CardRecursos from "../components/CardRecursos"

export const pageQuery = graphql`
  query LastResoourseWidget {
    allContentfulRecursos(sort: { fields: updatedAt, order: DESC }, limit: 1) {
      edges {
        node {
          id
          title
          slug
          tags
          url
          createdAt(locale: "es", formatString: "Do MMMM, YYYY")
          category
          excerpt {
            excerpt
            childMarkdownRemark {
              timeToRead
              excerpt(pruneLength: 150)
            }
          }
          languageEnglish
          espacio {
            title
            slug
            icono
          }
          featuredImg {
            fixed(width: 200, height: 200) {
              ...GatsbyContentfulFixed_withWebp_noBase64
            }
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    site {
      buildTime(locale: "es", formatString: "Do MMMM YYYY")
    }
  }
`

const searchClient = algoliasearch(
  "K8WTAMXCZT",
  "91627040f2b233f6958fdbdbe2b6193d"
)
//import Fade from "react-reveal/Fade"

const HomeComponent = ({ data, pageContext, location }) => {
  const Recurso = data.allContentfulRecursos.edges
  return (
    <>
      <Layout>
        <Seo title="Inicio" />
        <div className="relative flex flex-col items-center justify-center py-3 text-center bg-gradient-to-r from-teal-400 to-gray-500">
          <div className="relative z-50 flex flex-col w-full pb-6 md:pb-8 ">
            <div className="flex flex-col items-center justify-center px-3 pt-32 bg-gradient-to-b from-indigo-800 to-transparent ">
              <p className="pb-6 font-mono font-bold opacity-60 text-green-50">
                Última actualización <br/> el {data.site.buildTime}
              </p>
              <div className="w-full max-w-2xl mx-auto">
                {Recurso.map(({ node }) => {
                  return (
                    <Fade cascade>
                      <CardRecursos card={node} />
                    </Fade>
                  )
                })}
              </div>
              <AnchorLink
                href="#buscador"
                aria-label="Buscador"
                className="mt-6 font-serif text-3xl text-center text-white md:text-4xl"
              >
                <VscFoldDown className="animate-pulse "/>
              </AnchorLink>
            </div>
            <div className="flex flex-col w-full min-h-screen px-0 pt-32">
              <div
                className="w-full max-w-full px-6 pt-24 mx-auto md:pt-6"
                id="buscador"
              >
                <InstantSearch searchClient={searchClient} indexName="recursos">
                  <div className="flex flex-col items-start justify-start p-1 mb-6 md:flex-row">
                    <div className="items-center justify-between hidden pt-1 font-mono text-2xl font-medium text-white opacity-50 md:flex md:w-72">
                      <span>Espacios</span>
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
                          'Probá con "Juegos", "Arte", "Plantas", "Radios" y/o "etc"',
                      }}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="relative flex flex-col w-full md:w-72">
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
            className="z-0 opacity-5 backgroundVideoFixed"
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
