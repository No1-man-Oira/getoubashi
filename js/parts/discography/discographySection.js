const soundcloudURL = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/971590474&color=%23130a1a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';

document.write(`
  <section class="hero is-fullheight" id="discography">
    <div class="hero-body">
      <div class="container has-text-centered">
        <iframe id="sound" width="100%" height="450" scrolling="no" frameborder="no"
          src="${soundcloudURL}">
        </iframe>
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
  </section>
`);
