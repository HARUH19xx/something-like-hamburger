import './style.scss'

const button = document.querySelector('.e_hamurerMenu_button')
const hamburgerMenu = document.querySelector('.c_hamburgerMenu')

const handleToggle = () => {
  let iconT = document.querySelector('.e_icon-t');
  let iconM = document.querySelector('.e_icon-m');
  let iconB = document.querySelector('.e_icon-b');

  if (hamburgerMenu.classList.contains('open')) {
    hamburgerMenu.classList.remove('open');
    iconT.classList.remove('open');
    iconB.classList.remove('open');
    iconM.classList.remove('open');
  } else {
    hamburgerMenu.classList.add('open');
    iconT.classList.add('open');
    iconB.classList.add('open');
    iconM.classList.add('open');
  }
}

button.addEventListener('click', handleToggle)