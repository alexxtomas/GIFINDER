import SearchEngine from '../components/SearchEngine'
const app = document.querySelector('#app')

export const initMain = () => Main()

const Main = async () => {
  app.innerHTML += `
    <main>
        ${SearchEngine("What's on your mind?")}
    </main>
  `
}
