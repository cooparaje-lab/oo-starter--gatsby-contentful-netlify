import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    slug: "/",
    ariaLabel: "Santuan - Volver al inicio",
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
    title: "Artículos",
    slug: "/blog/",
    ariaLabel: "Ver las entradas del blog",
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
          className="my-2 font-mono text-white cursor-pointer hover:text-indigo-300"
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
