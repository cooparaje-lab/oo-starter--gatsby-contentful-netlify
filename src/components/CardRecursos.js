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
      className="absolute right-0 hidden p-3 opacity-25 sm:opacity-100 sm:block sm:relative"
    >
      <Img
        className="w-full cardImage"
        alt={card.title}
        fixed={card.featuredImg.fixed}
      />
    </Link>
    <Content className="">
      <Top>
        <Link
          to={`/recursos/${card.slug}`}
          className="block mb-0 font-mono text-xl font-bold text-left capitalize"
        >
          {card.title}
        </Link>
        <a
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-block px-3 py-2 pb-4 mt-3 font-mono text-xs font-bold bg-indigo-500 hover:bg-indigo-600"
        >
          <span className="text-white">Acceder</span>
          <GoLinkExternal className="inline-block ml-2 text-white" />
        </a>
      </Top>
      <Description className="">
        {card.excerpt.excerpt}
        <small>Publicado el {card.createdAt}</small>
      </Description>
      <Actions>
        <div className="flex w-full">
          {card.espacio.map((espacio, i) => [
            <Link
              to={`/espacios/${kebabCase(espacio.slug)}/`}
              className="btnCategory hover:bg-indigo-500 "
              activeClassName="active"
              key={i}
            >
              <span className="mr-2 text-sm hover:text-white">
                {espacio.icono}
              </span>
              <span className="hidden font-mono text-sm">{espacio.title}</span>
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

  .cardImage {
    body.dark & {
      opacity: 0.7;
      transition: all 0.2s;
    }
    &:hover {
      opacity: 1 !important;
    }
  }

  &:hover {
    ${tw`shadow-xl`}
    transform: scale(1.01) translateY(-2px);
  }
`

const Content = styled.div`
  ${tw`flex flex-col justify-start w-full px-6 py-4`}

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

  small {
    ${tw`block mt-2 font-bold text-gray-900 opacity-75 `}

    body.dark & {
      ${tw`text-gray-100`}
    }
  }
`

const Top = styled.div`
  ${tw`flex items-baseline justify-between w-full mb-1`}

  body.dark & {
    ${tw`text-indigo-200`}
  }
`

const Actions = styled.div`
  ${tw`flex flex-col items-baseline justify-between w-full mt-1 sm:flex-row`}

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
