import styled, { css } from 'styled-components'

import customMedia from 'styles/media-query'
import { fadeIn } from 'styles/animates'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    width: 100%;
    height: 100%;
    padding: 0 ${theme.spacings.medium};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    animation: ${fadeIn} ${theme.transition.slow};
    transition: all ${theme.transition.default};

    ${customMedia.greaterThan('large')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`
