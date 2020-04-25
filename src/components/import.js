import tw from "tailwind.macro"
import styled from "@emotion/styled"

export const Article = styled.article`
  ${tw`max-w-full m-auto`}

  .article {
    ${tw`px-2`}
  }
`

export const Title = styled.h3`
  ${tw`text-4xl hover:text-blue-400`}
  transition: all .5s;
`

export const HeroContainer = styled.div`
  ${tw`bg-blue-900`}
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
    ${tw`text-blue-600`}
  }
`
