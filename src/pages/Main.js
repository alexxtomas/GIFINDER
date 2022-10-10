import Button from '../components/Button'
import RandomGif from '../components/RandomGif'
import SearchEngine from '../components/SearchEngine'
import TrendingAnimatedText from '../components/TrendingAnimatedText'
import TrendingGifs from '../components/TrendingGifs'
import { $ } from '../utilities/$'

// import ChangeGif from '../'
const app = $('#app')

export const initMain = (page) => Main(page)

const Main = async (page = 'Home') => {
  if (page === 'Home') {
    app.innerHTML += `
    <main>
        ${SearchEngine("What's on your mind?")}
    </main>
  `
  } else if (page === 'Trending') {
    app.innerHTML += `
      <main>
        ${TrendingAnimatedText()}
        ${await TrendingGifs()}
      </main>
    `
  } else if (page === 'Random') {
    const main = document.createElement('main')
    main.innerHTML += `
                  ${Button('Change', 'change')}
                    ${await RandomGif()}
            `
    app.appendChild(main)
  }
}
