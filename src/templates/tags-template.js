// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
//import { kebabCase } from "lodash"
import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRecursos from "../components/CardRecursos"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allContentfulRecursos
  const tagHeader = `${totalCount} recursos ${
    totalCount === 1 ? "" : "s"
  } con la etiqueta "${tag}"`
  return (
    <Layout>
      <SEO title={`Etiqueta ${tag}`} />

      <TagsContainer>
        <h1>{tagHeader}</h1>
        <div>
          {edges.map(({ node }) => {
            return <CardRecursos card={node} />
          })}
        </div>
        <div tw={"mt-12 text-center"}>
          <Link
            to="/etiquetas"
            tw="relative z-10 px-5 mr-2 py-2 my-3 font-mono font-bold bg-white border-b-2 hover:border-indigo-500"
          >
            Mostrar todas las etiquetas
          </Link>
        </div>
      </TagsContainer>
    </Layout>
  )
}

const TagsContainer = styled.div`
  ${tw`max-w-2xl pt-12 m-auto`}

  h1 {
    ${tw`mb-12 font-mono text-xl text-center`}

    body.dark & {
      ${tw`text-indigo-200`}
    }
  }
`

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
