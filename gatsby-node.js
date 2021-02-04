/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require("lodash")
const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const tagTemplate = path.resolve(`src/templates/tags-template.js`)
    const recursosTemplate = path.resolve(`./src/templates/RecursosSingle.js`)
    const espacioTemplate = path.resolve(`./src/templates/EspacioSingle.js`)
    const blogPost = path.resolve(`./src/templates/BlogSingle.js`)

    resolve(
      graphql(
        `
          {
            allContentfulRecursos {
              edges {
                node {
                  id
                  title
                  slug
                  tags
                }
              }
            }
            allContentfulBlog {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulEspacios {
              edges {
                node {
                  id
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        paginate({
          createPage,
          items: result.data.allContentfulRecursos.edges,
          itemsPerPage: 20,
          pathPrefix: "/recursos",
          component: path.resolve("src/templates/RecursosArchive.js"),
        })

        paginate({	
          createPage,	
          items: result.data.allContentfulBlog.edges,	
          itemsPerPage: 50,	
          pathPrefix: "/articulos",	
          component: path.resolve("src/templates/BlogArchive.js"),	
        })

        const recursos = result.data.allContentfulRecursos.edges
        const espacios = result.data.allContentfulEspacios.edges
        const posts = result.data.allContentfulBlog.edges

        recursos.forEach((recurso, index) => {
          createPage({
            path: `/recursos/${recurso.node.slug}/`,
            component: recursosTemplate,
            context: {
              slug: recurso.node.slug,
              prev: index === 0 ? null : recursos[index - 1].node,
              next:
                index === recursos.length - 1 ? null : recursos[index + 1].node,
            },
          })
        })

        espacios.forEach((espacio, index) => {
          createPage({
            path: `/espacios/${espacio.node.slug}/`,
            component: espacioTemplate,
            context: {
              slug: espacio.node.slug,
              prev: index === 0 ? null : espacios[index - 1].node,
              next:
                index === espacios.length - 1 ? null : espacios[index + 1].node,
            },
          })
        })

        posts.forEach((post, index) => {
          createPage({
            path: `/articulos/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })
        })

        let tags = []

        _.each(recursos, (edge) => {
          if (_.get(edge, "node.tags")) {
            tags = tags.concat(edge.node.tags)
          }
        })

        tags = _.uniq(tags)

        tags.forEach((tag) => {
          createPage({
            path: `/etiquetas/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })
      })
    )
  })
}
