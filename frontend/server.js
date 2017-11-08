const server = require("server");
const {get, post} = server.router;
const {render} = server.reply;

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'development';

// TODO set up socket stuff for real-time updates

server({port}, [
    get("/admin*", ctx => {
        //console.log("Got the admin page: ", env);
        return render("admin.hbs", {prod: env === "production"});
    }),
    get("/*", ctx => {
        //console.log("Got the base page...");
        return render("patient.hbs", {prod: env === "production"});
    })
]).then((ctx) => {
    console.log(`Running frontend server on port ${port}. Hit Ctrl-C to quit...`);
});