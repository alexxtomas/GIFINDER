import gifsService from '../services/GIPHY/service'
import Gif from './Gifs/Gif'

const RandomGif = async () => {
  const gif = await gifsService.getRandomGifs()

  const relevantGifInfo = { title: gif.data.title, image: gif.data.images.fixed_height.webp }
  return `
    ${Gif(relevantGifInfo.image, relevantGifInfo.title, 'Random')}
    
  `
}

export default RandomGif
