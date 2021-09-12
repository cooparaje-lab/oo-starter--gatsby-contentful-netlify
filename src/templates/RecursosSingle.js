import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import { GoLinkExternal } from "react-icons/go"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import BannerSumar from "../components/Sumar/BannerSumar"

import Seo from "../components/seo"
import "./post.css"
import { Player, BigPlayButton } from "video-react"
const RecursoPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulRecursos
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <Seo
        title={`${post.title}`}
        description={`${post.excerpt.excerpt}`}
        image={`${post.featuredImg.file.url}`}
      />

      <div className="max-w-full m-auto ">
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-900 bg-gradient-to-b from-gray-900 via-gray-800">
          <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl p-5 pt-0 m-auto text-center">
            <div>
              {post.espacio ? (
                <div className="flex justify-center text-lg text-left">
                  {post.espacio.map((item, i) => (
                    <Link
                      to={`/espacios/${kebabCase(item.slug)}/`}
                      className="flex items-center px-4 py-1 my-2 mr-2 hover:underline"
                      key={i}
                    >
                      <span className="mr-1 text-2xl">{item.icono}</span>
                      <b className="font-mono text-base text-gray-100 ">
                        {item.title}
                      </b>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="hidden"></div>
              )}
            </div>
            <h1 className="pt-0 m-0 mt-2 mb-3 font-serif text-4xl font-bold text-center text-white">
              {post.title}
            </h1>
            <p className="max-w-xl mx-auto mt-3 mb-6 font-sans text-3xl text-center text-white ">
              {post.excerpt.excerpt}
            </p>

            {post.article ? (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 ">
                {post.article && (
                  <AnchorLink
                    href={`#${kebabCase(post.slug)}`}
                    className="flex items-center justify-center px-3 py-1 font-mono text-lg font-bold text-white transition-all duration-200 bg-yellow-500 hover:bg-yellow-600"
                    aria-label="Ver mas informacion en detalle"
                  >
                    <span>Más detalles</span>
                  </AnchorLink>
                )}
                <a
                  className="flex items-center justify-center px-3 py-1 font-mono text-lg font-bold text-white transition-all duration-200 bg-green-500 rounded hover:bg-green-600"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white">visitar web</span>
                  <GoLinkExternal className="inline-block ml-2 text-white" />
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                <a
                  className="flex items-center justify-center px-3 py-1 font-mono text-lg font-bold text-white transition-all duration-200 bg-green-500 rounded hover:bg-green-600"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white">visitar web</span>
                  <GoLinkExternal className="inline-block ml-2 text-white" />
                </a>
              </div>
            )}
            {post.languageEnglish && (
              <div className="flex flex-col w-full max-w-md pt-2 mx-auto my-6 mt-6 font-mono font-bold text-green-100 uppercase duration-200 bg-gray-900 rounded group hover:bg-green-900 hover:text-green-600">
                En Inglés
                <a
                  href={`https://translate.google.com/translate?sl=auto&tl=es&u=${post.url}`}
                  target="_blank"
                  className="py-1 text-green-500 duration-200 border-b-2 border-green-500 group-hover:border-green-100 group-hover:text-green-100"
                  rel="noopener noreferrer"
                >
                  auto-traducir al español
                </a>
              </div>
            )}
          </div>

          <div className="absolute top-0 left-0 right-0 z-0 w-full m-auto mt-0 mb-12 overflow-hidden text-left opacity-10">
            <Img
              title={post.title}
              alt={post.title}
              className="w-full h-screen"
              fluid={post.featuredImg.fluid}
            />
          </div>
        </div>

        {post.article ? (
          <div
            id={post.slug}
            className="relative z-10 max-w-3xl px-10 py-12 mx-auto -mt-20 font-sans prose prose-lg bg-gray-900 md:prose-xl "
          >
            {post.article && renderRichText(post.article, options)}
          </div>
        ) : (
          <div className="hidden"></div>
        )}

        <div className="relative bottom-0 z-50 flex justify-between w-full p-2 py-2 mx-auto bg-gray-900 bg-opacity-90 ">
          <div className="flex items-end justify-start flex-1 w-full">
            {prev && (
              <Link
                to={`/recursos/${kebabCase(prev.slug)}/`}
                className="flex items-center px-4 py-2 font-mono text-sm font-bold text-white duration-700 hover:text-yellow-500 "
                rel="prev"
              >
                <span className="mr-2 text-lg">←</span> {prev.title}
              </Link>
            )}
          </div>
          {post.tags && (
            <div className="relative flex items-center justify-center w-full px-3 space-x-2 duration-200 bg-gray-900 bg-opacity-60 hover:bg-opacity-90">
              {post.tags.map((tag, i) => [
                <Link
                  to={`/etiquetas/${kebabCase(tag)}/`}
                  key={i}
                  className="inline-block px-3 py-1 my-2 font-mono text-xs font-bold text-white uppercase bg-gray-700 rounded hover:text-yellow-500"
                >
                  #{tag}
                  {i < post.tags.length - 1 ? "" : ""}
                </Link>,
              ])}
            </div>
          )}
          <div
            className="flex items-end justify-end flex-1 w-full"
            style={{ justifySelf: "flex-end" }}
          >
            {next && (
              <Link
                to={`/recursos/${kebabCase(next.slug)}/`}
                className="flex items-center px-4 py-2 font-mono text-sm font-bold text-right text-white duration-700 hover:text-yellow-500"
                rel="next"
              >
                {next.title} <span className="ml-2 text-lg">→</span>
              </Link>
            )}
          </div>
        </div>
        <BannerSumar />
      </div>
    </Layout>
  )
}

export default RecursoPostTemplate

export const pageQuery = graphql`
  query RecursoBySlug($slug: String!) {
    contentfulRecursos(slug: { eq: $slug }) {
      id
      title
      slug
      url
      tags
      languageEnglish
      article {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            file {
              url
              contentType
            }
          }
          ... on ContentfulRecursos {
            contentful_id
            __typename
            title
            url
            slug
            featuredImg {
              file {
                url
              }
            }
          }
        }
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

const Bold = ({ children }) => <span className="font-bold">{children}</span>

const Text = ({ children }) => <p className="px-2 text-white">{children}</p>

const website_url = "https://www.cooparaje.com.ar"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (embedded) => (
      <Fade>
        <div
          className="my-8 aspect-w-16 aspect-h-9"
          dangerouslySetInnerHTML={{ __html: embedded }}
        />
      </Fade>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.file.contentType === "video/mp4") {
          return (
            <div className="max-w-6xl p-0 mx-auto my-6 mb-12 aspect-h-9 aspect-w-16">
              <Player src={node.data.target.file.url} loop={true}>
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <div className="relative overflow-hidden rounded-md cursor-pointer post-image">
                <img
                  className="w-full mx-auto"
                  alt={node.data.target.title}
                  src={node.data.target.file.url}
                />
              </div>
            </div>
          )
        }
      }
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        return (
          <div className="relative flex flex-col-reverse items-center justify-center w-full max-w-3xl p-4 py-24 mx-auto mb-6 overflow-hidden duration-700 ease-in-out transform border border-gray-900 rounded-md md:flex-row from-gray-900 via-gray-900 bg-gradient-to-br hover:-translate-y-2 hover:bg-gray-900">
            <div className="relative z-10 flex flex-col text-white">
              <Link
                to={`/recursos/${node.data.target.slug}`}
                className="relative z-10 w-full font-serif text-center text-white no-underline"
              >
                <h3 style={{ margin: "0" }}>{node.data.target.title}</h3>
              </Link>
            </div>
            <div className="absolute inset-0 opacity-40">
              <img
                className="object-cover w-full py-2 mx-auto"
                style={{ marginTop: "0", marginBottom: "0" }}
                alt={node.data.target.title}
                src={node.data.target.featuredImg.file.url}
              />
            </div>
          </div>
        )
      }
    },

    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="font-bold text-white external-link hover:text-gray-200"
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
