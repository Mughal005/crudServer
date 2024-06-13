const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const todo = require("./route/todoRoute");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
app.use("/API", todo);

const PORT = 3001;

app.listen(PORT, () => {
	console.log("server Runing.....");
});
