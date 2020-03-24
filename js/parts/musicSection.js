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
    '&show_artwork=false' +
    '&show_comments=false' +
    '&show_playcount=false' +
    '&show_user=false' +
    '&show_reposts=false' +
    '&hide_related=false' +
    '&show_teaser=false' +
    '&visual=false';

  return `
    <iframe id="sc-widget" class="track" width="500" height="400" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=${url}${options}">
    </iframe>
  `;
}

(() => {
  const music = document.getElementById('music');
  music.insertAdjacentHTML('afterbegin', `
    <div class="contents-body" id="music-body">
      <div id="music-container">
        <h1 id="music-section-title">MUSIC</h1>
        <div class="contents">
          ${track('%23b59d9f', 'https://api.soundcloud.com/playlists/971590474')}
          <i class="material-icons is-pulled-left" id="skip-previous">skip_previous</i>
          <i class="material-icons is-pulled-left" id="skip-next">skip_next</i>
        </div>
      </div>
    </div>
  `);
})();
