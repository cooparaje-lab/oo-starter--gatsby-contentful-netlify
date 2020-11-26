import tw from "twin.macro"
import styled from "@emotion/styled"

export const Article = styled.article`
  ${tw`max-w-full m-auto shadow-lg `}

  ${tw`bg-gray-900 `}
  body.dark & {
  }

  .article {
    ${tw`px-6`}
    ${tw`text-gray-100 `}

    body.dark & {
    }
  }
`

export const Title = styled.h3`
  ${tw`text-4xl hover:text-indigo-100`}
  transition: all .5s;
  ${tw`text-indigo-100`}

  body.dark & {
  }
`

export const HeroContainer = styled.div`
  ${tw`relative bg-indigo-900`}
`

export const Meta = styled.div`
  ${tw`relative flex items-baseline justify-between p-0`}
  top: -40px;
`
export const ArticleText = styled.p`
  ${tw`my-3 text-lg`}
`

export const Tags = styled.div`
  ${tw`mt-0`}

  a {
    ${tw`text-indigo-600`}
  }
`
