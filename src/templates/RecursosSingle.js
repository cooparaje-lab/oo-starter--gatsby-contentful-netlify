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
            <div className="mt-4">
              {post.espacio ? (
                <div className="flex justify-center text-lg text-left">
                  {post.espacio.map((item, i) => (
                    <Link
                      to={`/espacios/${kebabCase(item.slug)}/`}
                      className="flex items-center px-4 py-1 my-2 mr-2 bg-blue-100 hover:underline"
                      key={i}
                    >
                      <span className="mr-1 text-xl">{item.icono}</span>
                      <b className="font-mono text-sm text-blue-800 ">
                        {item.title}
                      </b>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="hidden"></div>
              )}
            </div>
            <h1>{post.title}</h1>
            <p tw="text-white text-3xl font-mono text-center mb-6 ">
              {post.excerpt.excerpt}
            </p>
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
              <AnchorLink
                href={`#${kebabCase(post.slug)}`}
                className="flex items-center justify-center w-40 px-3 py-2 font-mono text-lg font-bold text-white transition-all duration-200 bg-green-500 hover:bg-green-600"
                aria-label="Ver mas informacion en detalle"
              >
                <span>Más detalles</span>
              </AnchorLink>
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

        <div className="w-full max-w-2xl m-auto mt-2 article" id={post.slug}>
          {documentToReactComponents(
            post.childContentfulRecursosArticleRichTextNode.json,
            options
          )}
        </div>

        <PageNav>
          <div>
            {prev && (
              <Link to={`/recursos/${kebabCase(prev.slug)}/`} rel="prev">
                ← {prev.title}
              </Link>
            )}
          </div>

          <div style={{ justifySelf: "flex-end" }}>
            {next && (
              <Link to={`/recursos/${kebabCase(next.slug)}/`} rel="next">
                {next.title} →
              </Link>
            )}
          </div>
        </PageNav>
      </Article>
    </Layout>
  )
}

const TextContainer = styled.header`
  ${tw`relative z-20 flex flex-col items-center justify-center w-full max-w-3xl px-0 pl-5 m-auto text-left`}
  h1 {
    ${tw`pt-0 m-0 mt-2 mb-3 font-sans text-5xl font-bold text-center text-white`}

    body.dark & {
      ${tw`text-blue-100`}
    }
  }
  h2 {
    ${tw`m-0 mt-2 font-mono text-4xl font-bold text-left text-blue-100`}

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
      opacity: 0.333 !important;
    }
  }
`

const PageNav = styled.nav`
  ${tw`flex justify-between max-w-2xl p-6 py-12 m-auto`}
  a {
    ${tw`font-mono font-bold text-blue-300`}
  }
  body.dark & a {
    ${tw`text-blue-300`}
  }
`

const Heros = styled.div`
  ${tw`relative flex items-center justify-center py-6 overflow-hidden bg-blue-900`}
  min-height: 100vh;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
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
