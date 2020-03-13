(() => {
  const text1 = 'なんか';
  const text2 = '😇';

  const modal = `
    <a id="test" class="button is-primary is-large modal-button">Launch image modal</a>
    <div id="sound-modal" class="modal">
      <div class="modal-background close-modale"></div>
      <div class="modal-content">
        <p class="image">
          <img src="images/playnow.png">
        </p>
      </div>
      <button class="modal-close is-large close-modale"></button>
    </div>
  `

  const biography = document.getElementById('biography');
  biography.insertAdjacentHTML('afterbegin', `
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title has-text-white content2h1">
          ${modal}
        </h1>
      </div>
    </div>
  `);
})();
