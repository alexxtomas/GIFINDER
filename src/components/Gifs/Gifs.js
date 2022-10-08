import { removeComas } from '../../utilities/removeComas'
import Gif from './Gif'

const Gifs = (gifs) => {
  let gifsToRender = gifs.map(({ image, title }) => Gif(image, title))
  gifsToRender = gifsToRender.toString()
  const formatedGifts = removeComas(gifsToRender)
  return formatedGifts
}
export default Gifs
