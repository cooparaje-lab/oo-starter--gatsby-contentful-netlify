import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "./post.css"
import Hero from "../components/hero"
import SEO from "../components/seo"
import get from "lodash/get"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

const Bold = ({ children }) => <span className="font-bold">{children}</span>
const Text = ({ children }) => <p className="my-3 text-lg">{children}</p>
const website_url = "https://www.lnqradio.com"
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

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulProyectos
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title="Post" />

      <Article>
        <Title> {post.title} </Title>
        <a href={post.webUrl} target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <Link to="/projects">Back to Projects</Link>
      </Article>

      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {prev && (
            <Link to={`/projects/${kebabCase(prev.slug)}/`} rel="prev">
              ← {prev.title}
            </Link>
          )}
        </div>

        <div style={{ justifySelf: "flex-end" }}>
          {next && (
            <Link to={`/projects/${kebabCase(next.slug)}/`} rel="next">
              {next.title} →
            </Link>
          )}
        </div>
      </nav>
    </Layout>
  )
}

export default ProjectPostTemplate

const Article = styled.article`
  ${tw`max-w-6xl min-h-screen m-auto`}
`

const Title = styled.h3`
  ${tw`text-4xl hover:text-blue-400`}
  transition: all .5s;
`

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProyectos(slug: { eq: $slug }) {
      id
      slug
      title
      webUrl
    }
  }
`
