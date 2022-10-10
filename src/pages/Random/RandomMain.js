import RandomGif from '../../components/RandomGif'
import { changePages } from '../../utilities/changePages'
import { initMain } from '../Main'

const RandomMain = async () => {
  await initMain('Random')
  document.addEventListener('click', async (evt) => {
    const main = document.querySelector('main')
    if (evt.target.className === 'change') {
      const container = document.querySelector('.gif-container-random')
      container.remove()
      main.innerHTML += await RandomGif()
    }
  })
  changePages('Random')
}

export default RandomMain
