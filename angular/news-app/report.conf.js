const ReportportalAgent = require("agent-js-jasmine");

const agent = new ReportportalAgent({
  token: "e0d2ea9a-0ec3-4e6b-a911-76bb15ab68d0",
  endpoint: "https://rp.epam.com/api/v1",
  launch: "news-app",
  project: "volha_yasinskaya_personal",
  attachPicturesToLogs: false
});

jasmine.addReporter(agent.getJasmineReporter());

agent.getExitPromise().then(() => {
  console.log("finish work");
});
