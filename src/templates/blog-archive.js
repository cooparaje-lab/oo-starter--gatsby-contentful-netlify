import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"

const BlogArchive = ({ data, pageContext, location }) => {
  const posts = data.allContentfulBlog.edges

  return (
    <Layout location={location}>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        return (
          <article key={node.slug}>
            <header>
              <h3>
                <Link to={node.slug}> {title} </Link>
              </h3>
              <small>{node.date}</small>
            </header>
          </article>
        )
      })}

      <Pager pageContext={pageContext} />
    </Layout>
  )
}

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
