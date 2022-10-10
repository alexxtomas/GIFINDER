// import Menu from '../components/Menu'
import Nav from '../components/Nav/Nav'
import Title from '../components/Title'
import { $ } from '../utilities/$'

const app = $('#app')

export const initHeader = () => Header()

const Header = () => {
  app.innerHTML += `
  <header class="header">
    ${Title('GIFINDER')}
    ${Nav()}
  </header>`
}
