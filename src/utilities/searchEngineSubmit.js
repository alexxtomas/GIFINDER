import Gifs from '../components/Gifs/Gifs'
import giphhyService from '../services/GIPHY/service'

export const searchEngineSubmit = () => {
  const main = document.querySelector('main')
  const section = document.createElement('section')
  section.className = 'gifs'
  let inputValue

  document.addEventListener('input', evt => {
    inputValue = evt.target.value
  })

  document.addEventListener('submit', evt => {
    evt.preventDefault()
    const findExistentGifts = document.querySelectorAll('.gif-container')
    findExistentGifts?.forEach(e => e.remove())
    console.log(inputValue)
    giphhyService.getGifsByWord(inputValue)
      .then(({ data: gifts }) => {
        document.querySelector('input').value = ' '
        const relevantGifsInfo = gifts.map(({ title, images }) => ({ title, image: images.fixed_height.webp }))
        section.innerHTML += Gifs(relevantGifsInfo)
        main.appendChild(section)
      })
  })
}
