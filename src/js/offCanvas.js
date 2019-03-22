function offCanvasMenu(){
  const closeBtn = document.getElementById('close-btn');
  const openBtn = document.getElementById('open-btn');
  const offCanvasMobileNav = document.querySelector('.off-canvas--nav');
  const offCanvasContent = document.querySelector('.off-canvas--content');
  const overlay = document.querySelector('.overlay');
  const mobileAnchors = document.querySelectorAll('.offCanvas--anchor');

  mobileAnchors.forEach((el) => {
    el.addEventListener('click', toCloseMobileNav);
  })
  
  function toCloseMobileNav() {
    offCanvasMobileNav.classList.remove('open-nav');
    offCanvasContent.classList.remove('open-nav')
    overlay.classList.remove('overlay-active');
  }
  
  function toOpenMobileNav () {
    offCanvasMobileNav.classList.add('open-nav');
    offCanvasContent.classList.add('open-nav');
    overlay.classList.add('overlay-active');
  }

  closeBtn.addEventListener('click', toCloseMobileNav);
  openBtn.addEventListener('click', toOpenMobileNav);
  overlay.addEventListener('click', toCloseMobileNav);
}

offCanvasMenu();