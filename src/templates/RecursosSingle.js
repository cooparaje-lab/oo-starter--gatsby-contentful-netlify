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
import Seo from "../components/SEO"
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
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-900">
          <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl p-5 m-auto text-center">
            <div className="">
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
              <div className="grid grid-cols-1 gap-3 ">
                <a
                  className="flex items-center justify-center px-3 py-2 font-mono text-lg font-bold transition-all duration-200 bg-orange-500 hover:bg-orange-600"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white">visitar web</span>
                  <GoLinkExternal className="inline-block ml-2 text-white" />
                </a>
                {post.article && (
                  <AnchorLink
                    href={`#${kebabCase(post.slug)}`}
                    className="flex items-center justify-center px-3 py-2 font-mono text-lg font-bold text-white transition-all duration-200 bg-green-500 hover:bg-green-600"
                    aria-label="Ver mas informacion en detalle"
                  >
                    <span>Más detalles</span>
                  </AnchorLink>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3">
                <a
                  className="flex items-center justify-center px-3 py-2 font-mono text-lg font-bold transition-all duration-200 bg-orange-500 hover:bg-orange-600"
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white">visitar web</span>
                  <GoLinkExternal className="inline-block ml-2 text-white" />
                </a>
              </div>
            )}
          </div>
          <div className="absolute top-0 left-0 right-0 z-0 w-full m-auto mt-0 mb-12 overflow-hidden text-left opacity-5">
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
            className="max-w-3xl px-3 py-12 mx-auto mt-12 font-sans prose prose-lg md:prose-xl "
          >
            {post.article && renderRichText(post.article, options)}
          </div>
        ) : (
          <div className="hidden"></div>
        )}

        <div className="bottom-0 flex justify-between w-full p-6 py-2 m-auto md:fixed ">
          <div className="flex items-end justify-start flex-1 w-full">
            {prev && (
              <Link
                to={`/recursos/${kebabCase(prev.slug)}/`}
                className="flex items-center px-4 py-2 font-mono font-bold text-white "
                rel="prev"
              >
                <span className="text-2xl">←</span> {prev.title} 
              </Link>
            )}
          </div>

          <div
            className="flex items-end justify-end flex-1 w-full"
            style={{ justifySelf: "flex-end" }}
          >
            {next && (
              <Link
                to={`/recursos/${kebabCase(next.slug)}/`}
                className="flex items-center px-4 py-2 font-mono font-bold text-right text-white"
                rel="next"
              >
                {next.title}  <span className="text-2xl">→</span>
              </Link>
            )}
          </div>
        </div>
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
      article {
        raw
        references {
          contentful_id
          __typename
          title
          file {
            url
            contentType
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

const website_url = "https://www.santuan.com.ar"

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
              <Player src={node.data.target.file.url} loop={true} >
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
          <div className="flex flex-col-reverse items-center justify-between w-full max-w-3xl p-4 mx-auto mb-6 duration-700 ease-in-out transform border border-gray-900 rounded-md md:flex-row from-gray-900 via-gray-900 bg-gradient-to-br hover:-translate-y-2 hover:bg-gray-900">
            <div className="relative z-10 flex flex-col text-white">
              <Link
                to={`/colaboraciones/${node.data.target.slug}`}
                className="relative z-10 font-serif text-center text-white"
              >
                <h3 style={{ margin: "0" }}>{node.data.target.title}</h3>
              </Link>
            </div>
            <div className="">
              <img
                className="object-cover w-auto h-32 py-2 mx-auto"
                style={{ marginTop: "0", marginBottom: "0" }}
                alt={node.data.target.title}
                src={node.data.target.logo.file.url}
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
