const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const process = require("process");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

// process.on("unhandledRejection", (reason, promise) => {
// 	console.error("Unhandled Promise Rejection:", reason);
// 	console.error("Promise:", promise);
// 	// Agrega un manejo adicional de errores aquí si es necesario
// });

app.use(cors()); // Usamos el middleware cors
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

module.exports = app;
