import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "./post.css"
import SEO from "../components/seo"
import { Article, Title } from "../components/import"
import tw from "tailwind.macro"

const ProjectPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulProyectos
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title="Post" />

      <Article css={tw`max-w-6xl`}>
        <Link className="block pt-8 my-3 text-center" to="/proyectos">
          Ver todos los proyectos
        </Link>
        <Title css={tw`flex items-center justify-between md:flex-col`}>
          {post.title}
          <a
            href={post.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            css={tw`inline-block pb-2 my-3 mb-6 text-xl font-semibold leading-snug truncate`}
          >
            Link al sitio
          </a>
        </Title>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {prev && (
              <Link to={`/proyectos/${kebabCase(prev.slug)}/`} rel="prev">
                ← {prev.title}
              </Link>
            )}
          </div>

          <div style={{ justifySelf: "flex-end" }}>
            {next && (
              <Link to={`/proyectos/${kebabCase(next.slug)}/`} rel="next">
                {next.title} →
              </Link>
            )}
          </div>
        </nav>
      </Article>
    </Layout>
  )
}

export default ProjectPostTemplate

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
