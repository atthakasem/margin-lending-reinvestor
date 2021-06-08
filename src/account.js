const Exchange = require("./exchange");
const Log = require("./log");

class Account {
    static async confirmConnection() {
        return new Exchange().api
            .getAccount()
            .then(() => Log.write("Connection established"))
            .catch((error) => Log.error("CHECK CONNECTION ERROR", error));
    }

    static async getBalance(currency) {
        return new Exchange().api
            .getBalances()
            .then((response) => this._getTotalCurrencySize(response.result, currency))
            .catch((error) => Log.error("GET BALANCE ERROR", error));
    }

    static _getTotalCurrencySize(array, currency) {
        let matches = array.filter((v) => v.coin === currency);

        if (matches.length === 1) {
            return matches[0].total;
        } else {
            throw new Error("Could not find exactly 1 match for given currency.");
        }
    }
}

module.exports = Account;
