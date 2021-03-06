import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CardRecursos from "../components/CardRecursos"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allContentfulRecursos
  const tagHeader = `${totalCount} recurso${
    totalCount === 1 ? "" : "s"
  } con la etiqueta "${tag}"`
  return (
    <Layout>
      <Seo title={`Etiqueta ${tag}`} />

      <div className="max-w-2xl min-h-screen pt-12 m-auto">
        <h1 className="mb-12 font-mono text-xl text-center text-gray-200">{tagHeader}</h1>
        <div>
          {edges.map(({ node }) => {
            return <CardRecursos card={node} />
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/etiquetas"
            className="relative z-10 px-5 py-2 my-3 mr-2 font-mono font-bold bg-white border-b-2 hover:border-indigo-500"
          >
            Mostrar todas las etiquetas
          </Link>
        </div>
      </div>
    </Layout>
  )
}


export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allContentfulRecursos(
      limit: 2000
      sort: { fields: [id], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          slug
          tags

          excerpt {
            excerpt
            childMarkdownRemark {
              timeToRead
              excerpt(pruneLength: 80)
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
            fluid(maxWidth: 1500) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`
