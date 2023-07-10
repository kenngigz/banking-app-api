const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { resLogger, reqLogger } = require("./controllers/logEvents");
const errorHandler = require("./controllers/errorHandler");
const accountRoute = require("./routes/account");
const transactionsRoute = require("./routes/transactions");
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// custom middleware logger
app.use(reqLogger);
app.use(resLogger);

app.use(express.json());
app.set("view engine", "ejs");
app.use(cors());
app.use(authRoute);
app.use(accountRoute.Router);
app.use(profileRoute);
app.use(transactionsRoute);

app.use("*", (req, res) => {
  res.json("Page not found.");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
