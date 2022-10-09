import Gifs from '../components/Gifs/Gifs'
import giphhyService from '../services/GIPHY/service'
import { $ } from './$'
import { $All } from './$All'

export const searchEngineSubmit = () => {
  const main = $('main')
  const div = document.createElement('div')
  div.className = 'gallery'
  let inputValue

  document.addEventListener('input', evt => {
    inputValue = evt.target.value
  })

  document.addEventListener('submit', evt => {
    evt.preventDefault()
    if (!inputValue) return
    const findExistentGifts = $All('.gif-container')
    findExistentGifts?.forEach(e => {
      e.remove()
    })
    giphhyService.getGifsByWord(inputValue)
      .then(({ data: gifs }) => {
        if (gifs.length === 0) window.alert(`We have not found any gif of ${inputValue}`)
        $('input').value = ' '
        const relevantGifsInfo = gifs.map(({ title, images }) => ({ title, image: images.fixed_height.webp }))
        div.innerHTML += Gifs(relevantGifsInfo)
        main.appendChild(div)
      })
  })
}
