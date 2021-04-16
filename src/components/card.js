import React from "react"
// import { kebabCase } from "lodash"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Card = ({ card }) => (
  <div className="relative max-w-md overflow-hidden rounded ">
    <Link
      to={`/articulos/${card.slug}`}
      className="block h-56 overflow-hidden text-xl font-bold text-center"
    >
      <Img className="w-full" alt={card.title} fixed={card.featuredImg.fixed} />
    </Link>
    <div className="px-8 py-4 bg-gray-800">
      <Link
        to={`/articulos/${card.slug}`}
        className="block mb-2 text-xl font-bold text-center text-white title"
      >
        {card.title}
      </Link>
      <small className="block my-2 font-mono text-sm font-bold text-gray-100 opacity-75">
        Publicado el {card.createdAt}
      </small>
      {/* <div className="flex flex-wrap justify-center px-0 py-4">
        {card.tags.map((tag, i) => [
          <Link to={`/etiquetas/${kebabCase(tag)}/`} key={i} className="inline-block px-3 py-1 mt-2 mr-2 text-xs font-semibold text-gray-100 bg-gray-900 rounded-full">
            {tag}
            {i < card.tags.length - 1 ? "" : ""}
          </Link>,
        ])}
      </div> */}
    </div>
  </div>
)
export default Card
