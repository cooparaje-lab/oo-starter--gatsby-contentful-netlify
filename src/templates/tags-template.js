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

      <div className="w-full max-w-6xl min-h-screen py-12 mx-auto">
        <h1 className="mb-12 font-mono text-xl text-center text-gray-200">{tagHeader}</h1>
        <div>
          {edges.map(({ node }) => {
            return <CardRecursos card={node} />
          })}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/etiquetas"
            className="btn"
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
          url
          tags
          languageEnglish
          excerpt {
            excerpt
            childMarkdownRemark {
              timeToRead
              excerpt(pruneLength: 160)
            }
          }
          espacio {
            title
            slug
            icono
          }
          featuredImg {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 600
              height: 600
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
  }
`
