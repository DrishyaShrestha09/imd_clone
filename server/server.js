require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${PORT}...`));