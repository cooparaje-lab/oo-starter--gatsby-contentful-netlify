// import styled from "@emotion/styled"
// import algoliasearch from "algoliasearch/lite"
// import { Link } from "gatsby"
// import lottie from "lottie-web"
// import React from "react"

import { Link } from "gatsby"
import React from "react"
import { Highlight } from "react-instantsearch-dom"

const PostPreview = ({ hit }) => {
  return (
    <div>
      <h3>
        <Link to={hit.url}>
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
      </h3>
      <small>{new Date(hit.date).toLocaleDateString()}</small>

      <p>
        <Highlight hit={hit} attribute="excerpt" tagName="mark" />
      </p>
    </div>
  )
}

export default PostPreview
