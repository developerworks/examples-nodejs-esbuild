import express from "express";
import net from "./net.mjs";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world!")
});

app.listen(3000, net.LOCAL_IP, 10000, () => {
    console.log("Server is listening on address: http://%s:%s", net.LOCAL_IP, 3000);
})