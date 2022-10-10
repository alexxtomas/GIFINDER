import HomeMain from '../../main'
import RandomMain from '../pages/Random/RandomMain'
import TrendingMain from '../pages/Trending/TrendingMain'
import { cleanPage } from './cleanPage'
export const changePages = (currentPage = 'Home') => {
  const spans = document.querySelectorAll('li span')
  const inner = [{ page: 'Trending', action: TrendingMain }, { page: 'Random', action: RandomMain }]
  if (currentPage !== 'Home') {
    inner[0].page = 'Home'
    inner[0].action = HomeMain
    inner[1].page = currentPage === 'Trending' ? 'Random' : 'Trending'
    inner[1].action = currentPage === 'Trending' ? RandomMain : TrendingMain
  }
  spans.forEach(span => {
    span.addEventListener('click', (evt) => {
      if (evt.target.innerHTML === inner[0].page) {
        cleanPage(document.querySelector('main'))
        inner[0].action()
      } else if (evt.target.innerHTML === inner[1].page) {
        cleanPage(document.querySelector('main'))
        inner[1].action()
      }
    })
  })
}
