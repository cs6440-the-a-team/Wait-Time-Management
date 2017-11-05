const server = require("server");
const {get, post} = server.router;
const db = require("./db");

db.connectWithRetries(5).then(function(db) {
    console.log("Connected to database. Starting server...");
    const port = process.env.PORT || 8080;
    
    // TODO set up socket stuff for real-time updates
    
    server({port}, [
        get('/db-test', (ctx) => {
            console.log("Hit test endpoint.");
    
            db.query("SELECT * FROM dim_room_status").then((result) => {
                console.log("Results: ", result);
            }, (error) => {
                console.error("Error querying database: ", error);
            });
    
            return 'You made it!';
        })
    ]).then((ctx) => {
        console.log(`Running frontend server on port ${port}. Hit Ctrl-C to quit...`);
    });
}, function(error) {
    console.error("Problem connecting with database: ", error);
}).catch(function(error) {
    console.error("Exception connecting with database: ", error);
});