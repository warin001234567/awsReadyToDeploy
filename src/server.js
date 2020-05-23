require("./db/mongoose");
const express = require("express");
const router = require("./routers/routers");
const authRouter = require("./routers/authRouter");
const bookRouter = require("./routers/bookRouter");
const cors = require("cors");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(router);
app.use(authRouter);
app.use(frontRouter);
app.use(bookRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port + ".");
});
