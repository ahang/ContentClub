// ******************************************************************************
// routes.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const router = express.Router();
const Board = require("../models/Board");

router.get("/boards", function(req, res) {

	Board.find({}).exec(function(err, doc) {

	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
  	});
});

router.post("/boards", function(req, res) {

	const newBoard = new Board(req.body);
	console.log(req.body);

    newBoard.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
            res.end();
        }

    });
});

module.exports = router;