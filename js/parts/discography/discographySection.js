(() => {
  const soundcloudTrackURL = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/971590474';
  const soundcloudWidgetOption = '&color=%23bcb890&auto_play=false&hide_related=false&download=true&show_user=true&show_reposts=false&show_teaser=false';
  const soundcloudIframe = `
  <iframe id="sc-widget" width="100%" height="500" allow="autoplay" scrolling="no" frameborder="no"
    src="${soundcloudTrackURL + soundcloudWidgetOption}">
  </iframe>
  `;

  const discography = document.getElementById('discography');
  discography.insertAdjacentHTML('afterbegin', `
    <div class="hero-body">
      <div class="container has-text-centered">
        ${soundcloudIframe}
        <div class="volumebar" id="volumebar" style="display: none">
          <div>Volume</div>
          <div>
            <label>0 </label>
            <input id="volume" class="input-range" type="range" name="range" value="25" data-unit="%">
            <label> 100</label>
          </div>
        </div>
      </div>
    </div>
  `);
})();
