const express = require('express');
const app = express();

app.use(express.json());

const somethingRouters = require("./routes/somethingRoutes");
app.use("/api/dosomething", somethingRouters);

app.listen(5000, () => console.log("Server started [port=5000]"));