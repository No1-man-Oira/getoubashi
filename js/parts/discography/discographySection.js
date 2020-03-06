(() => {
  const trackId = 'tracks/257744888';
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
    '&visual=true';
  const soundcloudIframe = `
  <iframe id="sc-widget" width="100px" height="100px" scrolling="no" frameborder="no"
    src="${apiUrl + apiOption}" style="position: absolute; z-index: -1;">
  </iframe>
  `;

  const musicplayer = document.getElementById('musicplayer');
  musicplayer.insertAdjacentHTML('afterbegin', `
    <h1 class="title has-text-white content2h1">
      MUSIC
    </h1>
    ${soundcloudIframe}
    <span class="player">
      <div class="volumebar" id="volumebar" style="display: none">
        <div>Volume</div>
        <div>
          <label>0 </label>
          <input id="volume" class="input-range" type="range" name="range" value="25" data-unit="%">
          <label> 100</label>
        </div>
      </div>
    </span>

  `);
})();
