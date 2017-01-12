
 exports.config = {
      // The address of a running selenium server. 
      seleniumAddress: 'http://localhost:4444/wd/hub', 
       framework: 'jasmine',
      // Capabilities to be passed to the webdriver instance. 

      capabilities: {
          'browserName': 'chrome'
      }, 

      /*multiCapabilities: [{
              'browserName': 'chrome'
          }, {
              'browserName': 'firefox'
          }],*/

      // Spec patterns are relative to the current working directly when 
      // protractor is called. 
      specs: ['spec.js'], 

      // Options to be passed to Jasmine-node. 
      jasmineNodeOpts: {
          showColors: true, 
          defaultTimeoutInterval: 110000,
      }
  };