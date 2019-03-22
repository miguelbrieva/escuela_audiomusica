import parseRequestURL from '../../js/utils/parseRequestURL';
import normalizeURL from '../../js/utils/normalizeURL';
import PageHeader from '../components/page-header';

function getTeacher(id) {
  const json = require('./../../data/teachers.json');
  const [ item ] = json.teachers.filter( item => {
    const fullName = item.firstName && item.lastName ? item.firstName + ' ' + item.lastName : item.firstName;
    const nameURL = normalizeURL(fullName)
    if (nameURL === id) {
      return item
    }
  })
  return item;
}

const TeacherShow = {
  render: async () => {
    const { id } = parseRequestURL();
    const teacher = getTeacher(id)
    const fullName = teacher.firstName && teacher.lastName ? teacher.firstName + ' ' + teacher.lastName : teacher.firstName;
    const view = (`
        ${PageHeader.render(fullName, 'docentes', null)}
        <div class="teacher_page">
          <div class="container">
            <div class="teacher_page-image">
              <img src="${require(`./../../images/teachers/${id}.jpg`)}">
            </div>
            <div class="teacher_page-text">
              <div class="teacher_page-text-bio">
                <p>${teacher.biography}</p>
              </div>
              <div class="teacher_page-text-curses">
                ${teacher.curses.length > 0
                  ? (
                    `<h3>${teacher.curses.length > 1 ? 'Cursos' : 'Curso'}:</h3>
                        <ul>
                          ${teacher.curses.map( item => {
                            return `<li class="teacher_page-curse_link">
                                      <div class="btn btn-secondary">
                                        <a class="" href="/#/curso/${normalizeURL(item)}">${item}</a>
                                      </div>
                                    </li>`
                          }).join('')}
                        </ul>
                      `)
                  : ''}
                ${teacher.workshops.length > 0 
                  ? (
                    `<h3>${teacher.workshops.length > 1 ? 'Talleres' : 'Taller'}:</h3>
                        <ul>
                          ${teacher.workshops.map( item => {
                            return `<li class="teacher_page-curse_link">
                                      <div class="btn btn-secondary">
                                        <a class="" href="/#/taller/${normalizeURL(item)}">${item}</a>
                                      </div>
                                    </li>`
                          }).join('')}
                        </ul>
                      `)
                  : ''}
                </ul>
              </div>
            </div>
          </div>
        </div>
      `)
    return view;
  },
  after_render: async () => {}
}

export default TeacherShow;