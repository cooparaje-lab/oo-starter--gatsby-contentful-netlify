import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"

const Pager = ({ pageContext }) => {
  console.log(pageContext)
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <PageNav >
      <div className="flex-1 w-full px-3 text-right">
        {previousPagePath && (
          <Link className="flex items-center justify-center px-3 py-1 text-base font-bold transform border border-transparent rounded-md shadow-sm bg-white-500 md:translate-x-0 -translate-x-11 hover:bg-white-60" to={previousPagePath}>
            ← Anterior
          </Link>
        )}
      </div>

      <div className="flex-1 w-full px-3" style={{ justifySelf: "flex-end" }}>
        {nextPagePath && (
          <Link className="flex items-center justify-center px-3 py-1 text-base font-bold transform border border-transparent rounded-md shadow-sm bg-white-500 md:translate-x-0 -translate-x-11 hover:bg-white-60" to={nextPagePath}>
            Siguiente →
          </Link>
        )}
      </div>
    </PageNav>
  )
}

export default Pager

const PageNav = styled.nav`
  ${tw`flex justify-between py-12 bg-blue-900`}
  a {
    ${tw`font-mono font-bold`}
  }
  body.dark & a {
    ${tw`text-blue-300`}
  }
`