// ******************************************************************************
// routes.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const router = express.Router();

router.get("/api/boards", function(req, res) {

	Board.find({}).exec(function(err, doc) {

	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
  	});
});

module.exports = router;