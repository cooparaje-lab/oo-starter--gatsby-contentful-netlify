import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "./post.css"
import Hero from "../components/hero"
import get from "lodash/get"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <p className="my-3 text-lg">{children}</p>
const website_url = "https://www.lnqradio.com"
const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: embedded => (
      <div dangerouslySetInnerHTML={{ __html: embedded }} />
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      }
      return (
        <div className="post-image">
          <img
            className="w-full"
            alt={node.data.target.fields.title["en-US"]}
            src={node.data.target.fields.file["en-US"].url}
          />
        </div>
      )
    },
    [INLINES.HYPERLINK]: node => {
      return (
        <a
          href={node.data.uri}
          className="font-bold border-b border-red-500 hover:bg-red-700 hover:text-white"
          target={`${
            node.data.uri.startsWith(website_url) ? "_self" : "_blank"
          }`}
          rel={`${
            node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
          }`}
        >
          {node.content[0].value}
        </a>
      )
    },
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
  },
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulBlog
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <Hero
        heading={post.title}
        text={post.title}
        slug={post.slug}
        image={post.featuredImg.fluid}
      />
      <article>
        <hr />
        <div>
          <p> {post.date} </p>
          <Link to="/posts">Back to Posts</Link>
          <div>
            Tags:{" "}
            {post.tags.map((tag, i) => [
              <Link to={`/tags/${kebabCase(tag)}/`} key={i}>
                {tag}
                {i < post.tags.length - 1 ? ", " : ""}
              </Link>,
            ])}
          </div>
        </div>
        <hr />
        <div
          className="w-full max-w-2xl m-auto mt-2 text-white article"
          id={post.slug}
        >
          {documentToReactComponents(
            post.childContentfulBlogArticleRichTextNode.json,
            options
          )}
        </div>
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
      featuredImg {
        fixed(width: 940, height: 300) {
          ...GatsbyContentfulFixed
        }
        fluid(maxWidth: 700) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
