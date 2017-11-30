const server = require("server");
const { get, post, put, del } = server.router;
const { render } = server.reply;
const proxy = require("http-proxy-middleware");
const config = require("./config");

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';

// TODO set up socket stuff for real-time updates?

var restream = function (proxyReq, req, res, options) {
    if (req.body) {
        let bodyData = JSON.stringify(req.body);
        // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
        proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        // stream the content
        proxyReq.write(bodyData);
    }
}

let proxy_options = {
    target: (process.env.NODE_ENV === "production" ? 'http://backend:8080' : 'http://localhost:8080'),
    changeOrigin: true,
    onProxyReq: restream,
    onProxyRes: function (proxyRes, req, res) {
        // Make sure the response is never cached. IE has problems otherwise.
        proxyRes.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
        proxyRes.headers['Pragma'] = 'no-cache';
        proxyRes.headers['Expires'] = '0';
    }
};

if (config.root_path.length > 0) {
    proxy_options.pathRewrite = {
        [`^${config.root_path}/api`]: '/api'
    }
}

let apiProxy = server.utils.modern(proxy(config.root_path + "/api", proxy_options));
server({ port, security: { csrf: false } }, [
    apiProxy,
    get(config.root_path + "/admin*", ctx => {
        //console.log("Got the admin page: ", env);
        return render("admin.hbs", { prod: env === "production" });
    }),
    get(config.root_path + "/", ctx => {
        //console.log("Got the base page...");
        return render("public.hbs", { prod: env === "production" });
    })
]).then((ctx) => {
    console.log(`Running frontend server on port ${port}. Hit Ctrl-C to quit...`);
});