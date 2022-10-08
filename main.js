import { initHeader } from './src/pages/Header'
import { initMain } from './src/pages/Main'
import './style.css'

initHeader()
initMain()

// here
const input = document.querySelector('input')
input.addEventListener('input', (evt) => {
  console.log(evt.target.value)
})
