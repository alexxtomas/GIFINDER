import gifsService from '../services/GIPHY/service'
import Gifs from './Gifs/Gifs'

const TrendingGifs = async () => {
  const { data: gifs } = await gifsService.getTrendingGifs()
  const relevantGifsInfo = gifs.map(({ title, images }) => ({ title, image: images.fixed_height.webp }))

  return `
    <div class="gallery">
        ${Gifs(relevantGifsInfo)}
    </div>
  `
}

export default TrendingGifs
