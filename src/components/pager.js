import React from "react"
import { Link } from "gatsby"

const Pager = ({ pageContext }) => {
  console.log(pageContext)
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <div className="bg-gradient-to-t from-gray-900">
      <div className="flex justify-between max-w-3xl py-12 mx-auto ">
        <div className="flex-1 w-full px-3 text-right ">
          {previousPagePath && (
            <Link
              className="flex items-center px-3 py-1 font-mono text-base font-bold text-yellow-500 transform border border-transparent rounded-md shadow-sm bg-white-500 md:translate-x-0 -translate-x-11 hover:bg-white-60"
              to={previousPagePath}
            >
              ← Anterior
            </Link>
          )}
        </div>

        <div className="flex-1 w-full px-3" style={{ justifySelf: "flex-end" }}>
          {nextPagePath && (
            <Link
              className="flex items-center justify-end px-3 py-1 font-mono text-base font-bold text-yellow-500 transform border border-transparent rounded-md shadow-sm bg-white-500 md:translate-x-0 -translate-x-11 hover:bg-white-60"
              to={nextPagePath}
            >
              Siguiente →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pager
