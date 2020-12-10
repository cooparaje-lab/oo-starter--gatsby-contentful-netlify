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
      className="absolute inset-0 z-0 block w-full h-full bg-blue-900 md:relative md:w-full md:h-56"
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
          className="block mb-0 font-mono text-lg font-bold text-left underline capitalize hover:text-orange-600"
        >
          {card.title}
        </Link>
      </Top>
      <Description className="">
        {card.excerpt.childMarkdownRemark.excerpt}
      </Description>

      <div className="z-50 flex justify-start w-full mt-2">
        {card.espacio.map((espacio, i) => [
          <Link
            to={`/espacios/${kebabCase(espacio.slug)}/`}
            className="flex items-center justify-center px-2 py-1 mr-1 bg-blue-100 md:flex-row btnCategory hover:underline hover:text-blue-500 "
            activeClassName="active"
            key={i}
          >
            <span className="mr-2 text-xs ">{espacio.icono}</span>
            <span className="font-mono text-sm font-bold hover:text-blue-500">
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
      <SeeMore>
        <a
          href={card.url}
          className=" see-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar website
          <GoLinkExternal className="inline-block ml-2 text-sm " />
        </a>
      </SeeMore>
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
  ${tw`relative flex flex-col w-full h-auto mb-2 overflow-hidden bg-blue-900 rounded shadow-lg md:flex-row`}
  transition: all .2s;
  transform: translateY(0);
  transform: scale(1);

  body.dark & {
    ${tw`bg-blue-900`}
  }

  .cardImage {
    transition: all 0.2s;
    opacity: .1;
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
    ${tw`text-blue-800`}
    body.dark & {
      ${tw`text-blue-500`}
    }
  }
`

const SeeMore = styled.div`
  ${tw`relative flex justify-start `}

  .see-more {
    ${tw`relative z-10 block w-full px-3 py-2 mt-3 font-mono text-xs font-bold text-center text-white uppercase bg-orange-500 md:text-left md:w-auto md:inline-block`}
  }

  body.dark & {
    ${tw`text-blue-500`}
  }
`

const Description = styled.p`
  ${tw`font-sans text-sm text-left text-blue-100`}

  body.dark & {
    ${tw`text-blue-200`}
  }

  small {
    ${tw`mt-2 font-bold text-blue-900 opacity-75 `}

    body.dark & {
      ${tw`text-blue-100`}
    }
  }
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
