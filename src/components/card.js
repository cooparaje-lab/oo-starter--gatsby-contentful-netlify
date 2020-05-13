import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default ({ card }) => (
  <CardItem>
    <Link
      to={`/blog/${card.slug}`}
      className="block h-56 overflow-hidden text-xl font-bold text-left"
    >
      <Img className="w-full" alt={card.title} fixed={card.featuredImg.fixed} />
    </Link>
    <Content>
      <Link
        to={`/blog/${card.slug}`}
        className="block mb-2 text-xl font-bold text-left title"
      >
        {card.title}
      </Link>
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
  ${tw`relative max-w-md overflow-hidden rounded shadow-lg`}
  transition: all .2s;
  top: 0;

  &:hover {
    ${tw`shadow-xl`}
    top: 2px;
  }
`

const Content = styled.div`
  ${tw`px-6 py-4 bg-indigo-100`}

  body.dark & {
    ${tw`bg-gray-900`}
  }

  .title {
    ${tw`text-indigo-800`}
    body.dark & {
      ${tw`text-indigo-500`}
    }
  }
`

const Description = styled.p`
  ${tw`text-base text-left text-gray-700`}

  body.dark & {
    ${tw`text-indigo-200`}
  }
`

const Tags = styled.div`
  ${tw`flex flex-wrap px-0 py-4`}

  a {
    ${tw`inline-block px-3 py-1 mt-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full`}

    body.dark & {
      ${tw`text-gray-100 bg-indigo-900 `}
    }
  }
`
