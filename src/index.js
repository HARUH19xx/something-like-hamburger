import './style.scss'

const body = document.querySelector('.l_body')
const button = document.querySelector('.e_hamurerMenu_button')
const hamburgerMenu = document.querySelector('.c_hamburgerMenu')
const iconT = document.querySelector('.e_icon-t');
const iconM = document.querySelector('.e_icon-m');
const iconB = document.querySelector('.e_icon-b');

const handleOpen = () => {
  hamburgerMenu.classList.add('open');
  iconT.classList.add('open');
  iconB.classList.add('open');
  iconM.classList.add('open');
}

const handleClose = () => {
  hamburgerMenu.classList.remove('open')
  iconT.classList.remove('open');
  iconB.classList.remove('open');
  iconM.classList.remove('open');
}

const toggleMenu = () => {
  if (hamburgerMenu.classList.contains('open')) {
    handleClose()
  } else {
    handleOpen()
  }
}

const hamburger = () => {
  button.addEventListener('click', toggleMenu)
  // body.addEventListener('click', handleClose)
}

hamburger()