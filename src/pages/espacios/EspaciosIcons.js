//import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import tw from "twin.macro"

const EspaciosIconComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryEspaciosIconQuery {
      espacios: allContentfulEspacios {
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
            css={[
              tw`flex flex-col items-center justify-center pt-1 mx-2 text-center text-blue-100 hover:text-blue-500`,
            ]}
          >
            <span css={[tw`block my-2 mt-3 text-xl`]}>{node.icono}</span>
            <b css={[tw`hidden py-2 mb-3 font-bold`]}>{node.title}</b>
          </Link>
        )
      })}
    </>
  )
}

export default EspaciosIconComponent
