// ******************************************************************************
// Comment.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var mongoose = require('mongoose');

// =============================================================
// *** Create Schema
// =============================================================
var Schema = mongoose.Schema;

var Comment = new Schema ({
	author: {
		type: String,
		required: true
	},
	text: {
		type: String,
		minlength: 1
	},
	createdAt: {
    type: Date,
    default: Date.now
  	},
  	replies: [{
		type: Schema.Types.ObjectId,
		ref: 'Reply'
	}]
});


// =============================================================
// *** Create Comment Model
// =============================================================
var Comment = mongoose.model('Comment', Comment);

// =============================================================
// *** Export the Comment Model
// =============================================================
module.exports = Comment;