const menu1 = 'Home';
const menu2 = 'Discography';
const menu3 = 'Biography';

document.write(`
  <div class="hero-head">
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
            <a class="navbar-item has-text-white">
              ${menu1}
            </a>
            <a class="navbar-item has-text-white">
              ${menu2}
            </a>
            <a class="navbar-item has-text-white">
              ${menu3}
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
`);
