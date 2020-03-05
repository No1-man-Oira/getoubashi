/**
 * スライドで音量を設定する
 */
const onInputSetVolume = (widget) => {
  const volume = document.getElementById('volume');
  volume.addEventListener('input', () => {
    widget.setVolume(volume.value);
  });
}

/**
 * 初期音量を設定する
 */
const setInitialVolume = (widget) => {
  widget.setVolume(25);
  widget.getCurrentSound((callback) => {
    console.log(callback);
  });
  document.getElementById('volumebar').style.display = 'block';
}


const selectPlay = (widget, id) => {
  console.log('セレクト');
  const newSoundUrl = `https://api.soundcloud.com/tracks/${!id ? '257744888' : id}`;
  widget.load(newSoundUrl, {
    show_teaser: false
  });
};

(() => {
  const widgetIframe = document.getElementById('sc-widget');
  const widget = SC.Widget(widgetIframe);
  // newSoundUrl = 'https://api.soundcloud.com/tracks/13692671';

  widget.bind(SC.Widget.Events.READY, () => {
    // load new widget
    console.log('ロード完了🙆‍♂️');
    setInitialVolume(widget);
    onInputSetVolume(widget);
    widget.bind(SC.Widget.Events.FINISH, () => {
      console.log('終了🙇');
    });
  });

  document.getElementsByClassName('test')[0].addEventListener('click', () => {
    selectPlay(widget, '257745112');
  });

})();