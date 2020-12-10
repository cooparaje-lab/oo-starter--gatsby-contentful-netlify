import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default ({ card }) => (
  <CardItem>
    <Link
      to={`/blog/${card.slug}`}
      className="block h-56 overflow-hidden text-xl font-bold text-center"
    >
      <Img className="w-full" alt={card.title} fixed={card.featuredImg.fixed} />
    </Link>
    <Content>
      <Link
        to={`/blog/${card.slug}`}
        className="block mb-2 text-xl font-bold text-center title"
      >
        {card.title}
      </Link>
      <small className="block font-mono font-bold my-2 text-sm text-blue-600 opacity-75">
        Publicado el {card.createdAt}
      </small>
      <Description>{card.excerpt.excerpt}</Description>
      <Tags>
        {card.tags.map((tag, i) => [
          <Link to={`/etiquetas/${kebabCase(tag)}/`} key={i}>
            {tag}
            {i < card.tags.length - 1 ? "" : ""}
          </Link>,
        ])}
      </Tags>
    </Content>
  </CardItem>
)

const CardItem = styled.div`
  ${tw`relative max-w-md overflow-hidden rounded `}
  transition: all .2s;
  top: 0;

  &:hover {
    ${tw``}
    top: 2px;
  }
`

const Content = styled.div`
  ${tw`px-8 py-4 bg-blue-900`}

  body.dark & {
    ${tw`bg-blue-900`}
  }

  .title {
    ${tw`font-mono text-blue-500`}
    body.dark & {
      ${tw`text-blue-500`}
    }
  }
`

const Description = styled.p`
  ${tw`hidden pb-3 text-base text-center text-blue-700`}

  body.dark & {
    ${tw`text-blue-700`}
  }
`

const Tags = styled.div`
  ${tw`flex flex-wrap hidden px-0 py-4`}

  a {
    ${tw`inline-block px-3 py-1 mt-2 mr-2 text-xs font-semibold text-blue-100 bg-blue-100 rounded-full`}

    body.dark & {
      ${tw`text-blue-100 bg-blue-900 `}
    }
  }
`
