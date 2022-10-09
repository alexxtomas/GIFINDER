import SearchEngine from '../components/SearchEngine'
import { $ } from '../utilities/$'
const app = $('#app')

export const initMain = () => Main()

const Main = async () => {
  app.innerHTML += `
    <main>
        ${SearchEngine("What's on your mind?")}
    </main>
  `
}
