(() => {
  const text1 = 'なんか';
  const text2 = '😇';
  const title = 'タイトル';

  const trackTitle = `
    <section class="section track-title">
      <h1 class="title" style="display: flex;">${title}</h1>
    </section>
  `;

  const seekController = `
    <section id="seek-controller">
      <div>
        <input type="range" id="time" name="time" min="0" max="11" style="width: 100%;">
      </div>
      <div>
        <label class="is-pulled-left" for="">--:--</label>
        <label class="is-pulled-right" for="">--:--</label>
      </div>
    </section>
  `;

  const playController = `
    <section class="section" id="play-controller">
      <i class="material-icons is-pulled-left">fast_rewind</i>
      <i class="material-icons">play_arrow</i>
      <i class="material-icons is-pulled-right">fast_forward</i>
    </section>
  `;

  const volumeController = `
    <section class="section" id="volume-controller">
      <i class="material-icons is-pulled-left">volume_mute</i>
      <input type="range" id="" name="" min="0" max="100" value="90" step="10" style="width: 60%;">
      <i class="material-icons is-pulled-right">volume_up</i>
    </section>
  `;

  const modal = `
    <div id="sound-modal" class="modal">
      <div class="modal-background close-modale"></div>
      <div class="modal-card">
        <section class="modal-card-body track-content">
          <img src="https://i1.sndcdn.com/artworks-yNDBcx5xzzt1bpSd-5HawgQ-t500x500.jpg">
        </section>
        <footer id="player-foot" class="modal-card-foot">
          ${trackTitle}
          ${seekController}
          ${playController}
          ${volumeController}
        </footer>
      </div>
      <button class="modal-close is-large close-modale"></button>
    </div>
  `

  const biography = document.getElementById('biography');
  biography.insertAdjacentHTML(
    'afterbegin',
    `<div class="hero-body">
        <div class="container has-text-centered">
            <a id="test" class="button is-primary is-large modal-button">Launch image modal</a>
            ${modal}
        </div>
      </div> `
  );
})();
