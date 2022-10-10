import gifsService from '../services/GIPHY/service'
import Gif from './Gifs/Gif'

const RandomGif = async () => {
  const gif = await gifsService.getRandomGifs()

  const relevantGifInfo = { title: gif.data.title, image: gif.data.images.fixed_height.webp }
  console.log(relevantGifInfo)
  return `
    ${Gif(relevantGifInfo.image, relevantGifInfo.title)}
    
  `
}

export default RandomGif
