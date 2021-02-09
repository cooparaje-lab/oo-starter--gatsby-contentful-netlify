import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
//import { GoLinkExternal } from "react-icons/go"
import tw from "twin.macro"

export default ({ card }) => (
  <CardItem>
    <Link
      to={`/recursos/${card.slug}`}
      className="absolute inset-0 z-0 block w-full h-full bg-blue-900 md:relative md:w-full md:h-64"
    >
      <Img
        className="object-cover w-full h-full pb-0 mb-0 cardImage"
        alt={card.title}
        fluid={card.featuredImg.fluid}
      />
    </Link>
    <Content className="relative z-10">
      <Top>
        <Link
          to={`/recursos/${card.slug}`}
          className="block mb-2 font-mono text-xl font-bold text-left underline capitalize hover:text-orange-600"
        >
          {card.title}
        </Link>
      </Top>
      <Description>
        {card.excerpt.childMarkdownRemark.excerpt}
      </Description>

      {card.espacio && (
        <div className="z-50 flex flex-col items-start justify-start w-full mt-2">
          {card.espacio.map((espacio, i) => [
            <Link
              to={`/espacios/${kebabCase(espacio.slug)}/`}
              className="flex items-center justify-center py-1 pr-2 mr-1 text-blue-100 md:flex-row btnCategory hover:text-blue-500 "
              activeClassName="active"
              key={i}
            >
              <span className="inline-block w-6 mr-2 text-xl text-center ">{espacio.icono}</span>
              <span className="font-mono text-base font-bold uppercase hover:text-blue-500">
                {espacio.title}
              </span>
            </Link>,
          ])}
        </div>
      )}

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
  ${tw`relative flex flex-col w-full mb-2 overflow-hidden rounded shadow-lg md:h-64 md:flex-row`}
  transition: all .2s;
  transform: translateY(0);
  transform: scale(1);

  body.dark & {
    ${tw`bg-gray-900`}
  }

  .cardImage {
    transition: all 0.2s;
    opacity: 0.1;
    ${tw` md:opacity-75`}

    body.dark & {
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
  ${tw`flex flex-col justify-start w-full px-6 py-2 pb-6`}

  .title {
    ${tw`text-blue-500`}
  }
`


const Description = styled.p`
  ${tw`mb-3 font-sans text-base text-left text-blue-100 md:h-20`}
`

const Top = styled.div`
  ${tw`flex items-baseline justify-between w-full mt-2 mb-1`}

  a {
    ${tw`text-blue-100`}
  }

  body.dark & {
    ${tw`text-blue-200`}

    a {
      ${tw`text-white`}
    }
  }
`

const Actions = styled.div`
  ${tw`flex flex-col items-baseline justify-between w-full mt-1 sm:flex-row`}
  ${tw`hidden`}

  body.dark & {
    ${tw`text-blue-200`}
  }

  b {
    ${tw`text-blue-500 opacity-75`}

    body.dark & {
      ${tw`text-blue-500`}
    }
  }

  .btnCategory {
    ${tw`inline-block px-4 py-1 my-2 mr-2 text-blue-900 bg-blue-300 rounded-full `}

    body.dark & {
      ${tw`text-blue-300 bg-blue-900`}
    }
  }
`
