var hambtn = document.querySelector('button.hamburger-btn')
var menu = document.querySelector('ul.hamburger-menu')

function hideMenu() {
    hambtn.setAttribute('aria-expanded', false)
    menu.classList.remove('show-menu')
    hambtn.focus()
    }

function showMenu(e) {
    if (getComputedStyle(this).ariaExpanded === true){
        hideMenu()
    } else {
        e.stopPropagation()
        hambtn.setAttribute('aria-expanded', true)
        menu.classList.add("show-menu")
    }
}

hambtn.onclick = showMenu
//clicking outside will hide, but inside should not hide
document.body.onclick = function(e) {
    if (!menu.contains(e.target)){
        hideMenu()
    }
}
//pressing escape should close.
document.onkeyup = function(e){
    if (e === 'Escape'){
        hideMenu()
    } if (e === 'Escape' && !menu.contains(e.target)){
        hideMenu()
    }
}

//getComputedStyle(this).visibility
