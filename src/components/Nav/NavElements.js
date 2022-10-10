import { removeComas } from '../../utilities/removeComas'
const defaultContent = [{ text: 'Home' }, { text: 'About' }, { text: 'Contact' }]

const NavElements = (content = defaultContent) => {
  const elements = content.map(({ text }) => `<li><span>${text}</span></li>`)

  return removeComas(elements.toString())
}

export default NavElements
