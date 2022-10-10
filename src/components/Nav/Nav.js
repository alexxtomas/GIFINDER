import NavElements from './NavElements'
const navContent = [{ text: 'Home' }, { text: 'Trending' }, { text: 'Random' }]

const Nav = () => {
  return `
        <ul class="nav">
            ${NavElements(navContent)}
        </ul>
    `
}

export default Nav
