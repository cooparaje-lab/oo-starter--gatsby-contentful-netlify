import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import tw from "twin.macro"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
const EspaciosIndexPage = ({ data }) => {
  const allEspacios = data.allContentfulEspacios.edges
  //const buildTime = data.site

  return (
    <Layout>
      <SEO title="Todos los Espacios" />
      <Container>
        <h3 className="p-3 pt-12 font-mono font-bold text-center text-blue-500 uppercase opacity-50">
          Última actualización <br /> {data.site.buildTime}
        </h3>
        <Categories>
          {allEspacios.map((item) => (
            <Item key={item.node.id}>
              {item.node.recursos ? (
                <Link
                  to={`/espacios/${kebabCase(item.node.slug)}/`}
                  tw="block pt-1 text-blue-100 hover:text-blue-500"
                >
                  <span className="block my-2 mt-3 text-4xl">
                    {item.node.icono}
                  </span>
                  <b className="block py-2 mb-3 font-bold">{item.node.title}</b>
                </Link>
              ) : (
                <Link
                  to={`/espacios/${kebabCase(item.node.slug)}/`}
                  tw="block pt-1 text-blue-300 hover:text-blue-500 "
                >
                  <span className="block my-2 mt-3 text-4xl opacity-25">
                    {item.node.icono}
                  </span>
                  <b className="block py-2 mb-3 font-bold text-blue-500">
                    {item.node.title}
                  </b>
                </Link>
              )}
            </Item>
          ))}
        </Categories>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  ${tw`w-full min-h-screen m-auto`}
  ${tw`bg-blue-900 `}
  h1 {
    ${tw`mb-6 font-mono text-2xl text-center`}
    ${tw`text-blue-200 `}

    body.dark & {
    }
  }
  body.dark & {
  }
`

const Categories = styled.div`
  ${tw`grid max-w-6xl grid-cols-2 gap-3 py-12 m-auto md:grid-cols-4`}
  ${tw`text-blue-200`}
  body.dark & {
  }
`

const Item = styled.div`
  ${tw`w-full font-mono text-lg font-thin leading-snug text-center`}
  ${tw`border border-gray-100 shadow-md `}
  ${tw`flex items-center justify-center cursor-pointer`}
  

  transition: all .2s;
  transform: translateY(0);
  transform: scale(1);

  ${tw`bg-blue-800 border-gray-900`}
  body.dark & {
  }

  &:hover {
    ${tw`shadow-xl`}
    transform: scale(1.01) translateY(-2px);
  }
`

export default EspaciosIndexPage

export const pageQuery = graphql`
  query {
    allContentfulEspacios(sort: { fields: title, order: ASC }) {
      edges {
        node {
          title
          slug
          icono
          id
          recursos {
            title
          }
        }
      }
    }
    site {
      buildTime(locale: "es", formatString: "dddd Do - MMMM YYYY")
    }
  }
`
