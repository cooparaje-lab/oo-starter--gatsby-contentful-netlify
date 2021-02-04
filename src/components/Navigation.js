import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
    ariaLabel: "Santuan - Volver al inicio",
  },
  {
    title: "Buscar",
    slug: "/buscar/",
    ariaLabel: "usar buscador",
  },
  {
    title: "Recursos",
    slug: "/recursos/",
    ariaLabel: "Ver todos los recursos",
  },
  {
    title: "Espacios",
    slug: "/espacios/",
    ariaLabel: "Ver todos los espacios",
  },
  {
    title: "Articulos",
    slug: "/articulos/",
    ariaLabel: "Ver todos los espacios",
  },
  {
    title: "Etiquetas",
    slug: "/etiquetas/",
    ariaLabel: "Ver todas las etiquetas",
  },
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full">
    {routes.map((route, i) => {
      return (
        <Link
          key={i}
          onClick={closeMenu}
          activeClassName="font-bold"
          alt={route.ariaLabel}
          title={route.ariaLabel}
          aria-label={route.ariaLabel}
          to={route.slug}
          className="my-2 font-mono text-white cursor-pointer hover:text-blue-300"
        >
          {route.title}
        </Link>
      )
    })}
    <Link
      activeClassName="font-bold"
      onClick={closeMenu}
      alt="Licenca}ia"
      title="Licenca}ia"
      aria-label="Licenca}ia"
      to={`/licencia`}
      className="absolute bottom-0 py-6 my-2 font-mono text-white opacity-50 cursor-pointer hover:text-blue-300"
    >
      Licencia
    </Link>
  </nav>
)

export default Navigation
