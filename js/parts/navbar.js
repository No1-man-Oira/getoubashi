const menu1 = 'Discography';
const menu2 = 'Biography';

const discography = '#discography';
const biography = '#biography';

document.write(`
  <nav class="navbar">
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
          <a href="${discography}" class="navbar-item has-text-white">
            ${menu1}
          </a>
          <a href="${biography}" class="navbar-item has-text-white">
            ${menu2}
          </a>
        </div>
      </div>
    </div>
  </nav>
`);
