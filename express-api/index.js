const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/message", (req, res) => {
  let date = new Date();
  res.set("Content-Type", "text/html");
  res.send(
    Buffer.from(
      `<div><p> ${"Date: " + date.toLocaleDateString()} </p>
        <p> ${" Time: " + date.toLocaleTimeString()} </p></div>`
    )
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
