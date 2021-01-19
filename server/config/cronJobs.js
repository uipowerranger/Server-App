var CronJob = require("cron").CronJob;

exports.start = async () => {
  console.log("Before job instantiation");
  const jobFasting = new CronJob(
    "00 00 07 * * *",
    function () {
      const d = new Date();
      console.log("Morning:", d);
    },
    null,
    true,
    "Asia/Kolkata"
  );
  const jobMorning = new CronJob(
    "00 00 09 * * *",
    function () {
      const d = new Date();
      console.log("Morning:", d);
    },
    null,
    true,
    "Asia/Kolkata"
  );
  const jobAfternoon = new CronJob(
    "00 00 13 * * *",
    function () {
      const d = new Date();
      console.log("Morning:", d);
    },
    null,
    true,
    "Asia/Kolkata"
  );
  const jobEvening = new CronJob(
    "00 00 21 * * *",
    function () {
      const d = new Date();
      console.log("Morning:", d);
    },
    null,
    true,
    "Asia/Kolkata"
  );
  console.log("After job instantiation");
  jobMorning.start();
  jobAfternoon.start();
  jobEvening.start();
  jobFasting.start();
};
