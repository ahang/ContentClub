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
		return axios.post("/boards", board)
	},

	getBoards () {
		return axios.get("/boards");
	},

	getOneBoard (board) {
		return axios.get(`/boards/${board._id}`);
	},

	deleteBoard (board) {
		console.log(board.id)
		return axios.post(`/delete/${board._id}`)
	}
}

export default helpers;