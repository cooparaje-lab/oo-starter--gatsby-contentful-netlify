//import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import tw from "twin.macro"
import ReactTooltip from "react-tooltip"

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
            data-tip={node.title}
            css={[
              tw`flex flex-col items-center justify-center pt-1 mx-2 text-center text-blue-100 opacity-50 hover:opacity-100 hover:text-blue-500`,
            ]}
          >
            <ReactTooltip
              place="bottom"
              type="dark"
              effect="solid"
              className="bg-red-500 shadow"
            />
            <span css={[tw`block my-2 mt-3 text-4xl `]}>{node.icono}</span>
            <b css={[tw`hidden py-2 mb-3 font-bold`]}>{node.title}</b>
          </Link>
        )
      })}
    </>
  )
}

export default EspaciosIconComponent
