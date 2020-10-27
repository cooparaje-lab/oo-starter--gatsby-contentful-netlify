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
        <Link to={hit.url}>
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
      <p>
        <Highlight hit={hit} attribute="description" tagName="mark" />
      </p>
    </SearchItem>
  )
}

export default PostPreview

const SearchItem = styled.div`
  ${tw`bg-gray-100 p-6 pt-2 pb-4`}

  body.dark & {
      ${tw`text-indigo-100 bg-gray-800`}
  }
  
  a {
      ${tw`font-mono text-3xl font-bold text-indigo-500`}
     
  }

  p {
      ${tw`font-sans text-xl`}
  }
`