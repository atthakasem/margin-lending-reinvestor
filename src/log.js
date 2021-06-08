const fs = require("fs");

class Log {
    static file = "margin_lending.log";

    static append(string, object) {
        let now = new Date().toISOString();
        let objString = "";
        if (object !== undefined) {
            objString = ": " + JSON.stringify(object);
        }
        let line = "[" + now + "] " + string + objString;

        console.log(line);

        fs.appendFile(this.file, line + "\n", (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    }
}

module.exports = Log