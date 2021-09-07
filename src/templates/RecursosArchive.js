import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import CardRecursos from "../components/CardRecursos"
import Seo from "../components/seo"
import Fade from "react-reveal/Fade"

const RecursosArchive = ({ data, pageContext, location }) => {
  const Recurso = data.allContentfulRecursos.edges

  return (
    <Layout location={location}>
      <Seo title="Recursos" />
      <div className="flex flex-col items-center justify-start w-full py-6 mb-2 text-center bg-gray-900">
        <h1 className="w-full max-w-6xl px-8 pt-2 m-auto font-sans text-2xl font-bold text-center text-white">Últimos recursos encontrados</h1>
        <h3 className="p-3 pt-2 pb-6 font-mono font-bold text-center text-gray-300 uppercase">
          actualizado el {data.site.buildTime}
        </h3>
      </div>
      <div className="grid justify-center w-full max-w-6xl grid-cols-1 gap-2 p-2 m-auto overflow-hidden md:p-6 md:grid-cols-2">
        {Recurso.map(({ node }) => {
          return (
            <div className="relative w-full px-3 overflow-hidden text-center md:mb-3 " key={node.slug}>
              <Fade cascade>
                <CardRecursos card={node} />
              </Fade>
            </div>
          )
        })}
      </div>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export default RecursosArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulRecursos(
      sort: { fields: createdAt, order: DESC }
      limit: $limit
      skip: $skip
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
      buildTime(locale: "es", formatString: "dddd Do - MMMM YYYY")
    }
  }
`
