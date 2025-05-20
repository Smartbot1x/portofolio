
import '../style/style.css'
import Header from './home.js'


document.querySelector('#app').innerHTML = `
  <header></header>
  <main></main>
  <footer></footer>
`

document.querySelector('header').appendChild(Header());