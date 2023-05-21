const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: '../../../docs',
        reportFilename: 'report'
    },
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
});
