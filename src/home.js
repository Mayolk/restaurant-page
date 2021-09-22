function createHome() {

  const mainUI = document.createElement('main');
  mainUI.setAttribute('id', 'main');
  mainUI.innerHTML = `
  <section id="hero">
    <h1 id="title">Foods Per Second</h1>
    <h2 id="greeting">Welcome to the best fast-food in the city</h2>
  </section>
  <section id="features" class="narrow">
    <div class="icon">
      <svg fill="currentColor" viewBox="0 0 16 16" id="sun-icon" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 11a3 3 0 110-6 3 3 0 010 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z"></path>
      </svg>
    </div>
    <div class="feature">
      <h2>Super tasty</h2>
      <p>Our recipes are top secret, but one thing is well-known: our food tastes great.</p>
    </div>
    <div class="icon">
      <svg fill="currentColor" viewBox="0 0 16 16" id="bug-icon" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.355.522a.5.5 0 01.623.333l.291.956A4.979 4.979 0 018 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 11.957.29l-.41 1.352A4.985 4.985 0 0113 6h.5a.5.5 0 00.5-.5V5a.5.5 0 011 0v.5A1.5 1.5 0 0113.5 7H13v1h1.5a.5.5 0 010 1H13v1h.5a1.5 1.5 0 011.5 1.5v.5a.5.5 0 11-1 0v-.5a.5.5 0 00-.5-.5H13a5 5 0 01-10 0h-.5a.5.5 0 00-.5.5v.5a.5.5 0 11-1 0v-.5A1.5 1.5 0 012.5 10H3V9H1.5a.5.5 0 010-1H3V7h-.5A1.5 1.5 0 011 5.5V5a.5.5 0 011 0v.5a.5.5 0 00.5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 01.333-.623zM4 7v4a4 4 0 003.5 3.97V7H4zm4.5 0v7.97A4 4 0 0012 11V7H8.5zM12 6a3.989 3.989 0 00-1.334-2.982A3.983 3.983 0 008 2a3.983 3.983 0 00-2.667 1.018A3.989 3.989 0 004 6h8z"></path>
      </svg>
    </div>
    <div class="feature">
      <h2>Organic and Fresh</h2>
      <p>Ingreadients used in our food are always fresh, and most of our ingreadients are organic.</p>
    </div>
    <div class="icon">
      <svg fill="currentColor" viewBox="0 0 16 16" id="truck-icon" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3.5A1.5 1.5 0 011.5 2h9A1.5 1.5 0 0112 3.5V5h1.02a1.5 1.5 0 011.17.563l1.481 1.85a1.5 1.5 0 01.329.938V10.5a1.5 1.5 0 01-1.5 1.5H14a2 2 0 11-4 0H5a2 2 0 11-3.998-.085A1.5 1.5 0 010 10.5v-7zm1.294 7.456A1.999 1.999 0 014.732 11h5.536a2.01 2.01 0 01.732-.732V3.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v7a.5.5 0 00.294.456zM12 10a2 2 0 011.732 1h.768a.5.5 0 00.5-.5V8.35a.5.5 0 00-.11-.312l-1.48-1.85A.5.5 0 0013.02 6H12v4zm-9 1a1 1 0 100 2 1 1 0 000-2zm9 0a1 1 0 100 2 1 1 0 000-2z"></path>
      </svg>
    </div>
    <div class="feature">
      <h2>Punctual delivery</h2>
      <p>We deliver our food very fast, with no reagard to human life.</p>
    </div>
  </section>
  `;

  return mainUI;
}

export default createHome;