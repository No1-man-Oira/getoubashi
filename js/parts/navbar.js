(() => {
  const menu1 = 'Discography';
  const menu2 = 'Biography';

  const menuLink1 = '#discography';
  const menuLink2 = '#biography';

  const header = document.getElementById('header');
  header.insertAdjacentHTML('afterbegin', `
    <div class="container">
      <div class="navbar-brand">
        <span class="navbar-burger burger has-text-white" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <a href="${menuLink1}" class="navbar-item has-text-white">
            ${menu1}
          </a>
          <a href="${menuLink2}" class="navbar-item has-text-white">
            ${menu2}
          </a>
        </div>
      </div>
    </div>
  `);
})();
