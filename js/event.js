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
        const rect = discography.getClientRects()[0];
        discography.style.opacity = (rect.bottom / rect.height).toString();
        scrolled = true;
      }, 200);
    }
  });
}

onScrollChangeBackGround();
onClickSwitchNavbar();
