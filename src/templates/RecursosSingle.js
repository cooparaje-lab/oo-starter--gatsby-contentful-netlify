import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "./post.css"
import SEO from "../components/seo"
import tw from "tailwind.macro"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"
import { Player, BigPlayButton } from "video-react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Article, ArticleText } from "../components/import"
import ReactTooltip from "react-tooltip"
import { GoLinkExternal } from "react-icons/go"
const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <ArticleText>{children}</ArticleText>
const website_url = "https://www.cooparaje.com.ar"
const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: embedded => (
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: embedded }} />
      </Fade>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
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
    [INLINES.HYPERLINK]: node => {
      return (
        <a
          href={node.data.uri}
          className="inline-block pb-0 font-bold border-b border-indigo-500 hover:bg-indigo-700 hover:text-white"
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
      <SEO title="Recurso" />

      <Article>
        <Heros>
          <div className="max-w-2xl m-auto mt-12">
            {post.espacio ? (
              <Fade bottom duration={1200} delay={200}>
                <div className="flex justify-center text-lg text-center">
                  <ReactTooltip
                    place="bottom"
                    type="dark"
                    effect="solid"
                    className="bg-red-500 shadow"
                  />
                  {post.espacio.map((item, i) => (
                    <Link
                      to={`/espacios/${kebabCase(item.slug)}/`}
                      className="flex flex-col px-4 py-1 mx-2 my-2 rounded-full hover:bg-indigo-500"
                      key={i}
                      data-tip={item.title}
                    >
                      <span className="text-2xl">{item.icono}</span>
                      <b className="hidden font-mono text-sm text-gray-100">
                        {item.title}
                      </b>
                    </Link>
                  ))}
                </div>
              </Fade>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
          <TextContainer>
            <Fade bottom duration={800} delay={600}>
              <h1>{post.title}</h1>
            </Fade>
            <Fade bottom duration={600} delay={800}>
              <a
                className="inline-block px-3 py-2 pb-4 mt-3 font-mono text-base font-bold transition-all duration-200 bg-orange-500 hover:bg-orange-600"
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white">Visitar website</span>
                <GoLinkExternal className="inline-block ml-2 text-white" />
              </a>
            </Fade>
          </TextContainer>
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
        </Heros>

        <div className="w-full max-w-2xl m-auto mt-2 article" id={post.slug}>
          {documentToReactComponents(
            post.childContentfulRecursosArticleRichTextNode.json,
            options
          )}
        </div>
        <ImgContainer>
          <Fade duration={1200}>
            <Img
              title={post.title}
              alt={post.title}
              fluid={post.featuredImg.fluid}
            />
          </Fade>
        </ImgContainer>
        <TextContainer>
          {post.blog ? (
            <div className="hidden">
              <h1 className="text-lg text-center">
                Entrada de blog relacionada
              </h1>
              {post.blog.map((item, i) => (
                <Item className="text-center">
                  <Link to={`/blog/${kebabCase(item.slug)}/`} rel="prev">
                    {item.title}
                  </Link>
                </Item>
              ))}
            </div>
          ) : (
            <div className="hidden text-center text-gray-500">Proximamente</div>
          )}
        </TextContainer>
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
  ${tw`relative max-w-2xl px-0 m-auto text-center`}
  h1 {
    ${tw`pt-0 m-0 mt-8 font-mono text-4xl font-bold text-center text-white`}

    body.dark & {
      ${tw`text-gray-100`}
    }
  }
  h2 {
    ${tw`m-0 mt-2 font-mono text-4xl font-bold text-center`}

    body.dark & {
      ${tw`text-gray-100`}
    }
  }
`
const ImgContainer = styled.div`
  ${tw`w-full max-w-2xl m-auto mt-2 mb-2 overflow-hidden`}

  img {
    ${tw`mb-0`}
  }
  body.dark & {
    img {
      opacity: 0.5 !important;
    }
  }
`

const Item = styled.div`
  ${tw`w-full h-24 px-5 m-2 my-3 font-mono text-lg font-thin leading-snug text-center border border-gray-100 shadow-md`}
  ${tw`flex items-center justify-start cursor-pointer`}
  transition: all 1.1s;
  transform: translateY(0);
  &:hover {
    ${tw`shadow-lg `}
    transform: translateY(-5px);
  }

  body.dark & {
    ${tw`text-indigo-200 border-gray-700`}
  }
`

const PageNav = styled.nav`
  ${tw`flex justify-between max-w-6xl p-6 py-12 m-auto`}
  a {
    ${tw`font-mono font-bold`}
  }
  body.dark & a {
    ${tw`text-indigo-300`}
  }
`

const Heros = styled.div`
  ${tw`relative pt-0 overflow-hidden bg-indigo-900`}
  min-height: 60vh;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  body.dark & {
    ${tw`bg-indigo-900`}
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
      espacio {
        title
        slug
        icono
      }
      blog {
        title
        slug
      }
      featuredImg {
        fixed(width: 1900, height: 550) {
          ...GatsbyContentfulFixed_withWebp_noBase64
        }
        fluid(maxWidth: 1200) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
