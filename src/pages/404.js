import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SVGTaken from "../assets/taken.svg"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1 className="mt-10 font-mono font-bold">NOT FOUND</h1>
      <p className="pb-12 font-mono">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <SVGTaken className="h-auto max-w-md m-auto my-6" />
    </Container>
  </Layout>
)

const Container = styled.div`
  ${tw`flex flex-col flex-wrap justify-center max-w-6xl pt-12 m-auto text-center`}
`

export default NotFoundPage
