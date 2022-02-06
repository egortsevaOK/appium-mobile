const BasePage = require('./base_page');
const Element = require('../utils/base_element');

class ProfilePage extends BasePage {
  constructor() {
    super();
    this.offerOrderBtn = 'a.service-summary__button';
    this.approvedData = '.service-header__details-item:nth-of-type(1)';
  };

  offerOrder() {
    const offerOrder = new Element(this.offerOrderBtn);
    return offerOrder.click();
  }

  isApproved() {
    const approvedData =new Element(this.approvedData);
    return approvedData.getText();
  }
}

module.exports = ProfilePage;
