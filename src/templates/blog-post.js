import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "./post.css"
import Hero from "../components/hero"
import SEO from "../components/seo"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  Article,
  HeroContainer,
  Meta,
  ArticleText,
  Tags,
} from "../components/import"

const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <ArticleText>{children}</ArticleText>
const website_url = "https://www.cooparaje.com.ar"
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
            alt={node.data.target.fields.title["es-AR"]}
            src={node.data.target.fields.file["es-AR"].url}
          />
        </div>
      )
    },
    [INLINES.HYPERLINK]: node => {
      return (
        <a
          href={node.data.uri}
          className="font-bold border-b border-blue-500 hover:bg-blue-700 hover:text-white"
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
      <SEO title="Post" />

      <Article>
        <HeroContainer>
          <Hero
            heading={post.title}
            slug={post.slug}
            image={post.featuredImg.fixed}
          />
        </HeroContainer>

        <div className="w-full max-w-2xl m-auto mt-2 article" id={post.slug}>
          <Meta>
            <Link to="/blog">Ver blog</Link>
            <Tags>
              {post.tags.map((tag, i) => [
                <Link to={`/etiquetas/${kebabCase(tag)}/`} key={i}>
                  {tag}
                  {i < post.tags.length - 1 ? ", " : ""}
                </Link>,
              ])}
            </Tags>
          </Meta>
          {documentToReactComponents(
            post.childContentfulBlogArticleRichTextNode.json,
            options
          )}
          <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {prev && (
                <Link to={`/blog/${kebabCase(prev.slug)}/`} rel="prev">
                  ← {prev.title}
                </Link>
              )}
            </div>

            <div style={{ justifySelf: "flex-end" }}>
              {next && (
                <Link to={`/blog/${kebabCase(next.slug)}/`} rel="next">
                  {next.title} →
                </Link>
              )}
            </div>
          </nav>
        </div>
      </Article>
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
        fixed(width: 1900, height: 550) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
        fluid(maxWidth: 1500) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
