import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import { GoLinkExternal } from "react-icons/go"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Fade from "react-reveal/Fade"
//import ReactTooltip from "react-tooltip"
import tw from "twin.macro"
import { BigPlayButton, Player } from "video-react"
import { Article, ArticleText } from "../components/import"
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
      } else {
        if (node.data.target.fields.file["es-AR"].contentType === "video/mp4") {
          return (
            <Fade>
              <Player src={node.data.target.fields.file["es-AR"].url}>
                <BigPlayButton position="center" />
              </Player>
            </Fade>
          )
        } else {
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
        }
      }
    },
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="inline-block pb-0 font-bold border-b border-indigo-500 hover:bg-blue-700 hover:text-white"
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

const RecursoPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulRecursos
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO
        title={`${post.title}`}
        description={`${post.excerpt.excerpt}`}
        image={`${post.featuredImg.file.url}`}
      />

      <Article>
        <Heros>
          <TextContainer>
            <h1>{post.title}</h1>
            <p tw="text-white text-3xl font-mono text-center mb-6 ">
              {post.excerpt.excerpt}
            </p>

            {post.childContentfulRecursosArticleRichTextNode ? (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <a
                  className="flex items-center justify-center w-40 px-3 py-2 font-mono text-lg font-bold transition-all duration-200 bg-orange-500 hover:bg-orange-600"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white">visitar web</span>
                  <GoLinkExternal className="inline-block ml-2 text-white" />
                </a>
                {post.childContentfulRecursosArticleRichTextNode && (
                  <AnchorLink
                    href={`#${kebabCase(post.slug)}`}
                    className="flex items-center justify-center w-40 px-3 py-2 font-mono text-lg font-bold text-white transition-all duration-200 bg-green-500 hover:bg-green-600"
                    aria-label="Ver mas informacion en detalle"
                  >
                    <span>Más detalles</span>
                  </AnchorLink>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                <a
                  className="flex items-center justify-center w-40 px-3 py-2 font-mono text-lg font-bold transition-all duration-200 bg-orange-500 hover:bg-orange-600"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white">visitar web</span>
                  <GoLinkExternal className="inline-block ml-2 text-white" />
                </a>
              </div>
            )}
            <div className="mt-4">
              {post.espacio ? (
                <div className="flex justify-center text-lg text-left">
                  {post.espacio.map((item, i) => (
                    <Link
                      to={`/espacios/${kebabCase(item.slug)}/`}
                      className="flex items-center px-4 py-1 my-2 mr-2 hover:underline"
                      key={i}
                    >
                      <span className="mr-1 text-2xl">{item.icono}</span>
                      <b className="font-mono text-base text-blue-100 ">
                        {item.title}
                      </b>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="hidden"></div>
              )}
            </div>
          </TextContainer>
          <ImgContainer>
            <Img
              title={post.title}
              alt={post.title}
              className="w-full h-screen"
              fluid={post.featuredImg.fluid}
            />
          </ImgContainer>
        </Heros>

        {post.childContentfulRecursosArticleRichTextNode ? (
          <div
            className="w-full max-w-2xl pt-24 m-auto mt-2 article"
            id={post.slug}
          >
            {documentToReactComponents(
              post.childContentfulRecursosArticleRichTextNode.json,
              options
            )}
          </div>
        ) : (
          <div className="hidden"></div>
        )}

        <PageNav>
          <div className="flex items-end justify-start flex-1 w-full">
            {prev && (
              <Link to={`/recursos/${kebabCase(prev.slug)}/`} className="flex-col" rel="prev">
                {prev.title} <br/>  <span className="text-2xl">←</span>
              </Link>
            )}
          </div>

          <div className="flex items-end justify-end flex-1 w-full" style={{ justifySelf: "flex-end" }}>
            {next && (
              <Link to={`/recursos/${kebabCase(next.slug)}/`} className="flex flex-col text-right" rel="next">
                {next.title} <br/> <span className="text-2xl">→</span>
              </Link>
            )}
          </div>
        </PageNav>
      </Article>
    </Layout>
  )
}

const TextContainer = styled.header`
  ${tw`relative z-20 flex flex-col items-center justify-center w-full max-w-4xl p-5 m-auto text-center`}

  h1 {
    ${tw`pt-0 m-0 mt-2 mb-3 font-sans text-4xl font-bold text-center text-white`}

    body.dark & {
      ${tw`text-blue-100`}
    }
  }
  h2 {
    ${tw`m-0 mt-2 font-mono text-2xl font-bold text-left text-blue-100`}

    body.dark & {
      ${tw`text-blue-100`}
    }
  }
`
const ImgContainer = styled.div`
  ${tw`absolute top-0 left-0 right-0 z-0 w-full m-auto mt-0 mb-12 overflow-hidden text-left`}

  img {
    ${tw`mb-0`}
    opacity: 0.2 !important;
  }
  body.dark & {
    img {
      opacity: 0.2 !important;
    }
  }
`

const PageNav = styled.nav`
  ${tw`bottom-0 flex justify-between w-full p-6 py-12 m-auto md:fixed `}
  a {
    ${tw`px-4 py-2 font-mono font-bold text-white md:text-blue-900 md:bg-white `}
  }
  div {
    ${tw`w-full `}
  }
`

const Heros = styled.div`
  ${tw`relative flex items-center justify-center py-6 overflow-hidden bg-blue-900`}
  min-height: 100vh;
  body.dark & {
    ${tw`bg-blue-900`}
  }
`

export default RecursoPostTemplate

export const pageQuery = graphql`
  query RecursoBySlug($slug: String!) {
    contentfulRecursos(slug: { eq: $slug }) {
      id
      title
      slug
      url
      tags
      childContentfulRecursosArticleRichTextNode {
        json
      }
      excerpt {
        excerpt
      }
      espacio {
        title
        slug
        icono
      }

      featuredImg {
        fixed(width: 1900, height: 1200) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
        file {
          url
        }
        fluid(maxWidth: 2000) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
