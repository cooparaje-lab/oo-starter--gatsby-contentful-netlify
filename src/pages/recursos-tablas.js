import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import Fade from "react-reveal/Fade"

const RecursosTablasPage = ({ data }) => {
  const RecursoAirtable = data.allAirtable.edges
  //const buildTime = data.site

  return (
    <Layout>
      <SEO title="Espacios" />

      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrhjkZGMhXN5n8jG?backgroundColor=purple&viewControls=on"
        frameborder="0"
        onmousewheel=""
        width="100%"
        className="mt-3 bg-transparent "
        height="533"
      ></iframe>
      <Container>
        <h3 className="font-mono font-bold text-center text-gray-500 uppercase opacity-50">
          Última actualización {data.site.buildTime}
        </h3>
        <AirTables>
          {RecursoAirtable.map(({ node }) => {
            return (
              <div key={node.id} className="item">
                <Fade cascade>
                  <a
                    href={node.data.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full m-0 text-center text-gray-500"
                  >
                    {node.data.Name}
                  </a>
                  <p>{node.data.Notes}</p>
                </Fade>
              </div>
            )
          })}
        </AirTables>
      </Container>
    </Layout>
  )
}

const AirTables = styled.div`
  ${tw`flex flex-wrap justify-center max-w-6xl pt-12 m-auto`}
  body.dark & {
    ${tw`text-indigo-200`}
  }

  .item {
    ${tw`w-full max-w-md p-5 mx-3 border border-gray-500`}
    flex: 1
  }
`

const Container = styled.div`
  ${tw`w-full min-h-screen m-auto bg-gray-100`}
  h1 {
    ${tw`mb-6 font-mono text-2xl text-center`}

    body.dark & {
      ${tw`text-indigo-200 `}
    }
  }
  body.dark & {
    ${tw`bg-gray-900 `}
  }
`

const HeroRecurso = styled.div`
  ${tw`relative flex flex-col items-center justify-center w-full pt-32 pb-48 text-center bg-indigo-800`}

  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");

  .custom-shape-divider-bottom-1594014676 .shape-fill {
    ${tw`text-gray-100 fill-current`}

    body.dark & {
      ${tw`text-gray-900 fill-current`}
    }
  }

  h1 {
    ${tw`font-mono text-4xl font-bold text-white`}
  }

  body.dark & {
    ${tw`bg-indigo-900`}
  }
`

const Categories = styled.div`
  ${tw`flex flex-wrap justify-center max-w-6xl pt-12 m-auto`}
  body.dark & {
    ${tw`text-indigo-200`}
  }
`

const Item = styled.div`
  ${tw`w-1/2 m-2 my-3 font-mono text-lg font-thin leading-snug text-center sm:w-1/3 md:w-1/6`}
  ${tw`bg-white border border-gray-100 shadow-md `}
  ${tw`flex items-center justify-center cursor-pointer`}
  

  transition: all .2s;
  transform: translateY(0);
  transform: scale(1);

  body.dark & {
    ${tw`bg-gray-800 border-gray-900`}
  }

  &:hover {
    ${tw`shadow-xl`}
    transform: scale(1.01) translateY(-2px);
  }

`

export default RecursosTablasPage

export const pageQuery = graphql`
  query {
    allAirtable {
      edges {
        node {
          id
          data {
            Name
            Link
            Notes
          }
        }
      }
    }
    site {
      buildTime(locale: "es", formatString: "dddd Do - MMMM YYYY")
    }
  }
`
