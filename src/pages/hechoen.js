import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { BiSend } from "react-icons/bi"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <Seo title="404" />
        <div className="flex flex-col flex-wrap justify-center w-full min-h-screen pt-12 m-auto text-center text-white bg-gray-900">
          <h1 className="mt-0 font-mono text-xl font-bold">
            Hecho en Cooparaje
          </h1>
          <p className="font-mono prose-xl">
            El costo de mantenimiento mensual de este sitio es de $12
            <small className="uppercase">(arg)</small>
          </p>
          <p className="my-6 font-mono prose-xl">
            Podes colaborar compartiendo un recurso o iniciar una búsqueda{" "}
            <Link
              to="/sumar"
              className="border-b-2 border-current hover:opacity-80"
            >
              desde aquí
            </Link>
            .
          </p>
          <Link
            to="/sumar"
            className="relative z-50 transition-opacity duration-700 rounded-md shadow-sm"
          >
            <span className="inline-flex items-center px-4 py-2 font-mono text-xl font-bold leading-6 text-yellow-800 transition duration-150 ease-in-out bg-yellow-500 border border-yellow-400 rounded-md hover:text-yellow-700 focus:border-yellow-300">
              <BiSend className="mr-2 text-xl text-yellow-800 transform -rotate-90" />
              <span className="inline-block">Sumar</span>
            </span>
          </Link>
        </div>
      </Layout>
    </>
  )
}

export default NotFoundPage
