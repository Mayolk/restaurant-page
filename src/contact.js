function createContact() {

  const mainUI = document.createElement('main');
  mainUI.setAttribute('id', 'main');
  mainUI.innerHTML = `
  <section id="contact" class="narrow">
    <h1 class="lead-heading">Contact us</h1>
    <form id="form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
      </div>
      <div class="form-group">
        <label for="textarea">Message:</label>
        <textarea name="texarea" id="textarea" rows="7"></textarea>
      </div>
      <button id="send-button">Send</button>
    </form>
  </section>
  `;

  return mainUI;
}

export default createContact;