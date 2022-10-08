import { removeComas } from '../../utilities/removeComas'
const defaultContent = [{ text: 'Home', href: '#' }, { text: 'About', href: '#' }, { text: 'Contact', href: '#' }]

const NavElements = (content = defaultContent) => {
  const elements = content.map(({ text, href }) => `<li><a href="${href}"><span>${text}</span></a></li>`)

  return removeComas(elements.toString())
}

export default NavElements
