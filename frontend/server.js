const server = require("server");
const {get, post} = server.router;
const {render} = server.reply;


const port = process.env.PORT || 8080;

// TODO set up socket stuff for real-time updates

server({port}, [
    get("/admin*", ctx => {
        //console.log("Got the admin page...");
        return render("admin.html");
    }),
    get("/*", ctx => {
        //console.log("Got the base page...");
        return render("patient.html");
    })
]).then((ctx) => {
    console.log(`Running frontend server on port ${port}. Hit Ctrl-C to quit...`);
});