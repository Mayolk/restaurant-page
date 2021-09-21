function createMenu() {

  const mainUI = document.createElement('main');
  mainUI.setAttribute('id', 'main');
  mainUI.innerHTML = `
  <section id="menu" class="narrow">
    <h1 class="lead-heading">Our menu</h1>

    <div class="menu-item">
      <div class="menu-item-image" id="hamburger-img"></div>
      <div>
        <h2 class="menu-item-name">Hamburger</h2>
        <ul class="list">
          <li>Minced beef</li>
          <li>Tomatoes</li>
          <li>Salad</li>
          <li>Cheese</li>
          <li>Pickles</li>
        </ul>
      </div>
    </div>
    
    <div class="menu-item">
      <div class="menu-item-image" id="mini-pizza-img"></div>
      <div>
        <h2 class="menu-item-name">Mini Pizza</h2>
        <ul class="list">
          <li>Minced beef</li>
          <li>Tomatoes</li>
          <li>Salad</li>
          <li>Cheese</li>
          <li>Pickles</li>
        </ul>
      </div>
    </div>

    <div class="menu-item">
      <div class="menu-item-image" id="calzone-img"></div>
      <div>
        <h2 class="menu-item-name">Calzone</h2>
        <ul class="list">
          <li>Minced beef</li>
          <li>Tomatoes</li>
          <li>Salad</li>
          <li>Cheese</li>
          <li>Pickles</li>
        </ul>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-item-image" id="toast-sandwich-img"></div>
      <div>
        <h2 class="menu-item-name">Toast Sandwich</h2>
        <ul class="list">
          <li>Minced beef</li>
          <li>Tomatoes</li>
          <li>Salad</li>
          <li>Cheese</li>
          <li>Pickles</li>
        </ul>
      </div>
    </div>
    <div class="menu-item">
      <div class="menu-item-image" id="burrito-img"></div>
      <div>
        <h2 class="menu-item-name">Burrito</h2>
        <ul class="list">
          <li>Minced beef</li>
          <li>Tomatoes</li>
          <li>Salad</li>
          <li>Cheese</li>
          <li>Pickles</li>
        </ul>
      </div>
    </div>

  </section>
  `;

  return mainUI;
}

export default createMenu;