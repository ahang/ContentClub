const express = require("express");
const router = new express.Router();

router.get("/dashboard", (req, res) => {
    res.status(200).json({
        message: "You're authorized to see this"
    });
});

router.get("/", (req, res) => {
	res.sendFile(__dirname + "./public/index.html");
});

module.exports = router;