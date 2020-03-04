const widgetIframe = document.getElementById('sound');
const widget = SC.Widget(widgetIframe);

const volume = document.getElementById('volume');
volume.addEventListener('input', () => {
  widget.setVolume(volume.value);
});

const init = () => {
  // プレイヤーの読み込みまで2秒待つ
  window.setTimeout(() => {
    widget.setVolume(25);
    const volumebar = document.getElementById('volumebar');
    volumebar.style.display = 'block';
  }, 2000);
}

init();

// ナビバーの開閉を設定
for (const burder of document.getElementsByClassName('navbar-burger')) {
  const menuId = burder.dataset.target;
  const menu = document.getElementById(menuId);
  burder.addEventListener('click', e => {
    burder.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
}
