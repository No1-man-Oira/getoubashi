/**
 * クリックでナビバーを開閉
 */
const onClickSwitchNavbar = () => {
  for (const burder of document.getElementsByClassName('navbar-burger')) {
    const menuId = burder.dataset.target;
    const menu = document.getElementById(menuId);
    burder.addEventListener('click', e => {
      burder.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  }
}

/**
 * スクロール位置で背景を変える
 */
const onScrollChangeBackGround = () => {
  let scrolled = true;
  window.addEventListener('scroll', () => {
    if (scrolled) {
      scrolled = false;

      window.setTimeout(function () {
        const discography = document.getElementById('discography');
        const discoRect = discography.getClientRects()[0];
        discography.style.opacity = (discoRect.bottom / discoRect.height).toString();

        scrolled = true;
      }, 200);
    }
  });
}

(() => {
  const btn = document.getElementById('test');
  btn.addEventListener('click', () => {
    console.log('ん？😇');
    const modal = document.getElementById('sound-modal');
    modal.classList.toggle('is-active');
  })
})();

(() => {
  const modalCloseElement = document.getElementsByClassName('close-modale');
  for (let i = 0; i < modalCloseElement.length; i++) {
    modalCloseElement[i].addEventListener('click', () => {
      const modal = document.getElementById('sound-modal');
      modal.classList.toggle('is-active');
    });
  }
})();

onScrollChangeBackGround();
onClickSwitchNavbar();
