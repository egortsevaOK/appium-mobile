const HomePage = require('./home_page');
const OrdersPage = require('./orders_page');
const ExecutorsPage = require('./executors_page');
const ProfilePage = require('./profile_page');

class PageFactory {
  static getPage(pageName) {
    switch (pageName) {
      case 'Home':
        return new HomePage();
      case 'Orders':
        return new OrdersPage();
      case 'Executors':
        return new ExecutorsPage();
      case 'Profile':
        return new ProfilePage();
      default:
        return new BasePage();
    };
  };
};

module.exports = PageFactory;
