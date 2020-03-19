
/**
 * active クラスを切り替え
 */
const switchActive = (menuBtn, menuContent) => {
  menuBtn.classList.toggle('active');
  menuContent.classList.toggle('active');
}

/**
 * menuItem クリック時にナビバーを消す
 */
const onClickCloseNavbar = (menuBtn, menuContent) => {
  for (const menuItem of document.getElementsByClassName('menu-item')) {
    menuItem.addEventListener('click', () => {
      switchActive(menuBtn, menuContent);
    });
  }
}

/**
 * menuBtn をクリックでナビバーを開閉
 */
const onClickSwitchNavbar = () => {
  const menuBtn = document.getElementById('menu_btn');
  const menuContent = document.getElementById('menu_content');

  menuBtn.addEventListener('click', () => {
    switchActive(menuBtn, menuContent);
  });

  onClickCloseNavbar(menuBtn, menuContent);
}

onClickSwitchNavbar();
