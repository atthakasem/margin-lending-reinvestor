const { RestClient } = require("ftx-api");

// Singleton
class Exchange {
    static instance;

    constructor() {
        if (this.instance) {
            return this.instance;
        }
        this.api = new RestClient(process.env.API_KEY, process.env.API_SECRET);
    }
}

module.exports = Exchange
