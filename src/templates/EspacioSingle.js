import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "./post.css"
import SEO from "../components/seo"
import tw from "tailwind.macro"
//import Img from "gatsby-image"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Article, ArticleText } from "../components/import"

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
    [INLINES.HYPERLINK]: node => {
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

const EspacioPostTemplate = ({ data, pageContext, location }) => {
  const espacio = data.contentfulEspacios
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title="Espacio" />

      <Article>
        <TextContainer>
          <Fade duration={800} delay={600}>
            <h1>{espacio.icono}</h1>
            <h1>{espacio.title}</h1>
          </Fade>
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
        </TextContainer>
        {espacio.recursos ? (
          <RecursosList>
            {espacio.recursos.map((item, i) => (
              <Fade duration={800} delay={600}>
                <Item>
                  <Link to={`/recursos/${kebabCase(item.slug)}/`} rel="prev">
                    {item.title}
                  </Link>
                </Item>
              </Fade>
            ))}
          </RecursosList>
        ) : (
          <div className="hidden text-center text-gray-500">Proximamente</div>
        )}

        <div className="w-full max-w-2xl m-auto article" id={espacio.slug}>
          <PageNav>
            <div>
              {prev && (
                <Link to={`/espacios/${kebabCase(prev.slug)}/`} rel="prev">
                  ← {prev.title}
                </Link>
              )}
            </div>

            <div style={{ justifySelf: "flex-end" }}>
              {next && (
                <Link to={`/espacios/${kebabCase(next.slug)}/`} rel="next">
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

const TextContainer = styled.header`
  ${tw`relative w-full px-1 pt-24 pb-32 m-auto mb-2 bg-indigo-100`}
  body.dark & {
    ${tw`bg-indigo-900`}
  }
  h1 {
    ${tw`m-0 mt-2 font-mono text-4xl font-bold text-center`}

    body.dark & {
      ${tw`text-gray-100`}
    }
  }
`

const RecursosList = styled.div`
  ${tw`flex flex-col justify-center max-w-2xl pt-12 m-auto`}
  body.dark & {
    ${tw`text-indigo-200`}
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
  ${tw`flex justify-between py-12`}
  a {
    ${tw`font-mono font-bold`}
  }
  body.dark & a {
    ${tw`text-indigo-300`}
  }
`

export default EspacioPostTemplate

export const pageQuery = graphql`
  query EspacioBySlug($slug: String!) {
    contentfulEspacios(slug: { eq: $slug }) {
      id
      title
      slug
      recursos {
        title
        slug
      }
      proyectos {
        title
        slug
      }
      icono
      childContentfulEspaciosSummaryRichTextNode {
        json
      }
    }
  }
`
