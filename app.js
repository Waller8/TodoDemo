require("express-async-errors");    //这个必须在最顶端
const express = require("express");
const morgan = require("morgan");
const bodyParse = require("body-parser");

require("./db");

const app = express();

app.listen(8000);