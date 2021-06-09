import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = AOS.init({
    disable: 'tablet' // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  })
}

window.onNuxtReady(() => {
  AOS.refreshHard()
})
