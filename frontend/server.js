const server = require("server");
const {get, post, put, del} = server.router;
const {render} = server.reply;
const proxy = require("http-proxy-middleware");

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

// TODO set up socket stuff for real-time updates?

var restream = function(proxyReq, req, res, options) {
    if (req.body) {
        let bodyData = JSON.stringify(req.body);
        // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
        proxyReq.setHeader('Content-Type','application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        // stream the content
        proxyReq.write(bodyData);
    }
}

let apiProxy = server.utils.modern(proxy("/api", {
    target: 'http://localhost:8080',
    changeOrigin: true,
    onProxyReq: restream
}));
server({port, security: {csrf: false}}, [
    apiProxy,
    get("/admin*", ctx => {
        //console.log("Got the admin page: ", env);
        return render("admin.hbs", {prod: env === "production"});
    }),
    get("/", ctx => {
        //console.log("Got the base page...");
        return render("public.hbs", {prod: env === "production"});
    })
]).then((ctx) => {
    console.log(`Running frontend server on port ${port}. Hit Ctrl-C to quit...`);
});