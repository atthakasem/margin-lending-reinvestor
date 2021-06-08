const Account = require("./account");
const Exchange = require("./exchange");
const Log = require("./log");

class LendingOffer {
    static minRate = 0.000001;

    static async create(currency) {
        return {
            coin: currency,
            rate: this.minRate,
            size: await Account.getBalance(currency),
        };
    }

    static async submit(offer) {
        Log.write("Submitting offer", offer);

        return new Exchange().api
            .submitLendingOffer(offer)
            .then((response) => {
                Log.write("Offer accepted", response);
                return response;
            })
            .catch((error) => Log.error("OFFER SUBMISSION ERROR", error));
    }
}

module.exports = LendingOffer
