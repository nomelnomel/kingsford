import 'aos/dist/aos.css'
import AOS from 'aos'

const globalAOS = AOS.init({
  // note: your options here
  startEvent: 'load',
  disable () {
    const maxWidth = 800

    return window.innerWidth < maxWidth
  }
})

// trigger when the Nuxt page is ready
window.onNuxtReady(() => {
  console.log('Nuxt.js is ready and mounted')
})

export default ({ app }) => {
  app.AOS = globalAOS
}

console.log('asdasd')
