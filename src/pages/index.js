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
            gatsbyImageData(
              layout: CONSTRAINED
              width: 500
              height: 500
              quality: 90
              formats: JPG
              backgroundColor: "#ffffff"
              jpegProgressive: false
              placeholder: BLURRED
            )
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
            gatsbyImageData(
              layout: CONSTRAINED
              width: 500
              height: 500
              quality: 90
              formats: JPG
              backgroundColor: "#ffffff"
              jpegProgressive: false
              placeholder: BLURRED
            )
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
              <div className="grid max-w-xl grid-cols-2 gap-2 mx-auto mt-6">
                <Link
                  to="/espacios"
                  className=" btn blue"
                >
                  <span className="">Ver como espacios</span>
                </Link>
                <Link
                  to="/recursos"
                  className=" btn yellow"
                >
                  <span className="">Ver más recursos</span>
                </Link>
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
