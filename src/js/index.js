const express = require("express");

const port = process.env.port || "3000";
const host = process.env.HOST || "0.0.0.0";
const p = __dirname.replace("js", "html") + "/index.html";

const app = express();
app.get("/", (req, res) => {
  res.sendFile(p);
});

app.listen(port, host);
