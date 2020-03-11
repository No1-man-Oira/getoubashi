(() => {
  const trackId = 'playlists/971590474';
  const apiUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${trackId}`;
  const apiOption =
    `&color=%23bcb890` +
    '&auto_play=false' +
    '&buying=false' +
    '&liking=false' +
    '&download=false' +
    '&sharing=false' +
    '&show_artwork=false' +
    '&show_comments=false' +
    '&show_playcount=false' +
    '&show_user=false' +
    '&show_reposts=false' +
    '&hide_related=false' +
    '&show_teaser=false' +
    '&visual=false';
  const soundcloudIframe = `
  <iframe id="sc-widget" width="100%" height="300px" scrolling="no" frameborder="no" allow="autoplay"
    src="${apiUrl + apiOption}">
  </iframe>
  `;

  const volumeIcon = `
    <div class="dropdown is-up is-right" id="dropdown-volumebar">
      <div class="dropdown-trigger">
          <span class="icon is-small">
            <i class="material-icons">volume_up</i>
          </span>
      </div>
      <div class="dropdown-menu" id="dropdown-volume">
        <div class="dropdown-content">
          <div class="dropdown-item">
            100%
          </div>
          <div class="dropdown-item">
            50%
          </div>
          <div class="dropdown-item">
            25%
          </div>
          <div class="dropdown-item">
            0%
          </div>
        </div>
      </div>
    </div>
  `

  const musicplayer = document.getElementById('musicplayer');
  musicplayer.insertAdjacentHTML('afterbegin', `
    <h1 class="title has-text-white content2h1">
      MUSIC
    </h1>
    ${soundcloudIframe}
    <span class="player">
      ${volumeIcon}
    </span>

  `);
})();
