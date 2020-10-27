// import styled from "@emotion/styled"
// import algoliasearch from "algoliasearch/lite"
// import { Link } from "gatsby"
// import lottie from "lottie-web"
// import React from "react"

import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import { Highlight } from "react-instantsearch-dom"
import Fade from "react-reveal/Fade"
import tw from "twin.macro"

const PostPreview = ({ hit }) => {
  return (
    <Fade cascade delay={150}>
      <SearchItem>
        <Content>
          <Link to={hit.url}>
            <Highlight hit={hit} attribute="title" tagName="mark" />
          </Link>
          <p>
            <Highlight hit={hit} attribute="description" tagName="mark" />
          </p>
        </Content>
        <Image>
          <img
            className="object-cover w-32 h-32"
            alt={hit.title}
            src={hit.image}
          />
        </Image>
      </SearchItem>
    </Fade>
  )
}

export default PostPreview

const SearchItem = styled.div`
  ${tw`flex bg-gray-100`}

  body.dark & {
    ${tw`text-indigo-100 bg-gray-800`}
  }

  a {
    ${tw`font-mono text-xl font-bold text-indigo-500`}
  }

  p {
    ${tw`font-sans text-lg`}
  }
`

const Image = styled.div`
  ${tw`w-32 `}
`

const Content = styled.div`
  ${tw`w-full p-2 px-3`}
  flex: 1
`
