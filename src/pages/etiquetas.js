import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Layout from "../components/layout"
const TagsPage = ({ data }) => {
  const allTags = data.allContentfulBlog.group

  return (
    <Layout>
      <SEO title="Etiquetas" />

      <Container>
        <h1>Etiquetas</h1>
        <ul>
          {allTags.map(tag => (
            <li
              key={tag.fieldValue}
              css={tw`pb-2 my-3 font-mono text-4xl font-thin leading-snug truncate`}
            >
              <Link
                to={`/etiquetas/${kebabCase(tag.fieldValue)}/`}
                css={tw`hover:text-indigo-500`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  ${tw`max-w-6xl min-h-screen pt-12 m-auto`}
  h1 {
    ${tw`mb-6 text-6xl`}
  }
`

export default TagsPage

export const pageQuery = graphql`
  query {
    allContentfulBlog(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
