(() => {
  const text1 = 'なんか';
  const text2 = '😇';
  const biography = document.getElementById('biography');
  biography.insertAdjacentHTML(
    'afterbegin',
    `<div class="hero-body">
        <div class="container has-text-centered">
            <a id="test" class="button is-primary is-large modal-button">Launch image modal</a>
        </div>
      </div> `
  );
})();
