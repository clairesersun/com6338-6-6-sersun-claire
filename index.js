var hambtn = document.querySelector('button.hamburger-btn')
var menu = document.querySelector('ul.hamburger-menu')

function showMenu(e) {
    e.stopPropagation()
    menu.classList.toggle("show-menu")
    hambtn.focus()
    if (menu.classList.contains('show-menu')) {
        hambtn.setAttribute('aria-expanded', true)
    } else {
        hambtn.setAttribute('aria-expanded', false)
    }
  }
  function hideMenu(e) {
    e.stopPropagation()
    hambtn.focus()
    if (menu.classList.contains('show-menu')) {
        hambtn.setAttribute('aria-expanded', true)
        menu.classList.toggle("show-menu")
    } else {
        hambtn.setAttribute('aria-expanded', false)
    }
  }

  hambtn.onclick = showMenu


//clicking outside will hide, but inside should not hide
document.body.onclick = function(e) {
    if (!menu.contains(e.target)){
        hideMenu(e)
    }
}
// //pressing escape should close but not when menu items are selected
document.onkeyup = function(e){
    if (e.key === 'Escape'){
        hideMenu(e)
    } if (e.key === 'Escape' && !menu.contains(e.target)){
        hideMenu(e)
    }
}