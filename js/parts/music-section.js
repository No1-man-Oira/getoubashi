/**
* SoundCloudの埋め込みリンク
*/
const track = (color, url) => {
  const options =
    `&color=${color}` +
    '&auto_play=false' +
    '&buying=false' +
    '&liking=false' +
    '&download=true' +
    '&sharing=false' +
    '&show_artwork=true' +
    '&show_comments=false' +
    '&show_playcount=false' +
    '&show_user=false' +
    '&show_reposts=false' +
    '&hide_related=false' +
    '&show_teaser=false' +
    '&visual=true';

  return `
    <iframe id="sc-widget" class="track" width="500" height="400" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=${url}${options}">
    </iframe>
  `
}

/**
* 初期音量を設定する
*/
const setInitialVolume = (widget) => {
  widget.setVolume(25);
  widget.getCurrentSound((callback) => {
    console.log(callback);
  });
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
        const music = document.getElementById('music');
        const discoRect = music.getClientRects()[0];
        music.style.opacity = (discoRect.bottom / discoRect.height).toString();

        scrolled = true;
      }, 200);
    }
  });
}

/**
* SoundCloudWidget の操作
*/
const SCWidgetController = () => {
  const widgetIframe = document.getElementById('sc-widget');
  const widget = SC.Widget(widgetIframe);

  widget.bind(SC.Widget.Events.READY, () => {
    console.log('ロード完了🙆‍♂️');
    setInitialVolume(widget);
    widget.bind(SC.Widget.Events.FINISH, () => {
      console.log('終了🙇');
    });
  });
}

(() => {
  const music = document.getElementById('music');
  music.insertAdjacentHTML('afterbegin', `
    <div class="contents-body" id="music-body">
      <div id="music-container">
        <h1 id="music-section-title">MUSIC</h1>
        <div class="contents">
          ${track('%23b59d9f', 'https://api.soundcloud.com/tracks/257744888')}
          <i class="material-icons is-pulled-left" id="skip-previous">skip_previous</i>
          <i class="material-icons is-pulled-left" id="skip-next">skip_next</i>
        </div>
      </div>
    </div>
  `);
})();

onScrollChangeBackGround();
SCWidgetController();
