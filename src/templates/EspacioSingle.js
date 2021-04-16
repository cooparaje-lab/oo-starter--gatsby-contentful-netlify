import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import Fade from "react-reveal/Fade"
import CardRecursos from "../components/CardRecursos"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./post.css"

const EspacioPostTemplate = ({ data, pageContext, location }) => {
  const espacio = data.contentfulEspacios
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <Seo
        title={`Espacio ${espacio.title}`}
        description={`${espacio.excerpt.excerpt}`}
      />
      <div className="bg-gray-900">
        <div className="relative w-full px-1 pt-24 pb-40 m-auto text-center text-white bg-gray-800">
          <Fade duration={800} delay={600}>
            <span className="text-6xl transform scale-125">
              {espacio.icono}
            </span>
            <h1 className="m-0 mt-2 font-mono text-3xl font-bold text-center">
              {espacio.title}
            </h1>
            <p className="hidden m-0 mt-2 font-serif text-2xl italic text-center opacity-75">
              {espacio.excerpt.excerpt}
            </p>
          </Fade>

          <div className="custom-shape-divider-bottom-1594014676">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div >
          {espacio.recursos ? (
            <div className="flex flex-col justify-center max-w-3xl pt-12 m-auto text-gray-200">
              {espacio.recursos.map((item, i) => (
                <Fade duration={800} delay={600} key={item.slug}>
                  <CardRecursos card={item} />
                </Fade>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 ">Proximamente</div>
          )}
        </div>

        <div className="w-full max-w-2xl m-auto article" id={espacio.slug}>
          <div className="flex justify-between py-12">
            <div>
              {prev && (
                <Link
                  to={`/espacios/${kebabCase(prev.slug)}/`}
                  rel="prev"
                  className="font-mono font-bold text-yellow-500 hover:text-white"
                >
                  ← {prev.title}
                </Link>
              )}
            </div>

            <div style={{ justifySelf: "flex-end" }}>
              {next && (
                <Link
                  to={`/espacios/${kebabCase(next.slug)}/`}
                  rel="next"
                  className="font-mono font-bold text-yellow-500 hover:text-white"
                >
                  {next.title} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EspacioPostTemplate

export const pageQuery = graphql`
  query EspacioBySlug($slug: String!) {
    contentfulEspacios(slug: { eq: $slug }) {
      id
      title
      slug
      excerpt {
        excerpt
      }
      icono
      recursos {
        title
        slug
        url
        createdAt(locale: "es", formatString: "Do MMMM, YYYY")
        category
        espacio {
          title
          slug
          icono
        }
        featuredImg {
          fixed(width: 360, height: 250) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
          fluid(maxWidth: 1500) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        excerpt {
          excerpt
          childMarkdownRemark {
            timeToRead
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  }
`
