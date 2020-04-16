import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

import { kebabCase } from "lodash"

import Layout from "../components/layout"
const TagsPage = ({ data }) => {
  const allTags = data.allContentfulBlog.group

  return (
    <Layout>
      <SEO title="Tags" />

      <div>
        <h1>Tags</h1>
        <ul>
          {allTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
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
    allContentfulBlog(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
