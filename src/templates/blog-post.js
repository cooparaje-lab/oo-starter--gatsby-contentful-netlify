import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

import "./post.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlog
  const { prev, next } = pageContext

  return (
    <Layout location={location}>
      <Link to="/posts">Archive</Link>
      <article>
        <header>
          <h1> {post.title} </h1>
          <p> {post.date} </p>
          <p> {post.tags} </p>
          <div>
            Tags:{" "}
            {post.tags.map((tag, i) => [
              <Link to={`/tags/${kebabCase(tag)}/`} key={i}>
                {tag}
                {i < post.tags.length - 1 ? ", " : ""}
              </Link>,
            ])}
          </div>
        </header>
        <hr />
      </article>

      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {prev && (
            <Link to={prev.slug} rel="prev">
              {" "}
              ← Last Post{" "}
            </Link>
          )}
        </div>

        <div style={{ justifySelf: "flex-end" }}>
          {next && (
            <Link to={next.slug} rel="next">
              {" "}
              Next Post →{" "}
            </Link>
          )}
        </div>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      tags
      childContentfulBlogArticleRichTextNode {
        json
      }
    }
  }
`
