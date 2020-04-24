// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allContentfulBlog
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout>
      <SEO title="Tags" />

      <TagsContainer>
        <h1>{tagHeader}</h1>
        <div>
          {edges.map(({ node }) => {
            const { title, date, slug } = node

            return (
              <div
                key={slug}
                css={tw`pb-2 my-3 mb-6 text-4xl font-semibold leading-snug truncate`}
              >
                <Link to={`/blog/${kebabCase(slug)}/`}>{title}</Link>
              </div>
            )
          })}
        </div>
        <Link to="/etiquetas">Mostrar todo</Link>
      </TagsContainer>
    </Layout>
  )
}

const TagsContainer = styled.div`
  ${tw`max-w-6xl min-h-screen pt-12 m-auto`}

  h1 {
    ${tw`font-mono text-4xl`}
  }
`

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allContentfulBlog(
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
        }
      }
    }
  }
`
