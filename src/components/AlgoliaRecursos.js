import { Link } from "gatsby"
import React from "react"
import { Highlight } from "react-instantsearch-dom"

const AlgoliaRecursos = ({ hit }) => {
  return (
    <div className="relative flex text-left text-gray-100 bg-gray-900 bg-gradient-to-br from-gray-800 via-gray-800 ">
      <div className="relative z-40 w-full p-6 text-left">
        <Link
          to={`/recursos/${(hit.slug)}/`}
          className="font-serif text-2xl font-bold text-yellow-500 duration-700 hover:text-white"
        >
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
        <p className="mt-1 font-sans text-lg line-clamp-4 xl:line-clamp-none 2xl:text-xl 2xl:mt-3">
          <Highlight hit={hit} attribute="excerpt.excerpt" tagName="mark" />
        </p>
        <p className="mt-1 font-sans text-lg">
          <Highlight hit={hit} attribute="espacio.title" tagName="mark" />
        </p>
      </div>
      <Link to={`/recursos/${(hit.slug)}/`}  className="w-64 duration-700 2xl:w-96 h-52 2xl:h-56 opacity-80 hover:opacity-50">
        <img
          className="block object-cover w-full h-full"
          alt={hit.title}
          src={`https:${hit.featuredImg.file.url}?h=250&fm=png&q=80`}
        />
      </Link>
    </div>
  )
}

export default AlgoliaRecursos
