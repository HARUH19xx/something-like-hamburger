import './style.scss'

document.querySelector('.l_hamurerMenu__button').addEventListener('click', () => {

    let icon = document.querySelector('.c_icon');
    let iconM = document.querySelector('.c_icon-m');
    let iconB = document.querySelector('.c_icon-b');
  
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
  
    let hamburgerMenu = document.querySelector('.l_hamburgerMenu');
  
    if (hamburgerMenu.classList.contains('open') == true) {
      hamburgerMenu.classList.remove('open');
    } else {
      hamburgerMenu.classList.add('open');
    }
  
  })