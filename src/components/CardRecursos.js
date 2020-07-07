import React from "react"
import { GoLinkExternal } from "react-icons/go"

import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Link } from "gatsby"

export default ({ card }) => (
  <CardItem>
    <Link
      to={`/recursos/${card.slug}`}
      className="absolute right-0 hidden p-3 opacity-25 sm:opacity-100 sm:block sm:relative"
    >
      <Img
        className="w-full "
        alt={card.title}
        fixed={card.featuredImg.fixed}
      />
    </Link>
    <Content className="">
      <Top>
        <Link
          to={`/recursos/${card.slug}`}
          className="block mb-0 font-mono text-xl font-bold text-left"
        >
          {card.title}
        </Link>
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-block px-3 py-2 pb-4 mt-3 font-mono text-xs font-bold bg-indigo-500 hover:bg-indigo-600"
        >
          <span className="text-white">Visitar website</span>
          <GoLinkExternal className="inline-block ml-2 text-white" />
        </a>
      </Top>
      <Description className="">{card.excerpt.excerpt}</Description>
      <Actions>
        <div className="flex w-full">
          {card.espacio.map((espacio, i) => [
            <Link
              to={`/espacios/${kebabCase(espacio.slug)}/`}
              className="inline-block px-4 py-1 my-2 mr-2 bg-gray-300 rounded-full hover:bg-indigo-500 "
              key={i}
            >
              <span className="mr-2 text-sm hover:text-white">
                {espacio.icono}
              </span>
              <b className="font-mono text-sm text-gray-900">{espacio.title}</b>
            </Link>,
          ])}
        </div>
        <b className="block py-2 font-mono text-sm font-bold">
          {card.category}
        </b>
      </Actions>
    </Content>
  </CardItem>
)

const CardItem = styled.div`
  ${tw`relative flex w-full mb-5 overflow-hidden bg-white rounded shadow-lg`}
  transition: all .2s;
  transform: translateY(0);
  transform: scale(1);

  body.dark & {
    ${tw`bg-gray-900`}
  }

  &:hover {
    ${tw`shadow-xl`}
    transform: scale(1.01) translateY(-2px);
  }
`

const Content = styled.div`
  ${tw`flex flex-col justify-center w-full px-6 py-4`}

  .title {
    ${tw`text-indigo-800`}
    body.dark & {
      ${tw`text-indigo-500`}
    }
  }
`

const Description = styled.p`
  ${tw`font-mono text-base text-left text-gray-700`}

  body.dark & {
    ${tw`text-indigo-200`}
  }
`

const Top = styled.div`
  ${tw`flex items-baseline justify-between w-full mb-3`}

  body.dark & {
    ${tw`text-indigo-200`}
  }
`

const Actions = styled.div`
  ${tw`flex items-baseline justify-between w-full mt-3`}

  body.dark & {
    ${tw`text-indigo-200`}
  }
`
