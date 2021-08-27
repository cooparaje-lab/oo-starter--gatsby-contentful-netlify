import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import Fade from "react-reveal/Fade"
// import { Player, BigPlayButton } from "video-react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import "./serializers.css"
import { FiExternalLink } from "react-icons/fi"
const Bold = ({ children }) => <span className="font-bold">{children}</span>

const Text = ({ children }) => <p className="px-2 text-white">{children}</p>

const website_url = "https://www.cooparaje.com.ar"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (embedded) => (
      <Fade>
        <div
          className="my-8 aspect-w-16 aspect-h-9"
          dangerouslySetInnerHTML={{ __html: embedded }}
        />
      </Fade>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.file.contentType === "video/mp4") {
          return (
            <div className="max-w-6xl p-0 mx-auto my-6 mb-12 aspect-h-9 aspect-w-16">
              <Player src={node.data.target.file.url} loop={true} >
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <div className="relative overflow-hidden rounded-md cursor-pointer post-image">
                <img
                  className="w-full mx-auto"
                  alt={node.data.target.title}
                  src={node.data.target.file.url}
                />
              </div>
            </div>
          )
        }
      }
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        return (
          <div className="flex flex-col-reverse items-center justify-between w-full max-w-3xl p-4 mx-auto mb-6 duration-700 ease-in-out transform border border-gray-900 rounded-md md:flex-row from-gray-900 via-gray-900 bg-gradient-to-br hover:-translate-y-2 hover:bg-gray-900">
            <div className="relative z-10 flex flex-col text-white">
              <Link
                to={`/colaboraciones/${node.data.target.slug}`}
                className="relative z-10 font-serif text-center text-white"
              >
                <h3 style={{ margin: "0" }}>{node.data.target.title}</h3>
              </Link>
            </div>
            <div className="">
              <img
                className="object-cover w-auto h-32 py-2 mx-auto"
                style={{ marginTop: "0", marginBottom: "0" }}
                alt={node.data.target.title}
                src={node.data.target.logo.file.url}
              />
            </div>
          </div>
        )
      }
    },

    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="font-bold text-white external-link hover:text-gray-200"
          target={`${
            node.data.uri.startsWith(website_url) ? "_self" : "_blank"
          }`}
          rel={`${
            node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
          }`}
        >
          {node.content[0].value}
        </a>
      )
    },
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
  },
}

const FormatText = ({ FormatText }) => (
  <div>{renderRichText(FormatText, options)}</div>
)

export default FormatText
