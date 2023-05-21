const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: '../../../docs',
        reportFilename: '[name]-report',
        json: false
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
});
