function Form(e) {
  e.preventDefault();

  const form = e.target;
  const data = new URLSearchParams();

  for(const pair of new FormData(form)) {
    data.append(pair[0], pair[1])
  }
  
  fetch('#', {
    method: 'post',
    body: data,
  })
  .then(res => {
    // if(res) {
    //   message();
    //   cleanForm(form);
    // }
    if(res.status === 200) {
      message();
      cleanForm(form);
    }
    if(res.status >= 400) {
      messageError()
    }
  })
  .catch( err => {
    console.log('Error:' + err )
  })
}

function message() {
  document.querySelector('.form-message').innerHTML = (
    `<div class="form-message-content">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
      </span>
      <p>Tu mensaje ha sido enviado. Pronto recibirás una respuesta.</p>
    </div>`
  )
}

function messageError() {
  document.querySelector('.form-message').innerHTML = (
    `<div class="form-message-error-content">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
      </span>
      <p>Ha ocurrido un error. Vuelve a intentarlo</p>
    </div>`
  )
}

function cleanForm(form) {
  const elements = form.elements

  for(let el of elements) {
    if(el.tagName === 'INPUT') {
      console.log(el.value)
      el.value = ''
    }
    if(el.tagName === 'INPUT' && el.type === 'checkbox') {
      el.checked = false
    }
    if(el.tagName === 'TEXTAREA') {
      el.value = ''
    }
  }
}

export default Form