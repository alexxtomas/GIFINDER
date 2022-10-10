
import { initHeader } from './src/pages/Header'
import { initMain } from './src/pages/Main'
import { changePages } from './src/utilities/changePages'
import { searchEngineSubmit } from './src/utilities/searchEngineSubmit'
import './style.css'
initHeader()
const HomeMain = () => {
  initMain('Home')
  searchEngineSubmit()
  changePages('Home')
}

HomeMain()

export default HomeMain
