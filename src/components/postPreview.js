// import styled from "@emotion/styled"
// import algoliasearch from "algoliasearch/lite"
// import { Link } from "gatsby"
// import lottie from "lottie-web"
// import React from "react"

import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import { Highlight } from "react-instantsearch-dom"
import tw from "twin.macro"
const PostPreview = ({ hit }) => {
  return (
    <SearchItem>
      <h3>
        <Link to={hit.url}>
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
      </h3>
      <p>
        <Highlight hit={hit} attribute="description" tagName="mark" />
      </p>
    </SearchItem>
  )
}

export default PostPreview

const SearchItem = styled.div`

    body.dark & {
      ${tw`text-indigo-100`}
    }
  }
`
