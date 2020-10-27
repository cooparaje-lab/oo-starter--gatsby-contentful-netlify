import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
//import Img from "gatsby-image"
//import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Fade from "react-reveal/Fade"
import tw from "twin.macro"
import CardRecursos from "../components/CardRecursos"
import { Article } from "../components/import"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./post.css"

const EspacioPostTemplate = ({ data, pageContext, location }) => {
  const espacio = data.contentfulEspacios
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO
        title={`Espacio ${espacio.title}`}
        description={`${espacio.excerpt.excerpt}`}
      />

      <Article>
        <TextContainer>
          <Fade duration={800} delay={600}>
            <h1>{espacio.icono}</h1>
            <h1>{espacio.title}</h1>
            <p>{espacio.excerpt.excerpt}</p>
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
              <Fade duration={800} delay={600} key={item.slug}>
                <CardRecursos card={item} />
              </Fade>
            ))}
          </RecursosList>
        ) : (
          <div className="text-center text-gray-500 ">Proximamente</div>
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

  p {
    ${tw`m-0 mt-2 font-mono text-2xl font-bold text-center`}

    body.dark & {
      ${tw`text-gray-100`}
    }
  }
`

const RecursosList = styled.div`
  ${tw`flex flex-col justify-center max-w-3xl pt-12 m-auto`}
  body.dark & {
    ${tw`text-indigo-200`}
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
      excerpt {
        excerpt
      }
      recursos {
        title
        slug
        url
        createdAt(locale: "es", formatString: "Do MMMM, YYYY")
        category
        espacio {
          title
          slug
          icono
        }
        excerpt {
          excerpt
        }
        featuredImg {
          fixed(width: 180, height: 180) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          fluid(maxWidth: 1500) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }

      icono
      childContentfulEspaciosSummaryRichTextNode {
        json
      }
    }
  }
`
