exports.config = {

  seleniumAddress: 'http://localhost:4723/wd/hub',

  capabilities: {
    browserName: 'chrome',
    platformName: 'Android',
    deviceName: 'myDevice',
  },

  specs: ['test/spec.js'],
  onPrepare: () => {
    browser.waitForAngularEnabled(false);
  },

  jasmineNodeOpts: {
    defaultTimeoutInterval: 200000,
  },

};
