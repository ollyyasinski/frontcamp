// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");
const ReportportalAgent = require("agent-js-jasmine");

const agent = new ReportportalAgent({
  token: "e0d2ea9a-0ec3-4e6b-a911-76bb15ab68d0",
  endpoint: "https://rp.epam.com/api/v1",
  launch: "news-app",
  project: "volha_yasinskaya_personal",
  attachPicturesToLogs: false
});

exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts", "../src/**/*.spec.ts"],
  capabilities: {
    browserName: "chrome"
  },
  directConnect: true,
  baseUrl: "http://localhost:4200/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare: () => {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.e2e.json")
    });
    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(agent.getJasmineReporter());
  },
  afterLaunch: () => {
    return agent.getExitPromise();
  }
};
