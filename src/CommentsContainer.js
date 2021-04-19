import React, {useState, useEffect} from "react";
import Loader from "./Loader";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import {showData, sendData} from "./backend.js";

function CommentsContainer(props){
	const [comments, setComments] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		showData(setComments, setIsLoaded);
	}, []);

	function addComment(name, email, comment){
		sendData(name, comment);
	}

	return (
		<>	
			{!isLoaded && <Loader/>}
			<CommentForm addComment={addComment}/>
			<CommentList data={comments}/>
		</>
	);
}

export default CommentsContainer;