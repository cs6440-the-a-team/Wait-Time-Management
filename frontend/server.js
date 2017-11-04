const server = require("server");
const {get, post} = server.router;

const port = process.env.PORT || 8080;

// TODO set up socket stuff for real-time updates

server({port}).then((ctx) => {
    console.log(`Running frontend server on port ${port}. Hit Ctrl-C to quit...`);
});