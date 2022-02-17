import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"

const EspaciosIconComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryEspaciosIconQuery {
      espacios: allContentfulEspacios(sort: {fields: title, order: ASC}) {
        edges {
          node {
            title
            id
            slug
            excerpt {
              excerpt
            }
            icono
          }
        }
      }
    }
  `)

  return (
    <>
      {data.espacios.edges.map(({ node }) => {
        return (
          <Link
            to={`/espacios/${kebabCase(node.slug)}/`}
            key={node.slug}
            className="flex flex-col items-center justify-center w-32 px-4 pt-1 mx-2 text-center text-gray-100 duration-300 opacity-100 hover:opacity-80 hover:text-gray-500"
          >
            <span
              role="img"
              aria-label={node.title}
              className="block my-2 mt-3 text-4xl "
            >
              {node.icono}
            </span>
            <b className="py-2 mb-3 font-mono font-bold ">{node.title}</b>
          </Link>
        )
      })}
    </>
  )
}

export default EspaciosIconComponent
