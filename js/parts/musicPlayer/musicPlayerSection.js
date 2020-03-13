(() => {
  const title = 'タイトル';

  const trackTitle = `
    <section class="section track-title">
      <h1 class="title" style="display: flex;">${title}</h1>
    </section>
  `;

  const seekController = `
    <section id="seek-controller">
      <div>
        <input class="slidebar seek" id="seekbar" type="range" id="time" name="time" min="0" max="11" style="width: 100%;">
      </div>
      <div style="padding-top: 25px;">
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
      <input class="slidebar" type="range" id="" name="" min="0" max="100" value="90" step="10" style="width: 60%;">
      <i class="material-icons is-pulled-right">volume_up</i>
    </section>
  `;

  const modal = `
    <div id="sound-modal" class="modal">
      <div class="modal-background close-modale"></div>
      <div class="modal-card">
        <section class="modal-card-body track-content">
          <img id="track-image" src="https://i1.sndcdn.com/artworks-yNDBcx5xzzt1bpSd-5HawgQ-t500x500.jpg">
        </section>
        <footer id="player-foot" class="modal-card-foot">
          ${trackTitle}
          ${seekController}
          ${playController}
          ${volumeController}
        </footer>
      </div>
      <button class="modal-close is-large close-modale" aria-label="close"></button>
    </div>
  `

  const modalDiv = document.getElementById('modal-div');
  modalDiv.insertAdjacentHTML(
    'afterbegin',
    `
      ${modal}
    `
  );
})();
