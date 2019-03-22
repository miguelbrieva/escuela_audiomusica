import capitalizeFirstLetter from '../../js/utils/capitalizeFirstLetter'

let PageHeader = {
  render: (resource, id, name) => {
    let view = `
    <div class="page_title" id="page-header" style="background-image: url('${require(`./../../images/pages/${id}-title.jpg`)}')">
      <div class="container">
        <div class="title">
          <div class="title--icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
            </svg>
          </div>
          <h2>${resource ? resource : name} ${name ? `de ${name}`: '' } </h2>
        </div>
      </div>
    </div>
    <div class="page_title-mobile">
      <img class="page_title-image-mobile" src="${require(`./../../images/pages/${id}-mobile.jpg`)}"" alt="">
      <div class="page_title-mobile-text container">
        <div class="title">
          <div class="title--icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
            </svg>
          </div>
          <h2>${resource ? capitalizeFirstLetter(resource) : ''} ${name ? `de ${name}`: '' } </h2>
        </div>
      </div>
    </div>
    `
    return view
  },
  after_render: () => { }
}

export default PageHeader;