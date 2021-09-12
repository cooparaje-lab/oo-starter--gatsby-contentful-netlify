import { Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import { GoLinkExternal } from "react-icons/go"

const CardRecursos = ({ card }) => (
  <div className="relative flex flex-col w-full mb-2 overflow-hidden bg-gray-800 rounded shadow-lg from-gray-800 via-gray-800 bg-gradient-to-br md:h-64 md:flex-row">
    <div className="absolute inset-0 z-0 block w-full h-full group opacity-5 md:opacity-90 md:relative md:w-full md:h-64">
      <Link to={`/recursos/${card.slug}`}>
        <Img
          className="object-cover w-full h-full pb-0 mb-0 cardImage"
          alt={card.title}
          fluid={card.featuredImg.fluid}
        />
      </Link>

      {card.tags && (
        <div className="absolute bottom-0 left-0 right-0 w-full mt-0 duration-200 opacity-0 group-hover:opacity-100 md:mt-0">
          <div className="relative flex items-center justify-center w-full px-3 duration-200 bg-gray-900 bg-opacity-60 hover:bg-opacity-90">
            {card.tags.map((tag, i) => [
              <Link
                to={`/etiquetas/${kebabCase(tag)}/`}
                key={i}
                className="inline-block px-3 py-1 my-2 font-mono text-sm font-bold text-white uppercase hover:text-yellow-500"
              >
                #{tag}
                {i < card.tags.length - 1 ? "" : ""}
              </Link>,
            ])}
          </div>
        </div>
      )}
    </div>
    <div className="relative z-10 flex flex-col justify-start w-full px-6 py-2 pb-12 md:pb-3">
      <div className="flex items-baseline justify-between w-full mt-2 mb-1">
        <Link
          to={`/recursos/${card.slug}`}
          className="block mb-2 font-serif text-3xl font-bold text-left text-yellow-500 capitalize hover:underline hover:text-yellow-300 "
        >
          {card.title}
        </Link>

        <a
          className="absolute bottom-0 right-0 z-20 flex items-center justify-center px-3 py-2 font-mono text-xs font-bold text-white transition-all duration-200 bg-green-600 rounded hover:bg-green-700"
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-white">ir al sitio</span>
          <GoLinkExternal className="inline-block ml-2 text-white" />
        </a>
      </div>
      <p className="mb-3 font-sans text-xl text-left text-gray-100 line-clamp-3">
        {card.excerpt.childMarkdownRemark.excerpt}
      </p>

      {card.espacio && (
        <div className="z-50 flex items-start justify-start w-full mt-2 space-x-2">
          {card.espacio.map((espacio, i) => [
            <Link
              to={`/espacios/${kebabCase(espacio.slug)}/`}
              className="flex flex-wrap items-center justify-center px-3 py-2 mr-1 text-gray-100 bg-gray-900 rounded bg-opacity-70 md:flex-row btnCategory hover:text-gray-500 "
              activeClassName="active"
              key={i}
            >
              <span className="inline-block w-6 text-xs text-center md:mr-2 md:text-xl ">
                {espacio.icono}
              </span>
              <span className="font-mono text-xs font-bold uppercase md:text-sm hover:text-gray-500">
                {espacio.title}
              </span>
            </Link>,
          ])}
        </div>
      )}
      {card.languageEnglish && (
        <div className="absolute bottom-0 left-0 right-0 z-10 block px-6 py-2 pt-1 font-mono text-sm font-bold text-left text-green-200 bg-green-900 opacity-75 bg-opacity-20">
          Contenido en Inglés
        </div>
      )}

      {card.languageEnglish && (
        <div className="absolute bottom-0 left-0 right-0 z-10 block px-6 py-2 pt-1 font-mono text-sm font-bold text-left text-green-200 bg-green-900 opacity-75 bg-opacity-20 group">
          Contenido en Inglés
          <a
            href={`https://translate.google.com/translate?sl=auto&tl=es&u=${card.url}`}
            target="_blank"
            className="py-1 ml-2 text-green-500 duration-200 border-b-2 border-green-500 group-hover:border-green-100 group-hover:text-green-100"
            rel="noopener noreferrer"
          >
            auto-traducir al español
          </a>
        </div>
      )}

      <b className="hidden py-2 font-mono text-sm font-bold">{card.category}</b>
    </div>
  </div>
)
export default CardRecursos
