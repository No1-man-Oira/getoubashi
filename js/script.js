const widgetIframe = document.getElementById('sound');
const widget = SC.Widget(widgetIframe);

const volumeBar = document.getElementById('volume');
volumeBar.addEventListener('input', () => {
  widget.setVolume(volumeBar.value);
});

// プレイヤーを読み込むまで2秒待つ
const init = () => {
  window.setTimeout(() => {
    widget.setVolume(25);
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
