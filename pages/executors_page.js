const BasePage = require('./base_page');
const Element = require('../utils/base_element');
const Collection = require('../utils/base_collection');

class ExecutorsPage extends BasePage {
  constructor() {
    super();
    this.filters = '.service-header__link_filter';
    this.checkboxes = 'ul.service-form__checkbox-list span.service-form__checkbox-sign';
    this.filterToggle = '.service-filter__toggle';
    this.executorList = 'service-offers__list';
    this.executor = 'div.service-offers__unit:nth-child(1) a.service-offers__link span.service-offers__subtitle';
  };

  open() {
    return super.open(this.url);
  };

  async filterBy(parameter) {
    const filterBtn = new Element(this.filters);
    await filterBtn.click();
    const checkboxes = new Collection(this.checkboxes);
    await checkboxes.clickElementByText(parameter);
    const filterToggle = new Element(this.filterToggle);
    return filterToggle.click();
  }

  selectExecutor() {
    const executor = new Element(this.executor);
    return executor.click();
  }
};

module.exports = ExecutorsPage;
