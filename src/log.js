const fs = require("fs");

class Log {
    static file = "margin_lending.log";

    static write(string, object) {
        this._append(string, false, object);
    }

    static error(string, object) {
        this._append(string, true, object);
    }

    static _append(string, isError, object) {
        let line = this._createLine(string, object);

        if (isError) {
            console.error(line);
        } else {
            console.log(line);
        }

        this._appendFile(line);
    }

    static _createLine(string, object) {
        let now = new Date().toISOString();

        let objString = "";
        if (object !== undefined) {
            objString = ": " + JSON.stringify(object);
        }

        return "[" + now + "] " + string + objString;
    }

    static _appendFile(line) {
        fs.appendFile(this.file, line + "\n", (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    }
}

module.exports = Log