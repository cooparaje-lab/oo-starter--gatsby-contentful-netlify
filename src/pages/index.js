import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { Title } from "../components/import"
import EmptyStreet from "../assets/empty_street.svg"
import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home>
      <Title>
        <Fade top cascade duration={1200}>
          <h1>Hola doctores</h1>
        </Fade>
      </Title>
      <p>Sean bienvenides a un nuevo sitio web.</p>
      <p>Ahora a crear algo grandioso</p>
      <ImgContainer>
        <EmptyStreet />
      </ImgContainer>
    </Home>
  </Layout>
)

const Home = styled.div`
  ${tw`flex flex-col items-center justify-end pt-6 text-center bg-blue-100`}
  height: 60vh;
`

const ImgContainer = styled.div`
  ${tw`relative w-full max-w-sm pt-12 m-0`}
  height: auto;
  svg {
    ${tw`w-full`}
    height: auto
  }
`

export default IndexPage
