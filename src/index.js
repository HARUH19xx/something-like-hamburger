import './style.scss'

document.querySelector('.hamurerMenu-button').addEventListener('click', () => {

    let icon = document.querySelector('.icon');
    let iconM = document.querySelector('.icon-m');
    let iconB = document.querySelector('.icon-b');
  
    if (icon.classList.contains('open') == true) {
      icon.classList.remove('open');
    } else {
      icon.classList.add('open');
    }

    if (iconB.classList.contains('open') == true) {
      iconB.classList.remove('open');
    } else {
      iconB.classList.add('open');
    }
  
    if (iconM.classList.contains('open') == true) {
      iconM.classList.remove('open');
    } else {
      iconM.classList.add('open');
    }
  
    let hamburgerMenu = document.querySelector('.hamburgerMenu');
  
    if (hamburgerMenu.classList.contains('open') == true) {
      hamburgerMenu.classList.remove('open');
    } else {
      hamburgerMenu.classList.add('open');
    }
  
  })