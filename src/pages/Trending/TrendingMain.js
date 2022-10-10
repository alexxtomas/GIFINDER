import { changePages } from '../../utilities/changePages'
import { initMain } from '../Main'

const TrendingMain = async () => {
  await initMain('Trending')
  changePages('Trending')
}

export default TrendingMain
