import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import Fade from "react-reveal/Fade"
import tw from "twin.macro"
import Hero from "../components/hero"
import { Article, ArticleText, HeroContainer } from "../components/import"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./post.css"
const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <ArticleText>{children}</ArticleText>
const website_url = "https://www.cooparaje.com.ar"
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (embedded) => (
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: embedded }} />
      </Fade>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      }
      return (
        <Fade>
          <div className="post-image">
            <img
              className="w-full"
              alt={node.data.target.fields.title["es-AR"]}
              src={node.data.target.fields.file["es-AR"].url}
            />
          </div>
        </Fade>
      )
    },
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="font-bold border-b border-indigo-500 hover:bg-indigo-700 hover:text-white"
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
      <SEO
        title={`${post.title}`}
        description={`${post.excerpt.excerpt}`}
        image={`${post.featuredImg.file.url}`}
      />

      <Article>
        <HeroContainer>
          <Hero
            heading={post.title}
            slug={post.slug}
            image={post.featuredImg.fixed}
          />
          <div className="custom-shape-divider-bottom-1594014676">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </HeroContainer>

        <div className="w-full mt-2 article" id={post.slug}>
          <div className="max-w-2xl m-auto">
            {documentToReactComponents(
              post.childContentfulBlogArticleRichTextNode.json,
              options
            )}
          </div>
          <PageNav>
            <div>
              {prev && (
                <Link to={`/articulos/${kebabCase(prev.slug)}/`} rel="prev">
                  ← {prev.title}
                </Link>
              )}
            </div>

            <div className="justify-end">
              {next && (
                <Link to={`/articulos/${kebabCase(next.slug)}/`} rel="next">
                  {next.title} →
                </Link>
              )}
            </div>
          </PageNav>
        </div>
      </Article>
    </Layout>
  )
}

export default BlogPostTemplate

const PageNav = styled.div`
  ${tw`flex justify-between max-w-6xl py-12 m-auto`}

  a {
    ${tw`relative inline-block px-6 py-3 my-2 mr-2 text-sm font-semibold text-white bg-indigo-500`}

    &:hover {
      top: 1px;
      ${tw`shadow-md`}
    }
    body.dark & {
      ${tw`bg-orange-700`}
    }
  }
`


export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      childContentfulBlogArticleRichTextNode {
        json
      }
      excerpt {
        excerpt
      }
      recursos {
        title
        slug
      }

      featuredImg {
        file {
          url
        }
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