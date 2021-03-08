import express from "express";
import userRouter from "./routers/userRouter";

const app = express();

const PORT = 5022;

function handleListening() {
   console.log(`Listening : http://localhost:${PORT}`);
}

app.get("/", (req, res) => {
   res.send("hello page ");
});

app.use("/users/", userRouter);

app.listen(PORT, handleListening);
