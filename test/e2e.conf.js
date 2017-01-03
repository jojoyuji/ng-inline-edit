exports.config = {
  specs: ['specs/e2e/ng-inline-edit.js'],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': [
        'no-sandbox',
        'no-default-browser-check',
        'no-first-run',
        'disable-default-apps'
      ]
    }
  }
};
