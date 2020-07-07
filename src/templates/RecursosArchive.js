import React from "react"
import { graphql } from "gatsby"
//import { Link } from "gatsby"
//import Img from "gatsby-image"
import Layout from "../components/layout"
import Pager from "../components/pager"
import CardRecursos from "../components/CardRecursos"

import SEO from "../components/seo"
import Fade from "react-reveal/Fade"
import tw from "tailwind.macro"
//import { kebabCase } from "lodash"

import styled from "@emotion/styled"
const RecursosArchive = ({ data, pageContext, location }) => {
  const Recurso = data.allContentfulRecursos.edges

  return (
    <Layout location={location}>
      <SEO title="Recursos" />
      <HeroRecurso>
        <h1>Recursos</h1>
      </HeroRecurso>
      <BlogContainer>
        {Recurso.map(({ node }) => {
          return (
            <Item key={node.slug}>
              <Fade cascade>
                <CardRecursos card={node} />
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
  ${tw`flex flex-wrap justify-center max-w-4xl m-auto overflow-hidden`}
`

const Item = styled.div`
  ${tw`relative w-full px-3 mb-3 overflow-hidden text-center `}
`

const HeroRecurso = styled.div`
  ${tw`flex items-center justify-start w-full py-12 mb-6 text-left bg-indigo-800`}
  min-height: 40vh;

  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");

  h1 {
    ${tw`w-full max-w-4xl px-6 m-auto font-mono text-4xl font-bold text-white`}
  }

  body.dark & {
    ${tw`bg-gray-900`}
  }
`

export default RecursosArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulRecursos(
      sort: { fields: createdAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          slug
          tags
          url
          createdAt
          category
          excerpt {
            excerpt
          }
          espacio {
            title
            slug
            icono
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
      }
    }
  }
`
