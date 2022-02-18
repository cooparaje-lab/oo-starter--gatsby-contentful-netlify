import { Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import { BiLink } from "react-icons/bi"
import ReactTooltip from "react-tooltip"
import { HiTranslate } from "react-icons/hi"

const CardRecursos = ({ card }) => (
  <div className="relative flex flex-col w-full mb-2 overflow-hidden bg-gray-800 rounded shadow-lg h-60 from-gray-800 via-gray-800 bg-gradient-to-br lg:h-64 lg:flex-row">
    <div className="absolute inset-0 z-0 block w-full h-full group opacity-5 lg:opacity-90 lg:relative lg:h-64">
      <Link to={`/recursos/${card.slug}`}>
        <Img
          className="object-cover w-full h-full pb-0 mb-0 cardImage"
          alt={card.title}
          fluid={card.featuredImg.fluid}
        />
      </Link>
      <a
        className="absolute bottom-0 right-0 top-auto z-20 flex items-center justify-center p-2 m-2 font-mono text-2xl font-bold text-white transition-all duration-200 bg-gray-700 rounded lg:right-auto lg:left-0 lg:bottom-auto lg:top-0 hover:bg-green-700"
        href={card.url}
        target="_blank"
        data-tip="Link directo"
        rel="noopener noreferrer"
      >
        <BiLink className="inline-block text-white" />
      </a>
      {card.tags && (
        <div className="absolute bottom-0 left-0 right-0 w-full mt-0 duration-200 opacity-0 group-hover:opacity-100 lg:mt-0">
          <div className="relative flex items-center justify-center w-full px-3 duration-200 bg-gray-900 bg-opacity-60 hover:bg-opacity-90">
            {card.tags.map((tag, i) => [
              <Link
                to={`/etiquetas/${kebabCase(tag)}/`}
                key={i}
                className="inline-block px-3 py-1 my-2 font-mono text-xs font-bold text-white uppercase hover:text-yellow-500"
              >
                #{tag}
                {i < card.tags.length - 1 ? "" : ""}
              </Link>,
            ])}
          </div>
        </div>
      )}
    </div>
    <div className="relative z-10 flex flex-col items-start justify-start w-full px-6 py-2 pb-6">
      <div className="flex items-baseline justify-between w-full mt-2 mb-1">
        <Link
          to={`/recursos/${card.slug}`}
          className="block w-full mb-2 font-serif text-3xl font-bold text-left text-yellow-500 capitalize hover:underline hover:text-yellow-300 "
        >
          {card.title}
        </Link>
      </div>
      <p className="mb-1 font-sans text-xl text-left text-gray-100 line-clamp-2">
        {card.excerpt.childMarkdownRemark.excerpt}
      </p>

      {card.espacio && (
        <div className="z-50 flex items-start justify-start w-full mt-2 space-x-2">
          {card.espacio.map((espacio, i) => [
            <Link
              to={`/espacios/${kebabCase(espacio.slug)}/`}
              className="flex flex-wrap items-center justify-center px-3 py-2 mr-1 text-gray-100 bg-gray-900 rounded bg-opacity-70 lg:flex-row btnCategory hover:text-gray-500 "
              activeClassName="active"
              key={i}
            >
              <span className="inline-block w-6 text-xs text-left lg:mr-2 lg:text-lg ">
                {espacio.icono}
              </span>
              <span className="font-mono text-xs font-bold uppercase lg:text-xs hover:text-gray-500">
                {espacio.title}
              </span>
            </Link>,
          ])}
        </div>
      )}
      {card.languageEnglish && (
        <div className="absolute bottom-0 right-0 flex items-center justify-center px-2 py-2 space-x-2 font-mono font-bold text-green-100 uppercase rounded">
          <HiTranslate className="text-sm" />
          <span className="text-xs">Contenido en Inglés</span>
        </div>
      )}

      <b className="hidden py-2 font-mono text-sm font-bold ">
        {card.category}
      </b>
      <ReactTooltip
        place="right"
        type="dark"
        effect="solid"
        className="bg-red-500 shadow"
      />
    </div>
  </div>
)
export default CardRecursos
