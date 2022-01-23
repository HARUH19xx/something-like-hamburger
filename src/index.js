import './style.scss'

//定義
const button = document.querySelector('.e_hamurerMenu_button')
const hamburgerMenu = document.querySelector('.c_hamburgerMenu')
const hamburgerOption = document.querySelectorAll('.e_hamburgerMenu_box a')
const iconT = document.querySelector('.e_icon-t');
const iconM = document.querySelector('.e_icon-m');
const iconB = document.querySelector('.e_icon-b');
const outerHamburger = document.querySelector('.outerHamburger')

//展開
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
  for (let i = 0 ; i < hamburgerOption.length ; i++) {
    hamburgerOption[i].addEventListener('click', handleClose)
  }
  outerHamburger.addEventListener('click', handleClose)
}

//帰結
hamburger()