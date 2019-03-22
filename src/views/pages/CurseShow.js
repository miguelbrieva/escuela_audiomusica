import parseRequestURL from './../../js/utils/parseRequestURL';
import normalizeURL from '../../js/utils/normalizeURL';
import PageHeader from './../components/page-header';

function getCurse(resource, id) {
  let json, key;
  if(resource === 'curso') {
    json = require('./../../data/curses.json');
    key = 'curses'
  }
  if(resource === 'taller') {
    json = require('./../../data/workshops.json');
    key = 'workshops'
  }

  const [ item ] = json[key].filter( item => {
    const itemURL = normalizeURL(item.name);
    if(itemURL === id) { 
      return item;
    }
  })
  return item;
}

function getPromotions(promotions) {
  if(promotions.length) {
    return (
      `<div class="curses_page-promotions">
        <div class="container curses_page-promotions-container">
          <h3>Promociones</h3> 
          <ul>
            ${promotions.map( item => {
              return `<li>${item}</li>`;
            }).join('')}
          </ul>
        </div>
      </div>`
    )
  } else {
    return '';
  }
}

function getProgramme(programme) {
  if(programme.length) {
    return (`
      <div class="curses_page-programme">
        <div class="title">
          <div class="title--icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
            </svg>
            </div>
            <h2>Programa o contenido</h2>
        </div>
        <ul class="pointed-list">
          ${programme.map( item => {
            return `<li>${item}</li>`;
          }).join('')}
        </ul>
      </div>
    `)
  } else {
    return '';
  }
}

function getTimes(times) {
  if(times && times !== {}) {
    return (`
      <div class="curses_page-times">
        <div class="title">
          <div class="title--icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
            </svg>
          </div>
          <h2>Fechas y horarios</h2>
        </div>
        <ul class="pointed-list">
          ${times['entry'] 
            ? `<li>
                <h3>Comienzo:</h3>
                <p>${times['entry']}</p>
              </li>`
            : ''}
          ${times['admission-dead-line'] 
            ? `<li>
                <h3>Cierre de inscripciones:</h3>
                <p>${times['admission-dead-line']}</p>
              </li>`
            : ''}
          ${times['class-duration'] 
            ? `<li>
                <h3>Duración de la clase:</h3>
                <p>${times['class-duration']}</p>
              </li>`
            : ''}
        </ul>
      </div>
    `)
  } else {
    return '';
  }
}

function getPrices(prices) {
  if(prices && prices.length > 0) {
    return (`
      <div class="curses_page-prices">
        <div class="title">
          <div class="title--icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
            </svg>
          </div>
          <h2>Valores</h2>
        </div>
      </div>
    `)
  } else {
    return '';
  }
}

function getTeachers(teachers) {
  if(teachers && teachers.length > 0) {
    return (`
      <div class="curses_page-teachers">
        <div class="title">
          <div class="title--icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
            </svg>
          </div>
          <h2>${teachers.length > 1 ? 'Docentes' : 'Docente'}</h2>
        </div>
        <div class="curses_page-teachers-content">
          ${teachers.map(item => {
            let itemURL = normalizeURL(item);
            return (`
            <a class="curses_page-teachers-content-item box-item" href="/#/docente/${itemURL}">
              <img src="${require(`./../../images/teachers/${itemURL}.jpg`)}" />
              <div class="box-item-description">
                <p>${item}</p>
              </div>
            </a>
            `)
          }).join('')}
        </div>
      </div>
    `)
  } else {
    return '';
  }
}

function getBranch(branch) {
  if(branch && branch.length > 0) {
    return (`
      <div class="curses_page-brach">
        <div class="title">
          <div class="title--icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
            </svg>
          </div>
          <h2>${branch.length > 1 ? 'Sedes' : 'Sede'}</h2>
        </div>
        <div class="curses_page-brach-content">
        <ul class="pointed-list">
          ${branch.map(item => {
            return `<li>${item}</li>`;
              }).join('')}
          </ul>
        </div>
      </div>
    `)
  } else {
    return '';
  }
}

let CurseShow = {
  render: async () => {
    let { resource, id } = parseRequestURL();
    let curse = getCurse(resource, id);
    let view = `
      ${PageHeader.render(resource, id, curse.name)}
      <div class="curses_page">
        <div class="container">
          <div class="curses_page-description">
            <div class="curses_page-description-image">
              <img src="${require(`./../../images/pages/${id}-description.jpg`)}" alt="${curse.name}">
            </div>
            <div class="curses_page-description-text">
              <p>${curse.description}</P>
              <div class="btn btn-std btn-centered curses_page-description-btn">
                <a href="/#/contacto" alt="Contacto" >Escríbenos</a>
              </div>
            </div>
          </div>
        </div>
          ${ getPromotions(curse.promotions) }
        <div class="container">
          ${ getProgramme(curse.programme)}
          ${ getTimes(curse.times) }
          ${ getPrices(curse.prices) }
          ${ getTeachers(curse.teachers) }
          ${ getBranch(curse.branch) }
        </div>
      </div>
    `
    return view
  },
  after_render: async () => {}
}

export default CurseShow;
