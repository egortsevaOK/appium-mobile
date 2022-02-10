const PageFactory = require('../pages/pageFactory');

describe('Onliner Mobile', function() {
  beforeEach(async function() {
    await PageFactory.getPage('Home').open();
  });

  it('Should open home page and verify page title', async function() {
    const title = await browser.getTitle();
    expect(title).toEqual('Onliner. Услуги');
  });

  it('Should open orders list and sort it by max price', async function() {
    await PageFactory.getPage('Home').viewTasks();
    await PageFactory.getPage('Orders').sort('Сначала дорогие');
    const activeSortItem = await PageFactory.getPage('Orders').activeSortItemIs();
    expect(activeSortItem).toEqual('Сначала дорогие');
  });

  it('Filter executors list by City, select executor profile and check its data has been approved', async function() {
    await PageFactory.getPage('Home').viewExecutors();
    await PageFactory.getPage('Executors').filterBy('Минск');
    await PageFactory.getPage('Executors').selectExecutor();
    const profileData = await PageFactory.getPage('Profile').isApproved();
    expect(profileData).toEqual('Данные проверены');
  });
});
