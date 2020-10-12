import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
//import { kebabCase } from "lodash"
import tw from "twin.macro"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

const RecursosTablasPage = ({ data }) => {
  const RecursoAirtable = data.allAirtable.edges
  //const buildTime = data.site

  return (
    <Layout>
      <SEO title="Espacios" />
      <Helmet>
        <body className="resources-tables" />
      </Helmet>
      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrhjkZGMhXN5n8jG?backgroundColor=purple&viewControls=on"
        frameborder="0"
        onmousewheel=""
        title="Cooparaje - Airtable"
        width="100%"
        className="h-screen mt-0 bg-transparent"
        height="100%"
      ></iframe>
      <Container>
        <h3 className="hidden pt-24 font-mono font-bold text-center text-gray-500 uppercase opacity-50 ">
          Última actualización {data.site.buildTime}
        </h3>
        <AirTables>
          {RecursoAirtable.map(({ node }) => {
            return (
              <div key={node.id} className="relative item">
                <Fade cascade>
                  <a
                    href={node.data.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full m-0 text-center text-gray-500"
                  >
                    {node.data.Name}
                  </a>
                  <span className="absolute top-0 right-0 z-50 block px-2 py-1 text-white bg-green-600 rounded-sm">
                    {node.data.Status}
                  </span>
                  <div
                    className="hidden article"
                    dangerouslySetInnerHTML={{
                      __html: node.data.Notes.childMarkdownRemark.html,
                    }}
                  />
                  {node.data.Notes.childMarkdownRemark.excerpt}
                  <Img
                    alt="featured image"
                    className="w-64 h-64"
                    fluid={
                      node.data.Attachments.localFiles[0].childImageSharp.fluid
                    }
                  />
                </Fade>
              </div>
            )
          })}
        </AirTables>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allAirtable {
      edges {
        node {
          id
          data {
            Name
            Link
            Attachments {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 1006) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            Status
            Notes {
              childMarkdownRemark {
                html
                excerpt(format: PLAIN, truncate: true, pruneLength: 15)
              }
            }
          }
        }
      }
    }
    site {
      buildTime(locale: "es", formatString: "dddd Do - MMMM YYYY")
    }
  }
`

const AirTables = styled.div`
  ${tw`flex flex-wrap justify-center max-w-6xl pt-12 m-auto`}
  body.dark & {
    ${tw`text-indigo-200`}
  }

  .item {
    ${tw`w-full max-w-md p-5 mx-3 border border-gray-500`}
    flex: 1
  }
`

const Container = styled.div`
  ${tw`hidden w-full min-h-screen m-auto bg-gray-100`}
  h1 {
    ${tw`mb-6 font-mono text-2xl text-left`}

    body.dark & {
      ${tw`text-indigo-200 `}
    }
  }
  .article {
    ${tw`pt-6`}
  }
  body.dark & {
    ${tw`bg-gray-900 `}
  }
`

export default RecursosTablasPage
