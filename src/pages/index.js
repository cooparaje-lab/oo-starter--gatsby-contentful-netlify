import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./algolia.css"
import { graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { VscFoldDown } from "react-icons/vsc"
import CardRecursos from "../components/CardRecursos"
import EspaciosIcons from "./espacios/EspaciosIcons"
import { Link } from "gatsby"

export const pageQuery = graphql`
  query LastResoourseWidget {
    allContentfulRecursos(sort: { fields: createdAt, order: DESC }, limit: 1) {
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
    lastUpdated: allContentfulRecursos(
      sort: { fields: updatedAt, order: DESC }
      limit: 6
    ) {
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

const HomeComponent = ({ data, pageContext, location }) => {
  const Recurso = data.allContentfulRecursos.edges
  const LastUpdated = data.lastUpdated.edges
  return (
    <>
      <Layout>
        <Seo title="Inicio" />
        <div className="relative flex flex-col items-center justify-center pt-3 text-center bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="relative z-50 flex flex-col w-full">
            <div className="flex flex-col items-center justify-center px-3 pt-20 pb-12 bg-gradient-to-b from-indigo-800 to-transparent ">
              <p className="pb-3 font-mono font-bold text-white opacity-80">
                último recurso agregado
              </p>
              <div className="w-full max-w-3xl mx-auto">
                {Recurso.map(({ node }) => {
                  return (
                    <Fade cascade>
                      <CardRecursos card={node} />
                    </Fade>
                  )
                })}
              </div>
              <AnchorLink
                href="#ultimos"
                aria-label="Buscador"
                className="mt-6 font-serif text-3xl text-center text-white md:text-4xl"
              >
                <VscFoldDown className="animate-pulse " />
              </AnchorLink>
            </div>
            <div className="group">
              <span className="hidden font-mono text-xs text-white duration-1000 opacity-0 group-hover:opacity-100 md:block">
                Desplazar por los espacios: Shift + scroll mouse
              </span>
              <div className="relative flex items-center justify-start w-full py-1 mt-1 overflow-x-auto overflow-y-hidden bg-gray-800 border-t-2 border-b-2 border-gray-900 espaciosIcons">
                <EspaciosIcons />
              </div>
            </div>
            <div className="py-12 bg-gray-900" id="ultimos">
              <p className="pb-3 mt-12 font-mono font-bold text-white opacity-80">
                Última actualización: {data.site.buildTime}
              </p>
              <div className="grid w-full max-w-full gap-2 mx-auto md:grid-cols-2">
                {LastUpdated.map(({ node }) => {
                  return (
                    <Fade cascade>
                      <CardRecursos card={node} />
                    </Fade>
                  )
                })}
              </div>
              <Link
                to="/sumar"
                className="relative z-50 transition-opacity duration-700 rounded-md shadow-sm"
              >
                <span className="inline-flex items-center px-4 py-2 mt-6 font-mono text-xl font-bold leading-6 text-yellow-800 transition duration-150 ease-in-out bg-yellow-500 border border-yellow-400 rounded-md hover:text-yellow-700 focus:border-yellow-300">
                  <span className="inline-block">Ver más recursos</span>
                </span>
              </Link>
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
