import NavElements from './NavElements'
const navContent = [{ text: 'Home', href: '/index.html' }, { text: 'Trending', href: '/src/pages/Trending/index.html' }, { text: 'Random', href: '/src/pages/Random/index.html' }]

const Nav = () => {
  return `
        <ul class="nav">
            ${NavElements(navContent)}
        </ul>
    `
}

export default Nav
