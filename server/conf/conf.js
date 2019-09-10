const dotenv = require('dotenv').config();

const path = require('path');

const convict = require('convict');

var rootPath = path.normalize(__dirname + "../../../");
var conf = convict({
    env: {
        doc: "Environment variable",
        format: ["development", "production", "test", "staging"],
        default: "development",
        env: "NODE_ENV"
    },
    port: {
        doc: "Port number",
        format: "port",
        default: 3000,
        env: "PORT"
    },
    db: {
        name: {
            doc: "DB name",
            format: "String",
            default: "devDB",
            env: "DB_NAME"
        },
        host: {
            doc: "DB host name",
            format: "String",
            default: "localhost:27017",
            env: "DB_HOST"
        }
    }
});

var env = conf.get('env');
conf.loadFile(rootPath + "config/" + env + ".json");
conf.validate({ strict: true });
conf.load({
    rootPath: rootPath
});

console.log("env: ", conf.get("env"));
console.log("port: ", conf.get("port"));
console.log("name: ", conf.get("db.name"));
console.log("host: ", conf.get("db.host"));
console.log("rootPath: ", conf.get("rootPath"));
console.log("name: ", process.env.DB_NAME);
console.log("port: ", process.env.PORT);
console.log("env: ", process.env.NODE_ENV);
console.log("db host: ", process.env.DB_HOST);
console.log("api key: ", process.env.API_KEY);

module.exports = conf;