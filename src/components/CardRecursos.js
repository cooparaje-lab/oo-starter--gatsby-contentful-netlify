import { Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"

const CardRecursos = ({ card }) => (
  <div className="relative flex flex-col w-full mb-2 overflow-hidden bg-gray-800 rounded shadow-lg from-gray-800 via-gray-800 bg-gradient-to-br md:h-64 md:flex-row">
    <Link
      to={`/recursos/${card.slug}`}
      className="absolute inset-0 z-0 block w-full h-full opacity-5 md:opacity-90 md:relative md:w-full md:h-64"
    >
      <Img
        className="object-cover w-full h-full pb-0 mb-0 cardImage"
        alt={card.title}
        fluid={card.featuredImg.fluid}
      />
    </Link>
    <div className="relative z-10 flex flex-col justify-start w-full px-6 py-2 pb-6">
      <div className="flex items-baseline justify-between w-full mt-2 mb-1">
        <Link
          to={`/recursos/${card.slug}`}
          className="block mb-2 font-serif text-xl font-bold text-left text-yellow-500 capitalize hover:underline hover:text-yellow-300 "
        >
          {card.title}
        </Link>
      </div>
      <p className="mb-3 font-sans text-lg text-left text-gray-100 line-clamp-3">
        {card.excerpt.childMarkdownRemark.excerpt}
      </p>

      {card.espacio && (
        <div className="z-50 flex flex-col items-start justify-start w-full mt-2">
          {card.espacio.map((espacio, i) => [
            <Link
              to={`/espacios/${kebabCase(espacio.slug)}/`}
              className="flex items-center justify-center py-1 pr-2 mr-1 text-gray-100 md:flex-row btnCategory hover:text-gray-500 "
              activeClassName="active"
              key={i}
            >
              <span className="inline-block w-6 mr-2 text-xl text-center ">
                {espacio.icono}
              </span>
              <span className="font-mono text-base font-bold uppercase hover:text-gray-500">
                {espacio.title}
              </span>
            </Link>,
          ])}
        </div>
      )}

      <div>
        <b className="hidden py-2 font-mono text-sm font-bold">
          {card.category}
        </b>
        {card.tags && (
          <div className="relative hidden w-full px-0 py-4">
            {card.tags.map((tag, i) => [
              <Link
                to={`/etiquetas/${kebabCase(tag)}/`}
                key={i}
                className="inline-block px-3 py-1 my-2 text-sm text-white bg-gray-800"
              >
                {tag}
                {i < card.tags.length - 1 ? "" : ""}
              </Link>,
            ])}
          </div>
        )}
      </div>
    </div>
  </div>
)
export default CardRecursos
