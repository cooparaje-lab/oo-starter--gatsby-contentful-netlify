import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
const ProjectArchive = ({ data, pageContext, location }) => {
  const projects = data.allContentfulProyectos.edges

  return (
    <Layout location={location}>
      <SEO title="Projects" />

      <BlogContainer>
        {projects.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Item key={node.slug}>
              <Title>
                <Link to={`/projects/${kebabCase(node.slug)}/`}> {title} </Link>
              </Title>
              <a href={node.webUrl} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </Item>
          )
        })}
        <Pager pageContext={pageContext} />
      </BlogContainer>
    </Layout>
  )
}

const BlogContainer = styled.div`
  ${tw`max-w-6xl pt-12 m-auto`}
`

const Item = styled.div`
  ${tw`my-6`}
`

const Title = styled.h3`
  ${tw`text-xl hover:text-blue-400`}
  transition: all .5s;
`

export default ProjectArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulProyectos(
      sort: { fields: [title], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          slug
          webUrl
        }
      }
    }
  }
`
