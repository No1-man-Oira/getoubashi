/**
* スクロール位置で背景を変える
*/
const onScrollChangeBackGround = () => {
  let scrolled = true;
  window.addEventListener('scroll', () => {
    if (scrolled) {
      scrolled = false;

      window.setTimeout(function () {
        const top = document.getElementById('top');
        const topRect = top.getClientRects()[0];
        top.style.opacity = topRect.bottom / topRect.height;

        const music = document.getElementById('music');
        const discoRect = music.getClientRects()[0];
        const value = discoRect.bottom / discoRect.height;

        if (value > 1) {
          music.style.opacity = (2 - value).toString();
        } else {
          music.style.opacity = value.toString();
        }

        scrolled = true;
      }, 200);
    }
  });
}

/**
* 背景画像を設定する
*/
const setMusicSectionBackGround = (widget) => {
  widget.getCurrentSound((callback) => {
    const music = document.getElementById('music');

    for (const child of music.children) if (child.tagName === 'STYLE') music.removeChild(child);

    music.insertAdjacentHTML('afterbegin', `
      <style>
        #music:before {
          background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('images/trackImage/${trackList[callback.title]}.jpg');
        }
      </style>
    `);
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
    widget.setVolume(50);

    const previousIcon = document.getElementById('skip-previous');
    previousIcon.addEventListener('click', () => {
      widget.seekTo(0);
      widget.prev();
      widget.pause();
    });

    const nextIcon = document.getElementById('skip-next');
    nextIcon.addEventListener('click', () => {
      widget.seekTo(0);
      widget.next();
      widget.pause();
    });
  });

  widget.bind(SC.Widget.Events.FINISH, () => {
    console.log('終了🙇');
  });

  widget.bind(SC.Widget.Events.PLAY, () => {
    setMusicSectionBackGround(widget);
  });
}

/**
* active クラスを切り替え
*/
const switchActive = (menuBtn, menuContent) => {
  menuBtn.classList.toggle('active');
  menuContent.classList.toggle('active');
}

/**
* ナビバーのイベントを設定する
*/
const setNavbarEvent = () => {
  const menuBtn = document.getElementById('menu_btn');
  const menuContent = document.getElementById('menu_content');

  menuBtn.addEventListener('click', () => {
    switchActive(menuBtn, menuContent);
  });

  for (const menuItem of document.getElementsByClassName('menu-item')) {
    menuItem.addEventListener('click', () => {
      switchActive(menuBtn, menuContent);
    });
  }
}

setNavbarEvent();
onScrollChangeBackGround();
SCWidgetController();
