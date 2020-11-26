import React from "react"
import { Link } from "gatsby"

const Pager = ({ pageContext }) => {
  console.log(pageContext)
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <nav className="flex justify-between w-full border-t border-gray-600">
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
    </nav>
  )
}

export default Pager
