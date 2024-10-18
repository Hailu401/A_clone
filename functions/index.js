
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config()
const stripe = require("stripe")(
  process.env.STRIPE_KEY
);

const app = express();cd
app.use(cors({origin:true}));

app.use(express.json());

app.get('/',(req, res)=>{
    res.status(200).json({
        message: "success",
    });
});

exports.api = onRequest(app);