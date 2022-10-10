import { $ } from '../utilities/$'

const app = $('#app')

export const initFooter = () => Footer()
const Footer = () => {
  app.innerHTML += `
    <footer>
        <div class="github">
        <a href=""><i class="fa-brands fa-github"></i> </a>
        </div>

        <div class="linkedin">
        <a href=""><i class="fa-brands fa-linkedin"></i></i> </a>
        </div>

        <div class="giphy">
            <img src="https://i.postimg.cc/prjP2Mvd/ezgif-com-gif-maker-2.gif" alt="Giphy image"> 
         </div>
    </footer>
  `
}
