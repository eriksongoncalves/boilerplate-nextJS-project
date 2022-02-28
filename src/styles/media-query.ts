import { generateMedia } from 'styled-media-query'
import theme from './theme'

const customMedia = generateMedia(theme.grid.breakpoints)

export default customMedia
