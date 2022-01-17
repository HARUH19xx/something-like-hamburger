import './style.scss'

document.querySelector('.e_hamurerMenu_button').addEventListener('click', () => {

    let iconT = document.querySelector('.e_icon-t');
    let iconM = document.querySelector('.e_icon-m');
    let iconB = document.querySelector('.e_icon-b');
  
    if (iconT.classList.contains('open') == true) {
      iconT.classList.remove('open');
    } else {
      iconT.classList.add('open');
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
  
    let hamburgerMenu = document.querySelector('.c_hamburgerMenu');
  
    if (hamburgerMenu.classList.contains('open') == true) {
      hamburgerMenu.classList.remove('open');
    } else {
      hamburgerMenu.classList.add('open');
    }
  
  })