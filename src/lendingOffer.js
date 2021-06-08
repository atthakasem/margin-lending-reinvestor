const { RestClient } = require("ftx-api");
const Log = require("./log");

class LendingOffer {
    static exchange = new RestClient(process.env.API_KEY, process.env.API_SECRET);
    static minRate = 0.000001;

    static create(currency) {
        return new Promise((resolve) => {
            this.exchange
                .getBalances()
                .then((response) => {
                    resolve({
                        coin: currency,
                        rate: this.minRate,
                        size: this.getTotalCurrencySize(response.result, currency),
                    });
                })
                .catch((error) => Log.append("GET BALANCE ERROR", error));
        });
    }

    static submit(offer) {
        Log.append("Submitting offer", offer);

        return new Promise((resolve) => {
            this.exchange
                .submitLendingOffer(offer)
                .then((response) => {
                    Log.append("Offer accepted", response);
                    resolve(response);
                })
                .catch((error) => Log.append("OFFER SUBMISSION ERROR", error));
        });
    }

    static getTotalCurrencySize(array, currency) {
        let matches = array.filter((v) => v.coin === currency);

        if (matches.length === 1) {
            return matches[0].total;
        } else {
            throw new Error("Could not find exactly 1 match for given currency.");
        }
    }
}

module.exports = LendingOffer;
