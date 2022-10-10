import Button from '../../components/Button'
import RandomGif from '../../components/RandomGif'
import { initHeader } from '../Header'
import { initMain } from '../Main'

initHeader()
await initMain('Random')
document.addEventListener('click', async (evt) => {
  const main = document.querySelector('main')
  if (evt.target.className === 'change') {
    const container = document.querySelector('.gif-container')
    container.remove()
    const button = document.querySelector('.change')
    button.remove()

    main.innerHTML += await RandomGif()
    main.innerHTML += Button('Change', 'change')
  }
})
