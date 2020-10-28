import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import { GoLinkExternal } from "react-icons/go"
import tw from "twin.macro"

export default ({ card }) => (
  <CardItem>
    <Link
      to={`/recursos/${card.slug}`}
      className="bg-indigo-900 sm:block sm:relative"
    >
      <Img
        className="object-cover w-20 h-20 pb-0 mb-0 cardImage sm:opacity-75"
        alt={card.title}
        fixed={card.featuredImg.fixed}
      />
    </Link>
    <Content className="">
      <Top>
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-0 font-serif text-lg font-bold text-left underline capitalize"
        >
          {card.title}
          <GoLinkExternal className="inline-block ml-2 text-sm " />
        </a>

        <Link
          to={`/recursos/${card.slug}`}
          className="relative z-10 hidden px-3 py-2 pb-4 mt-3 font-serif text-xs font-bold bg-indigo-500 hover:bg-indigo-600"
        >
          <span className="text-white">ver más</span>
        </Link>
      </Top>
      <Description className="">
        {card.excerpt.childMarkdownRemark.excerpt}

        <small>Publicado el {card.createdAt}</small>
      </Description>
      <div className="z-50 flex justify-start w-full mt-2">
        {card.espacio.map((espacio, i) => [
          <Link
            to={`/espacios/${kebabCase(espacio.slug)}/`}
            className="flex flex-col items-center justify-center py-1 pr-2 mr-1 rounded-full md:flex-row btnCategory hover:underline hover:text-indigo-500 "
            activeClassName="active"
            key={i}
          >
            <span className="mr-1 text-xl ">{espacio.icono}</span>
            <span className="font-mono text-sm font-bold hover:text-indigo-500">
              {espacio.title}
            </span>
          </Link>,
        ])}
      </div>

      <Actions>
        <b className="block py-2 font-mono text-sm font-bold">
          {card.category}
        </b>
        {card.tags && (
          <Tags>
            {card.tags.map((tag, i) => [
              <Link to={`/etiquetas/${kebabCase(tag)}/`} key={i}>
                {tag}
                {i < card.tags.length - 1 ? "" : ""}
              </Link>,
            ])}
          </Tags>
        )}
      </Actions>
    </Content>
  </CardItem>
)

const Tags = styled.div`
  ${tw`relative flex flex-wrap justify-start w-full px-0 py-4`}

  a {
    ${tw`inline-block px-3 py-1 my-2 text-sm `}
  }
`

const CardItem = styled.div`
  ${tw`relative flex w-full h-auto mb-5 overflow-hidden bg-white rounded shadow-lg`}
  transition: all .2s;
  transform: translateY(0);
  transform: scale(1);

  body.dark & {
    ${tw`bg-gray-900`}
  }

  .cardImage {
    body.dark & {
      opacity: 0.7;
      transition: all 0.2s;
    }
    &:hover {
      opacity: 1 !important;
    }
  }

  a {
    ${tw`pb-0`}
  }

  &:hover {
    ${tw`shadow-xl`}
    transform: scale(1.01) translateY(-2px);
  }
`

const Content = styled.div`
  ${tw`flex flex-col justify-start w-full px-6 py-2`}

  .title {
    ${tw`text-indigo-800`}
    body.dark & {
      ${tw`text-indigo-500`}
    }
  }
`

const Description = styled.p`
  ${tw`font-mono text-sm text-left text-gray-700`}

  body.dark & {
    ${tw`text-indigo-200`}
  }

  small {
    ${tw`hidden mt-2 font-bold text-gray-900 opacity-75 `}

    body.dark & {
      ${tw`text-gray-100`}
    }
  }
`

const Top = styled.div`
  ${tw`flex items-baseline justify-between w-full mt-2 mb-1`}

  body.dark & {
    ${tw`text-indigo-200`}
  }
`

const Actions = styled.div`
  ${tw`flex flex-col items-baseline justify-between w-full mt-1 sm:flex-row`}
  ${tw`hidden`}

  body.dark & {
    ${tw`text-indigo-200`}
  }

  b {
    ${tw`text-indigo-500 opacity-75`}

    body.dark & {
      ${tw`text-indigo-500`}
    }
  }

  .btnCategory {
    ${tw`inline-block px-4 py-1 my-2 mr-2 text-indigo-900 bg-indigo-300 rounded-full `}

    body.dark & {
      ${tw`text-indigo-300 bg-indigo-900`}
    }
  }
`
