// ******************************************************************************
// helpers.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import axios from "axios";

// ******************************************************************************
// *** Helper functions 
// =============================================================


const helpers = {
	
	saveBoard (board) {
		//console.log(board)
		console.log(board.boardTitle, board.category, board.contentURL, board.contentDescription, board.openUntil, board.isPublic)
		return axios.post("/api/save/board", board)
	},

	getBoards () {
		return axios.get("/api/board");
	},

	deleteBoard (board) {
		console.log(board.id)
		return axios.post(`/delete/${board.id}`)
	}
}

export default helpers;