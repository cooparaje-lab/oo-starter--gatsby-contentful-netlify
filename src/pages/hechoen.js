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
        <div className="flex flex-col flex-wrap justify-center w-full min-h-screen mx-auto text-center text-white bg-gray-900 pt-">
          <div className="max-w-lg mx-auto">
            <h1 className="mt-0 font-mono text-xl font-bold">
              Hecho en Cooparaje
            </h1>
            <p className="font-mono prose-xl">
              El costo de mantenimiento mensual de este sitio es de $12
              <small className="uppercase">(arg)</small>/mes
            </p>
            <p className="my-6 font-mono prose-xl">
              Podes colaborar compartiendo un recurso o iniciar una búsqueda{" "}
              <Link
                to="/sumar"
                className="underline duration-300 decoration-2 underline-offset-4 hover:text-amber-400 decoration-wavy"
              >
                desde aquí
              </Link>
              .
            </p>
            <Link
              to="/sumar"
              className="relative z-50 transition-opacity duration-700 rounded-md shadow-sm"
            >
              <span className="btn yellow">
                <BiSend className="mr-2 text-xl text-yellow-800 transform -rotate-90" />
                <span className="inline-block">Sumar</span>
              </span>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NotFoundPage
