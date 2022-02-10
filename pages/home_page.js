const BasePage = require('./base_page');
const Element = require('../utils/base_element');

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://s.onliner.by/';
    this.executors = 'li.project-navigation__item a[href="/profiles"]';
    this.tasks = 'a[href="/tasks"]';
  };

  open() {
    return super.open(this.url);
  };

  viewTasks() {
    const tasks = new Element(this.tasks);
    return tasks.click();
  };

  viewExecutors() {
    const profiles = new Element(this.executors);
    return profiles.click();
  };
};

module.exports = HomePage;
