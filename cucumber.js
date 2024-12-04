module.exports = {
  default: {
    require: ['tests/schedule/steps.js'], // Path to step definitions
    format: ['progress', 'json:tests/report/cucumber_report.json'], // Output formats
    paths: ['tests/schedule/**/*.feature'], // Path to feature files
    publishQuiet: true, // Disables Cucumber's publishing feature
  },
}
