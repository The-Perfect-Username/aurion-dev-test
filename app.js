const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { luhnCheck } = require('./lib/luhn.js'); 
const { getIssuer } = require('./lib/issuer.js'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/creditcard/number", (req, res) => {
    const params = req.body;
    
    if (Object.keys(params).length === 0) {
        res.status(422);
        res.send("POST body is empty or missing");
        return;
    }

    if (!("number" in params)) {
        res.status(422);
        res.send("POST body is missing parameter 'number'");
        return;
    }

    const number = params.number || null;

    if (!number) {
        res.status(400);
        res.send("Number is empty");
        return;
    }
    const isLuhnValidated = luhnCheck(number);
    const issuer = getIssuer(number);

    res.json({
        "number": number,
        "luhnValid": isLuhnValidated,
        "issuer": issuer,
        "links": [{
            "rel": "self",
            "href": "http://localhost:3600/creditcard/checknumber"
        }]
    })
});

app.listen(3600);

module.exports = app;
