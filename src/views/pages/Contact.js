import parseRequestURL from './../../js/utils/parseRequestURL';
import capitalizeFirstLetter from './../../js/utils/capitalizeFirstLetter';
import normalizeURL from './../../js/utils/normalizeURL';
import PageHeader from './../components/page-header';
import Form from './../../js/form'
import {MDCTextField} from '@material/textfield';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCCheckbox} from '@material/checkbox';

const {curses} = require('./../../data/curses.json')
const {workshops} = require('./../../data/workshops.json')

const Contact = {
  render: async () => {

    let { resource } = parseRequestURL();
    const view = (
      `${PageHeader.render(capitalizeFirstLetter(resource), resource)}
      <div class="contact_page">
        <div class="container">
          <div class="contact_page-branches">
            <div class="contact_page-branches-col1">
              <h3>Sede Ñuñoa</h3>
              <div class="contact_page-branches-label">
                <h4>Dirección:</h4>
                <p>Av. Chile España 343, Ñuñoa, Santiago.</p>
              </div>
              <div class="contact_page-branches-label">
                <h4>Mail:</h4>
                <p>booking@audiomusica.com</p>
              </div>
              <div class="contact_page-branches-label">
                <h4>Teléfono:</h4>
                <p>+56 9984 9856</p>
              </div>
              <div class="contact_page-branches-label">
                <h4>Horario:</h4>
                <p>Lunes a viernes de 10 a 20 hrs.</p>
                <p>Sábado, 9 a 19 hrs.</p>
              </div>
              <iframe class="contact_page-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.9204548208227!2d-70.60019588480063!3d-33.45137888077369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfbba46968df%3A0x8d2fa858d94d7a9f!2sAudiomusica+Megatienda!5e0!3m2!1sen!2scl!4v1551196753236" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
            <div class="contact_page-branches-col2">
              <h3>Sede La Florida</h3>
              <div class="contact_page-branches-label">
                <h4>Dirección:</h4>
                <p>Av. Chile España 343, Ñuñoa, Santiago.</p>
              </div>
              <div class="contact_page-branches-label">
                <h4>Mail:</h4>
                <p>booking@audiomusica.com</p>
              </div>
              <div class="contact_page-branches-label">
                <h4>Teléfono:</h4>
                <p>+56 9984 9856</p>
              </div>
              <div class="contact_page-branches-label">
                <h4>Horario:</h4>
                <p>Lunes a viernes de 10 a 20 hrs.</p>
                <p>Sábado, 9 a 19 hrs.</p>
              </div>
              <iframe class="contact_page-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.9204548208227!2d-70.60019588480063!3d-33.45137888077369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cfbba46968df%3A0x8d2fa858d94d7a9f!2sAudiomusica+Megatienda!5e0!3m2!1sen!2scl!4v1551196753236" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
          </div>
          <div class="contact_page-form">
            <div class="title">
              <div class="title--icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
                </svg>
              </div>
              <h2>Formulario</h2>
            </div>
            <div class="section_description">
              <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="form-container">

              <form class="contact-form" action="#" method="post" enctype="text/plain">
                <div class="form-item">
                  <div class="mdc-text-field mdc-text-field--outlined userNameOutlined">
                    <input type="text" id="name" class="mdc-text-field__input" name="name" required>
                    <div class="mdc-notched-outline">
                      <div class="mdc-notched-outline__leading"></div>
                      <div class="mdc-notched-outline__notch">
                        <label for="name" class="mdc-floating-label">Nombre Completo</label>
                      </div>
                      <div class="mdc-notched-outline__trailing"></div>
                    </div>
                  </div>
                  <div class="mdc-text-field-helper-line">
                    <div id="username-helper-text" class="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" aria-hidden="true">
                      Debes ingresar un nombre válido
                    </div>
                  </div>
                </div>

                <div class="form-item">
                  <div class="mdc-text-field mdc-text-field--outlined emailOutlined">
                    <input type="email" id="email" class="mdc-text-field__input" name="email">
                    <div class="mdc-notched-outline">
                      <div class="mdc-notched-outline__leading"></div>
                      <div class="mdc-notched-outline__notch">
                        <label for="email" class="mdc-floating-label">Email</label>
                      </div>
                      <div class="mdc-notched-outline__trailing"></div>
                    </div>
                  </div>
                  <div class="mdc-text-field-helper-line">
                    <div id="username-helper-text" class="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" aria-hidden="true">
                      Debes ingresar un email válido
                    </div>
                  </div>
                </div>

                <div class="form-item">
                  <div class="mdc-text-field mdc-text-field--outlined telOutlined">
                    <input type="tel" id="tel" class="mdc-text-field__input" name="tel" minlength="9">
                    <div class="mdc-notched-outline">
                      <div class="mdc-notched-outline__leading"></div>
                      <div class="mdc-notched-outline__notch">
                        <label for="tel" class="mdc-floating-label">Teléfono</label>
                      </div>
                      <div class="mdc-notched-outline__trailing"></div>
                    </div>
                  </div>
                  <div class="mdc-text-field-helper-line">
                    <div id="username-helper-text" class="mdc-text-field-helper-text mdc-text-field-helper-text--validation-msg" aria-hidden="true">
                      Debe contener al menos 9 dígitos
                    </div>
                  </div>
                </div>

                <section class="checkbox-fieldset">
                  <h4 class="form-item-checkbox-label">¿Sobre qué quieres consultar?</h4>
                  <div class="form-item-checkboxes-container">
                    <fieldset class="form-item form-item-checkbox--curses">
                      <legend>Cursos:</legend>
                      ${curses.map( (item) => {
                        let name = item.name
                        let nameURL = normalizeURL(name);
                        return (`
                          <div class="mdc-form-field mdc-form-field--checkbox">
                            <div class="mdc-checkbox" data-checkbox_id="${nameURL}">
                              <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-curse--${nameURL}" name="${nameURL}"/>
                              <div class="mdc-checkbox__background">
                                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                  <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                </svg>
                                <div class="mdc-checkbox__mixedmark"></div>
                              </div>
                            </div>
                            <label for="checkbox-curse--${nameURL}">${name}</label>
                          </div>
                        `)
                      }).join('')}
                    </fieldset>  
                    <fieldset class="form-item form-item-checkbox--workshops">
                      <legend>Talleres:</legend>
                      ${workshops.map( (item) => {
                        let name = item.name;
                        let nameURL = normalizeURL(name);
                        return (`
                          <div class="mdc-form-field mdc-form-field--checkbox">
                            <div class="mdc-checkbox" data-checkbox_id="${nameURL}">
                              <input type="checkbox" class="mdc-checkbox__native-control" id="checkbox-workshop--${nameURL}" name="${nameURL}"/>
                              <div class="mdc-checkbox__background">
                                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                  <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                </svg>
                                <div class="mdc-checkbox__mixedmark"></div>
                              </div>
                            </div>
                            <label for="checkbox-workshop--${nameURL}">${name}</label>
                          </div>
                        `)
                      }).join('')}
                    </fieldset>  
                  </div>
                </section>

                <div class="form-item">
                  <div class="mdc-text-field mdc-text-field--textarea textareaOutlined">
                    <textarea id="textarea" class="mdc-text-field__input" rows="6" cols="40" name="message" ></textarea>
                    <div class="mdc-notched-outline">
                      <div class="mdc-notched-outline__leading"></div>
                      <div class="mdc-notched-outline__notch">
                        <label for="textarea" class="mdc-floating-label">Mensaje</label>
                      </div>
                      <div class="mdc-notched-outline__trailing"></div>
                    </div>
                  </div>
                </div>

                <button class="form-submit" type="submit">Enviar</button>

                <div class="form-message"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    `);
    return view;
  },
  after_render: async () => {
    // MATERIAL DESING COMPONENTS INSTANCES
    const userNameOutlined = new MDCTextField(document.querySelector('.userNameOutlined'))
    const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));
    const emailOutlined = new MDCTextField(document.querySelector('.emailOutlined'))
    const telOutlined = new MDCTextField(document.querySelector('.telOutlined'))
    const textareaOutlined = new MDCTextField(document.querySelector('.textareaOutlined'))
    const checkboxesInstances = new Array();
    const checkboxes = document.querySelectorAll('.mdc-checkbox')
    checkboxes.forEach(item => {
      const obj = {
        [item.dataset.checkbox_id]: new MDCCheckbox(item)
      }
      checkboxesInstances.push(obj)
    })

    // SETTING THE HTML5 ERRORS MESSAGES TO SPANISH
    const requiredInputs = document.querySelectorAll('[required]');
    requiredInputs.forEach( item => {
      item.oninvalid = e => {
        e.target.setCustomValidity("");
        if(!e.target.validity.valid) {
          e.target.setCustomValidity('Este campo no puede quedar sin completar')
        }
      };
      item.oninput = e => e.target.setCustomValidity('');
    });

    // SENDIG FORM DATA
    const formSubmit = document.querySelector('.contact-form');
    formSubmit.addEventListener('submit', (e) => Form(e));
  }
}

export default Contact;