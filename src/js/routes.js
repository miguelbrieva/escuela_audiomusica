/** Pages */
// import Home from '../views/pages/Home.js';
// import About from '../views/pages/About.js';
// import CurseShow from '../views/pages/CurseShow.js';
// import Teachers from '../views/pages/Teachers.js';
// import TeacherShow from '../views/pages/TeacherShow.js';
// import Contact from '../views/pages/Contact.js';
// import Error404 from '../views/pages/Error404.js';

/** Utils */
import parseRequestURL from './utils/parseRequestURL'

 const routes = {
   '/': 'Home',
   '/nosotros': 'About',
   '/curso/:id': 'CurseShow',
   '/taller/:id': 'CurseShow',
   '/docentes': 'Teachers',
   '/docente/:id': 'TeacherShow',
   '/contacto': 'Contact',
  }

const content = document.getElementById('main-content');

const router = async () => {
  const request = parseRequestURL()
  const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '')
  const page = routes[parsedURL] ? routes[parsedURL] : Error404
  const algo = await import(`../views/pages/${page}.js`)

  content.innerHTML = await algo.default.render();
  const afterRender = await algo.default.after_render();

  window.scrollTo(0, 0);
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
