import { Link } from "gatsby"
import React from "react"
import { Highlight } from "react-instantsearch-dom"

const PostPreview = ({ hit }) => {
  return (
    <div className="relative flex text-left text-gray-100 bg-gray-900 bg-gradient-to-br from-gray-800 via-gray-800 ">
      <div className="relative z-40 w-full p-6 text-left">
        <Link
          to={hit.url}
          className="font-serif text-2xl font-bold text-yellow-500 duration-700 hover:text-white"
        >
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
        <p className="mt-1 font-sans text-lg line-clamp-2">
          <Highlight hit={hit} attribute="description" tagName="mark" />
        </p>
      </div>
      <Link  to={hit.url} className="w-64 h-40 duration-700 opacity-80 hover:opacity-50">
        <img
          className="block object-cover w-full h-full"
          alt={hit.title}
          src={hit.image}
        />
      </Link>
    </div>
  )
}

export default PostPreview
