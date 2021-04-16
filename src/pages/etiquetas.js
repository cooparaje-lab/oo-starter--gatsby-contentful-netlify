import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const TagsPage = ({ data }) => {
  const allTags = data.allContentfulRecursos.group

  return (
    <Layout>
      <Seo title="Etiquetas" />

      <div className="max-w-6xl min-h-screen pt-12 m-auto">
        <h1 className="mb-6 font-mono text-6xl text-gray-200">Etiquetas</h1>
        <ul className="flex flex-col-reverse">
          {allTags.map((tag) => (
            <li
              key={tag.fieldValue}
              className={`order-${tag.totalCount} pb-2 my-3 font-mono text-4xl font-thin leading-snug truncate`}
            >
              <Link
                to={`/etiquetas/${kebabCase(tag.fieldValue)}/`}
                className="text-gray-100 hover:text-gray-200"
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

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
