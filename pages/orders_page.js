const BasePage = require('./base_page');
const Collection = require('../utils/base_collection');
const Element = require('../utils/base_element');

class OrdersPage extends BasePage {
  constructor() {
    super();
    this.sortBtn = 'div.service-header__part_2 a.service-header__link';
    this.sortDropdown = 'ul.dropdown-style__list li.dropdown-style__item_tip';
    this.activeItem = '.service-header__link_arrow_bottom';
    this.order = 'div.service-offers__unit:nth-child(1) .service-offers__item  a[href^="/tasks"]';
  };

  async sort(option) {
    const sortBtn = new Element(this.sortBtn);
    await sortBtn.click();
    const sortDropdown = new Collection(this.sortDropdown);
    return sortDropdown.clickElementByText(option);
  }

  viewTask() {
    const order = new Element(this.order);
    return order.click();
  }

  activeSortItemIs() {
    const activeItem = new Element(this.activeItem);
    return activeItem.getText();
  }
};

module.exports = OrdersPage;
