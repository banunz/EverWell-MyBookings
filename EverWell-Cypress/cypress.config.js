const { defineConfig } = require("cypress");
import config from './cypress/config.js'

module.exports = defineConfig({
  env:{
    config
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
