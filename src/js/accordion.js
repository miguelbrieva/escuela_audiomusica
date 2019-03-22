class Accordion {
  constructor(accordion, settings) {
    this.accordion = accordion;
    this.settings = settings;
    this.state = [];
    this.init(this.accordion, this.settings);
  }
  
  openElement(element) {
    element.previousElementSibling.querySelector('.arrow').classList.add('arrow-down')
    element.style.maxHeight = `100%`;
  }

  closeElement(element) {
    element.previousElementSibling.querySelector('.arrow').classList.remove('arrow-down')
    element.style.maxHeight = `0`;
  }

  addToState(accordion, settings) {
    const sectionElements = accordion.querySelectorAll(`.${settings.accordionSectionClass}`);
    let key = 0;

    sectionElements.forEach(element => {
      element.setAttribute('data-key', key);
      this.state.push({
        key: key,
        isOpen: false,
      });
      key++;
    });
  }

  setStyles(accordion, settings) {
    const contentElements = accordion.querySelectorAll(`.${settings.elementContentClass}`);

    contentElements.forEach(el => {
      el.style.overflow = 'hidden';
      el.style.maxHeight = 0;
    });

    if (settings.firstIsOpen) {
      contentElements[0].style.maxHeight = '100%';
      this.state[0].isOpen = true;
    }
  }

  addEvents(accordion, elementTriggerClass) {
    const triggers = accordion.querySelectorAll(`.${elementTriggerClass}`);

    triggers.forEach(el => {
      el.addEventListener('click', (e) => this.toggleContent(e));
    });

    // Cerrar SideMenu al dar click al link
    const accordionContainer = document.getElementById('AccordionMobileSideMenu');
    const containers = accordionContainer.querySelectorAll('.AccordionMobileSideMenu-content');
    containers.forEach(item => {
      item.querySelectorAll('.offCanvas--anchor').forEach( item => {
        item.addEventListener('click', (e) => this.toggleContent(e) )
      })
    })
    
  }

  toggleContent(e) {
    const section = e.target.closest(`.${this.settings.accordionSectionClass}`);
    const content = section.querySelector(`.${this.settings.elementContentClass}`);
    const key = parseInt(section.dataset.key);

    if (this.settings.multiple) {
      if (!this.state[key].isOpen) {
        this.openElement(content);
        this.state[key].isOpen = true;
      } else {
        this.closeElement(content);
        this.state[key].isOpen = false;
      }
    } else {
      if (this.state[key].isOpen) {
        this.closeElement(content);
        this.state[key].isOpen = false;
      } else {
        this.openElement(content);
        this.state[key].isOpen = true;

        const sections = this.accordion.querySelectorAll(`.${this.settings.accordionSectionClass}`);
        sections.forEach(el => {
          let localKey = parseInt(el.dataset.key);
          if (localKey !== key && this.state[localKey].isOpen) {
            this.closeElement(el.querySelector(`.${this.settings.elementContentClass}`));
            this.state[localKey].isOpen = false;
          }
        });
      }
    }
  }

  init(accordion, settings) {
    if (accordion) {
      this.addToState(accordion, settings);
      this.setStyles(accordion, settings); /** After addToState() */
      this.addEvents(accordion, settings.elementTriggerClass);
    } else {
      throw new Error('You should define an element accordion in the document.');
    }
  }
}

const SETTINGS = {
  multiple: false,
  firstIsOpen: false,
  accordionSectionClass: 'AccordionMobileSideMenu-section',
  elementTriggerClass: 'AccordionMobileSideMenu-trigger',
  elementContentClass: 'AccordionMobileSideMenu-content',
};

const AccordionMobileSideMenu = new Accordion(
  document.getElementById('AccordionMobileSideMenu'),
  SETTINGS
)
;