// /**
//  * スライドで音量を設定する
//  */
// const onInputSetVolume = (widget) => {
//   const volume = document.getElementById('volume');
//   volume.addEventListener('input', () => {
//     widget.setVolume(volume.value);
//   });
// }

/**
 * 初期音量を設定する
 */
const setInitialVolume = (widget) => {
  widget.setVolume(25);
  widget.getCurrentSound((callback) => {
    console.log(callback);
  });
  // document.getElementById('volumebar').style.display = 'block';
}


const selectPlay = (widget, id) => {
  console.log('セレクト');
  const newSoundUrl = `https://api.soundcloud.com/tracks/${!id ? '257744888' : id}`;
  widget.load(newSoundUrl, {
    color: '%23bcb890',
    auto_play: false,
    buying: false,
    liking: false,
    download: false,
    sharing: false,
    show_artwork: false,
    show_comments: false,
    show_playcount: false,
    show_user: false,
    show_reposts: false,
    hide_related: false,
    show_teaser: false,
    visual: false
  });
};

const onClickPlaySound = (widget) => {
  const playBtn = document.getElementById('playBtn');
  playBtn.addEventListener('click', () => {
    // widget.play();
    console.log('再生🙆‍♂️');
    const playscreen = document.getElementById('playscreen');
    // playscreen.style.display = 'none';
  });
}

/**
 * クリックでボリュームバーを開閉
 */
const onClickSwitchVolumebar = () => {
  const dropdownVolumebar = document.getElementById('dropdown-volumebar');
  dropdownVolumebar.addEventListener('click', e => {
    dropdownVolumebar.classList.toggle('is-active');
  });
}

(() => {
  const widgetIframe = document.getElementById('sc-widget');
  const widget = SC.Widget(widgetIframe);
  // newSoundUrl = 'https://api.soundcloud.com/tracks/13692671';

  widget.bind(SC.Widget.Events.READY, () => {
    // load new widget
    console.log('ロード完了🙆‍♂️');
    setInitialVolume(widget);
    // onInputSetVolume(widget);

    const trackImg = document.getElementById('trackImg');
    const imgUrl = `https://i1.sndcdn.com/artworks-yHdscZQmT8gOiBwz-ehZRvQ-t500x500.jpg`;
    trackImg.setAttribute('src', imgUrl);

    onClickPlaySound(widget);

    onClickSwitchVolumebar();

    widget.bind(SC.Widget.Events.FINISH, () => {
      console.log('終了🙇');
    });
  });
})();
