function createContact() {

  const mainUI = document.createElement('main');
  mainUI.id = 'main';

    const contactUI = document.createElement('section');
    contactUI.setAttribute('id', 'contact');
    contactUI.classList.add('narrow');

      const leadHeadingUI = document.createElement('h1');
      leadHeadingUI.classList.add('lead-heading');
      leadHeadingUI.textContent = 'Contact us';

      const formUI = document.createElement('form');
      formUI.setAttribute('id', 'form');

        const formGroupEmail = document.createElement('div');
        formGroupEmail.classList.add('form-group');

          const labelEmail = document.createElement('label');
          labelEmail.setAttribute('for', 'email');
          labelEmail.textContent = 'Email';

          const inputEmail = document.createElement('input');
          inputEmail.setAttribute('type', 'email');
          inputEmail.setAttribute('name', 'email');
          inputEmail.setAttribute('id', 'email');

        formGroupEmail.appendChild(labelEmail);
        formGroupEmail.appendChild(inputEmail);

        const formGroupText = document.createElement('div');
        formGroupText.classList.add('form-group');

          const labelText = document.createElement('label');
          labelText.setAttribute('for', 'textarea');
          labelText.textContent = 'Message:';

          const textarea = document.createElement('textarea');
          textarea.setAttribute('name', 'textarea');
          textarea.setAttribute('id', 'textarea');
          textarea.setAttribute('rows', '7');

        formGroupText.appendChild(labelText);
        formGroupText.appendChild(textarea);

        const sendButton = document.createElement('button');
        sendButton.id = 'send-button';
        sendButton.textContent = 'Send';

      formUI.appendChild(formGroupEmail);
      formUI.appendChild(formGroupText);
      formUI.appendChild(sendButton);

    contactUI.appendChild(leadHeadingUI);
    contactUI.appendChild(formUI);

  mainUI.appendChild(contactUI);

  return mainUI;

}

export default createContact;