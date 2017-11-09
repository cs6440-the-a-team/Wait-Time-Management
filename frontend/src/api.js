import fetch from "whatwg-fetch"

let endpoint = "http://localhost";
if (process.env.NODE_ENV === "production") {
    endpoint = "https://awesome.io"
}
