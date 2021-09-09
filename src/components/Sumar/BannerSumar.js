import { Link } from "gatsby"
import React from "react"
import { BiSend } from "react-icons/bi"

const BannerSumar = () => (
  <div className="relative z-10 flex flex-col items-center justify-center py-32 pt-48 overflow-hidden text-center text-gray-900 bg-yellow-600 border-t border-b border-gray-700">
    <h3 className="relative z-50 max-w-xl mx-auto mb-6 font-mono text-3xl font-light">
      Podes colaborar compartiendo un recurso o iniciar una búsqueda desde aquí.
    </h3>
    <Link
      to="/sumar"
      className="relative z-50 transition-opacity duration-700 rounded-md shadow-sm"
    >
      <span className="inline-flex items-center px-2 py-1 font-mono text-base font-bold leading-6 text-yellow-800 transition duration-150 ease-in-out bg-yellow-500 border border-yellow-400 rounded-md hover:text-yellow-700 focus:border-yellow-300">
        <BiSend className="mr-2 text-xl text-yellow-800 transform -rotate-90" />
        <span className="inline-block">Sumar</span>
      </span>
    </Link>
    <video
      autoPlay
      loop
      muted
      playsInline
      className="opacity-10 md:opacity-10 backgroundVideo"
      poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,q_100,w_1600/v1628557649/encoder/sunset0001-0120_osaihl.jpg"
    >
      <source
        src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628557649/encoder/sunset0001-0120_osaihl.mp4"
        type="video/mp4"
      />
      <source
        src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628557649/encoder/sunset0001-0120_osaihl.webm"
        type="video/webm"
      />
      <source
        src="https://res.cloudinary.com/srcouto/video/upload/q_auto:low/v1628557649/encoder/sunset0001-0120_osaihl.ogv"
        type="video/ogg"
      />
    </video>
  </div>
)

export default BannerSumar
