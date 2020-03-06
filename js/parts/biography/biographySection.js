(() => {
  const text1 = 'なんか';
  const text2 = '😇';

  const biography = document.getElementById('biography');
  biography.insertAdjacentHTML('afterbegin', `
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title has-text-white content2h1">
          ${text1}
        </h1>
        <h2 class="subtitle has-text-white content2h2">
          ${text2}
        </h2>
      </div>
    </div>
  `);
})();
