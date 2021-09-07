import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
const EspaciosIndexPage = ({ data }) => {
  const allEspacios = data.allContentfulEspacios.edges
  //const buildTime = data.site

  return (
    <Layout>
      <Seo title="Todos los Espacios" />
      <div>
        <h3 className="p-3 py-16 font-mono font-bold text-center text-gray-300 uppercase">
          Última actualización {data.site.buildTime}
        </h3>
        <div className="grid max-w-6xl grid-cols-2 gap-3 px-3 pb-12 m-auto md:grid-cols-4">
          {allEspacios.map((item) => (
            <Link
              to={`/espacios/${kebabCase(item.node.slug)}/`}
              className="flex items-center justify-center w-full m-auto font-mono text-lg font-thin leading-snug text-center duration-700 bg-gray-800 border border-gray-900 shadow-md cursor-pointer hover:from-gray-900 hover:via-gray-900 hover:bg-gray-700 from-gray-700 via-gray-800 bg-gradient-to-br"
              key={item.node.id}
            >
              {item.node.recursos ? (
                <div className="block pt-1 text-gray-100">
                  <span className="block my-2 mt-3 text-4xl">
                    {item.node.icono}
                  </span>
                  <b className="block py-2 mb-3 font-bold">{item.node.title}</b>
                </div>
              ) : (
                <div className="block pt-1 text-gray-100 ">
                  <span className="block my-2 mt-3 text-4xl opacity-25">
                    {item.node.icono}
                  </span>
                  <b className="block py-2 mb-3 font-bold text-gray-100">
                    {item.node.title}
                  </b>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

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
