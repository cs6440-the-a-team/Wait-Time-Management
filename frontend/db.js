const mysql = require("mysql");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var db = {
    connected: false,
    connection: null,
    connect: function() {
        return new Promise((resolve, reject) => {
            this.connection = mysql.createConnection({
                host: "db",
                database: "wait_time_management",
                user: "wait_time_management",
                password: "Wru48vWy",
                queryFormat: function (query, values) {
                    if (!values) {
                        return query;
                    };
                    return query.replace(/\:(\w+)/g, (txt, key) => {
                        if (values.hasOwnProperty(key)) {
                            return this.escape(values[key]);
                        }
                        return txt;
                    });
                }
            });
    
            this.connection.connect((error) => {
                if (error) {
                    reject(error);
                    return;
                }
    
                this.connected = true;
                resolve(this);
            })
        });
    },
    connectWithRetries: async function (max_tries=3) {
        let num_tries = 0;
        
        while (num_tries < max_tries && !this.connected) {
            num_tries++;
            try {
                console.log(`Connecting to db. ${num_tries}/${max_tries} attempts...`);
                await this.connect();
                console.log("Connected to db successfully!");
            }
            catch(err) {
                console.error("Error connecting: ", err);
    
                if (num_tries < max_tries) {
                    console.log("Attempting to connect again after 3 seconds...");
                    await sleep(3000);
                }
                else {
                    throw new Error("Failed to connect to database after hitting max attempts.");
                }
            }
        }
    
        return this;
    },
    query: function (sql, params) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, params, (error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
};

module.exports = db;