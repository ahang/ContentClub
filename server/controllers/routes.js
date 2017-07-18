// ******************************************************************************
// routes.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const router = express.Router();
const Board = require("../models/Board");
const Comment = require("../models/Comment");
const Reply = require("../models/Reply");

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

router.get("/boards/:id", function(req, res) {
	
	Board.findOne({ _id : req.params.id }).populate("comments").sort({"date": -1}).then( function(db) {
		
  		res.json(db)
  	})
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

router.post("/boards/comment/:id", function(req, res) {
		console.log(req.body);
  		// Use our Comment model to make a new comment from the req.body
		var newComment = new Comment(req.body);
		// Save the new comment to mongoose
		newComment.save(function(error, doc) {
			if (error) {
      			res.sendStatus(400);
      			//res.send(error);
      		} else {
		    
			    // Find our article and push the new comment id into the article's comments array
			    Board.findOneAndUpdate({"_id": req.params.id}, { $push: { "comments": doc._id } }, { new: true }, function(err, newdoc) {
			        //redirect user to the "/" page
			        res.end();
			    });
			}
		});
	});

module.exports = router;