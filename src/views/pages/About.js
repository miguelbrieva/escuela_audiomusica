import parseRequestURL from '../../js/utils/parseRequestURL';
import capitalizeFirstLetter from '../../js/utils/capitalizeFirstLetter';
import PageHeader from '../components/page-header';

const About = {
  render: async () => {
    let { resource } = parseRequestURL();
    const view = `
    ${PageHeader.render(capitalizeFirstLetter(resource), resource)}
      <div class="teacheres_page">
        <div class="container">
          <div class="section_description margin-top-large">
            <p>Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    `
    return view;
  },
  after_render: async () => {}
}

export default About