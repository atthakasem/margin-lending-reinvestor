require("dotenv").config();

const cron = require("node-cron");
const LendingOffer = require("./lendingOffer");

// Run every hour at minute 2
cron.schedule("2 * * * *", () => {
    LendingOffer.create("USD").then((offer) => LendingOffer.submit(offer));
});
