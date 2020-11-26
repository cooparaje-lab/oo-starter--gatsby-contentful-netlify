import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
const TagsPage = ({ data }) => {
  const allTags = data.allContentfulRecursos.group

  return (
    <Layout>
      <SEO title="Etiquetas" />

      <Container>
        <h1>Etiquetas</h1>
        <ul className="flex flex-col-reverse">
          {allTags.map((tag) => (
            <li
              key={tag.fieldValue}
              className={`order-${tag.totalCount}`}
              tw="pb-2 my-3 font-mono text-4xl font-thin leading-snug truncate"
            >
              <Link
                to={`/etiquetas/${kebabCase(tag.fieldValue)}/`}
                tw="hover:text-indigo-500"
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
    ${tw`mb-6 font-mono text-6xl text-indigo-200`}

    body.dark & {
      ${tw`text-indigo-200`}
    }
  }
`

export default TagsPage

export const pageQuery = graphql`
  query {
    allContentfulRecursos(sort: { fields: title, order: ASC }, limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
