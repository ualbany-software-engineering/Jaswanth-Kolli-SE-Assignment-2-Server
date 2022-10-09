const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.post("/", function(req, res) {
    console.log(req.body.firstNumber + req.body.secondNumber);
    res.send({
        "value": req.body.firstNumber + req.body.secondNumber
    });
})

module.exports = router;