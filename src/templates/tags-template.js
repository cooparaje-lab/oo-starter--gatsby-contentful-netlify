// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
            const { title, slug } = node
            const { excerpt } = node.excerpt

            return (
              <Item
                key={slug}
                tw="p-4 my-3 mb-6 text-4xl font-semibold leading-snug truncate"
              >
                <Link to={`/recursos/${kebabCase(slug)}/`}>{title}</Link>
                <Description>{excerpt}</Description>
              </Item>
            )
          })}
        </div>
        <Link
          to="/etiquetas"
          tw="relative z-10 px-5 mr-2 py-2 my-3 font-mono font-bold bg-white border-b-2 hover:border-indigo-500"
        >
          Mostrar todo
        </Link>
      </TagsContainer>
    </Layout>
  )
}

const Description = styled.p`
  ${tw`pb-1 pt-2 text-base font-sans text-left text-gray-700 `}

  body.dark & {
    ${tw`text-indigo-200`}
  }
`

const Item = styled.div`
  ${tw`relative  rounded shadow-md`}
  transition: all .2s;
  top: 0;

  &:hover {
    ${tw``}
    top: 2px;
  }
`

const TagsContainer = styled.div`
  ${tw`max-w-6xl min-h-screen pt-12 m-auto`}

  h1 {
    ${tw`font-mono text-4xl`}

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
          }
        }
      }
    }
  }
`
