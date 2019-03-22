import PageHeader from '../components/page-header';

const Error404 = {
  render: async () => {
    const view = (`
        ${PageHeader.render('Página no encontrada', 'docentes', null)}
        <div class="error404">
          <div class="container">
          <h2>¡Lo sentimos!</h2>
          <h2>No encontramos lo que buscas.</h2>
          <h1>Error 404</h1>
          <div class="a2">
            (<span class="a-arm">╯</span>°□°）<span class="a-arm">╯</span><span class="a-trajectory">︵</span> <span class="a-table">┻━┻</span></span>
          </div>
          </div>
        </div>
      `)
    return view;
  },
  after_render: async () => {}
}

export default Error404;