import parseRequestURL from '../../js/utils/parseRequestURL';
import capitalizeFirstLetter from '../../js/utils/capitalizeFirstLetter';
import normalizeURL from '../../js/utils/normalizeURL';

import PageHeader from '../components/page-header';
const json = require('./../../data/teachers.json');

const Teachers = {
  render: async () => {
    const { resource } = parseRequestURL();
    const view = `
      ${PageHeader.render(capitalizeFirstLetter(resource), resource)}
      <div class="teacheres_page">
        <div class="container">
          <div class="section_description margin-top-large">
            <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div class="teachers_page-grid">
            ${json.teachers.map( item => {
              const fullName = item.firstName && item.lastName ? item.firstName + ' ' + item.lastName : item.firstName; 
              const nameURL = normalizeURL(fullName);
              return (
                `
                <a class="teachers_page-box box-item" href="/#/docente/${nameURL}">
                  <div class="teachers_page-box-image">
                    <img src="${require(`./../../images/teachers/${nameURL}.jpg`)}" alt="">
                  </div>
                  <div class="teachers_page-box-text box-item-description">
                    <h3>${fullName}</h3>
                    <p>
                    ${item.curses.map( item => item).concat(item.workshops.map( item => item)).join('/')}
                    </p>
                  </div>
                </a>
                `
              )
            }).join('')}
          </div>

        </div>
      </div>
    `
    return view;
  },
  after_render: async () => {}
}

export default Teachers