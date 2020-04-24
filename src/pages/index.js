import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <ImgContainer>
        <Image />
      </ImgContainer>
    </Home>
  </Layout>
)

const Home = styled.div`
  ${tw`h-screen text-center`}
`

const ImgContainer = styled.div`
  ${tw`relative max-w-sm m-auto`}
`

export default IndexPage
