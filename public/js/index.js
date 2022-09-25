import counter from "./counter.js"
import hamburguerMenu from "./hamburguerMenu.js"
import mainMenu from "./menuController.js"

document.addEventListener("DOMContentLoaded", (e)=>{
    mainMenu()
    hamburguerMenu(".panel-btn", ".panel", ".menu a")
    counter()
})