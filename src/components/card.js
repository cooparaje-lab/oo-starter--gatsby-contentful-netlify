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
      className="block mb-2 text-xl font-bold text-left"
    >
      <Img className="w-full" alt={card.title} fixed={card.featuredImg.fixed} />
    </Link>
    <div className="px-6 py-4">
      <Link
        to={`/blog/${card.slug}`}
        className="block mb-2 text-xl font-bold text-left"
      >
        {card.title}
      </Link>
      <p className="text-base text-left text-gray-700">
        {card.excerpt.excerpt}
      </p>
      <Tags>
        {card.tags.map((tag, i) => [
          <Link to={`/etiquetas/${kebabCase(tag)}/`} key={i}>
            {tag}
            {i < card.tags.length - 1 ? "" : ""}
          </Link>,
        ])}
      </Tags>
    </div>
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

const Tags = styled.div`
  ${tw`flex flex-wrap px-0 py-4`}

  a {
    ${tw`inline-block px-3 py-1 mt-2 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full`}
  }
`
