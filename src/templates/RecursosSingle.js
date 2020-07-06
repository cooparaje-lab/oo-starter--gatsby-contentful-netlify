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
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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

const RecursoPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulRecursos
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title="Post" />

      <Article>
        <Heros>
          <ImgContainer>
            <Fade duration={1200}>
              <Img
                title={post.title}
                alt={post.title}
                fluid={post.featuredImg.fluid}
              />
            </Fade>
          </ImgContainer>
        </Heros>
        <TextContainer>
          <Fade bottom duration={800} delay={600}>
            <h1>{post.title}</h1>
            <h1>{post.espacio.title}</h1>
          </Fade>
        </TextContainer>

        <h2>{post.espacio.title}</h2>
        <div className="w-full max-w-2xl m-auto mt-2 article" id={post.slug}>
          {documentToReactComponents(
            post.childContentfulRecursosArticleRichTextNode.json,
            options
          )}
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
        </div>
        <TextContainer>
          {post.espacio ? (
            <div className="p-3 mt-24 ">
              <p className="text-lg text-center">
                {post.espacio.map((item, i) => (
                  <Link
                    to={`/espacios/${kebabCase(item.slug)}/`}
                    className="inline-block px-4 pt-1 mx-1 font-mono text-white bg-indigo-900"
                  >
                    {item.title}
                  </Link>
                ))}
              </p>
            </div>
          ) : (
            <div className="hidden"></div>
          )}

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
            <div className="text-center text-gray-500">Proximamente</div>
          )}
        </TextContainer>
      </Article>
    </Layout>
  )
}

const TextContainer = styled.header`
  ${tw`relative max-w-2xl px-1 m-auto`}
  h1 {
    ${tw`m-0 mt-12 font-mono text-4xl font-bold text-left`}

    body.dark & {
      ${tw`text-gray-100`}
    }
  }
`
const ImgContainer = styled.div`
  ${tw`max-w-2xl m-auto overflow-hidden`}

  img {
    ${tw`mb-0`}
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
  ${tw`flex justify-between`}
  a {
    ${tw`font-mono font-bold`}
  }
  body.dark & a {
    ${tw`text-indigo-300`}
  }
`

const Heros = styled.div`
  ${tw`relative py-12 overflow-hidden bg-indigo-900`}
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  body.dark & {
    ${tw`bg-gray-900`}
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
