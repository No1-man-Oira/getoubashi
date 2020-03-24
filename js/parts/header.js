(() => {
  const menu = `
  <ul id="menu">
    <li>
      <a class="menu-item" href="#top">
        <span>TOP</span>
      </a>
    </li>
    <li>
      <a class="menu-item" href="#music">
        <span>MUSIC</span>
      </a>
    </li>
    <li>
      <a class="menu-item" href="#biography">
        <span>BIOGRAPHY</span>
      </a>
    </li>
    <li>
      <a class="menu-item" href="">
        <span>LIVE</span>
      </a>
    </li>
  </ul>
  `;

  const header = document.getElementById('header');
  header.insertAdjacentHTML('afterbegin', `
    <nav id="menu_content">
      <div class="menu_bg"></div>
      <div class="menu_wrapper">
        <div class="inner">
          ${menu}
        </div>
      </div>
    </nav>
    <div id="menu_btn">
    <div class="wrap">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  `);
})();
