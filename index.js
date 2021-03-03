const express = require("express");
const app = express();

const PORT = 5022;

function handleListening() {
   console.log(`Listening : http://localhost:${PORT}`);
}

app.get("/", (req, res) => {
   res.send("teasdst");
});

app.listen(PORT, handleListening);
