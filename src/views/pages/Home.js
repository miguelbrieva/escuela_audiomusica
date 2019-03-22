import normalizeURL from '../../js/utils/normalizeURL.js';

const jsonCurses = require('../../data/curses.json');
const curses = jsonCurses.curses;

const jsonWorkshops = require('../../data/workshops.json');
const workshops = jsonWorkshops.workshops;

const Home = {
  render: async () => {
    const view = (
      `<div class="hero-section">
        <div class="container">
          <div class="hero-section--content">
            <h1>Escuela Audiomusica</h1>
            <p class="hero-section--content-p-mobile">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p class="hero-section--content-p-desktop">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div class="btn btn-negative btn-hero">
              <a class="mobile-menu--anchor" href="/#/contacto">Contactar</a>
            </div>
          </div>
        </div>
      </div>
      <div class="home_curses_section">
        <div class="container">
          <div class="title">
            <div class="title--icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
              </svg>
            </div>
            <h2>Cursos</h2>
          </div>
          <div class="section_description">
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="home_curses-container">
            ${
              curses.map( item => {
                let curseURL = normalizeURL(item.name);
                return (
                  `<a class="box-item" href="/#/curso/${curseURL}">
                    <div class="box-item-image">
                      <img src="${require(`../../images/curses/${curseURL}.jpg`)}" alt="${item.name}">
                    </div>
                    <div class="box-item-name">
                      <h3>${item.name}</h3>
                    </div>
                    <div class="box-item-description">
                      <p>${item['short-description']}</p>
                    </div>
                  </a>`
                )
              }).join('')
            }
          </div>
        </div>
      </div>
      <div class="home_workshops_section" >
        <div class="container">
          <div class="title">
            <div class="title--icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
              </svg>
            </div>
            <h2>Talleres</h2>
          </div>
          <div class="section_description">
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div id="home_workshops-container">
            ${
              workshops.map(item => {
                let workshopURL = normalizeURL(item.name);
                return (
                  `<a class="box-item home_workshops-item" href="/#/taller/${workshopURL}">
                    <div class="box-item-image home_workshops-image">
                      <img src="${require('../../images/workshops/' + workshopURL + '.jpg')}" alt="${item.name}">
                    </div>
                    <div class="home_workshops-text">
                      <div class="box-item-name">
                        <h3>${item.name}</h3>
                      </div>
                      <div class="box-item-description">
                        <p>${item['short-description']}</p>
                      </div>
                    </div>
                  </a>`
                )
              }).join('')
            }
          </div>
        </div>
      </div>
      <div class="home_teachers_section">
        <div class="container">
          <div class="title">
            <div class="title--icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
              </svg>
            </div>
            <h2>Docentes</h2>
            
          </div>
          <div class="section_description">
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="btn btn-std btn-centered">
            <a href="/#/docentes" alt="Contacto">Conoce a nuestro staff</a>
          </div>
        </div>
      </div>
    `);
    return view;
  },
  after_render: async () => {}
}

export default Home;