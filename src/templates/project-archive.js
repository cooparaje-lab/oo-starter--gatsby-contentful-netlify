import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/pager"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import Fade from "react-reveal/Fade"
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
              <Fade cascade>
                <ItemContent>
                  <Title>
                    <Link to={`/proyectos/${kebabCase(node.slug)}/`}>
                      {" "}
                      {title}{" "}
                    </Link>
                  </Title>
                </ItemContent>
              </Fade>
            </Item>
          )
        })}
        <Pager pageContext={pageContext} />
      </BlogContainer>
    </Layout>
  )
}

const BlogContainer = styled.div`
  ${tw`flex flex-wrap justify-center max-w-6xl m-auto overflow-hidden`}
`

const Item = styled.div`
  ${tw`w-full px-3 my-3 overflow-hidden text-center md:w-1/3 `}
`
const ItemContent = styled.div`
  ${tw`flex flex-col items-center justify-center px-6 mx-0 bg-blue-100 shadow-lg hover:shadow-md hover:bg-green-200`}
  transition: all .4s;
  min-height: 150px;
  a {
    ${tw`text-gray-800 `}
  }
`

const Title = styled.h3`
  ${tw`text-xl `}
  transition: all .4s;
`

export default ProjectArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulProyectos(
      sort: { fields: [title], order: ASC }
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
