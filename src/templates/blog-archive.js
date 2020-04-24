import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
const BlogArchive = ({ data, pageContext, location }) => {
  const posts = data.allContentfulBlog.edges

  return (
    <Layout location={location}>
      <SEO title="Posts" />

      <BlogContainer>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <article key={node.slug}>
              <Title>
                <Link to={`/posts/${kebabCase(node.slug)}/`}> {title} </Link>
              </Title>
            </article>
          )
        })}
      </BlogContainer>
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

const BlogContainer = styled.div`
  ${tw`max-w-6xl min-h-screen pt-12 m-auto`}
`

const Title = styled.h3`
  ${tw`pb-3 text-xl hover:text-blue-400`}
  transition: all .5s;
`

export default BlogArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      sort: { fields: [title], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
