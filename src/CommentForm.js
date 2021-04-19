import React, {useState} from "react";
import {Box, Button, TextField} from "@material-ui/core";

const toastify = window.toastify;

function CommentForm(props){
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [comment, setComment] = useState("");

	function handleSubmit(e){
		e.preventDefault();
		if (name && email && comment){
			if (name.length > 20){
				toastify({
					text: "Your username cannot exceed 20 characters!",
					toastBoxColor: "#d91888",
					toastBoxTextColor: "white",
					toastBoxShadow: "none",
					toastBoxTextAlign: "center",
					toastWidth: "90vw",
					animationOut: "scale-up",
					position: "bottom left",
					toastCloseTimer: "2000"
				});
			}
			else if (comment.length > 500){
				toastify({
					text: "Your comment cannot exceed 500 characters!",
					toastBoxColor: "#d91888",
					toastBoxTextColor: "white",
					toastBoxShadow: "none",
					toastBoxTextAlign: "center",
					toastWidth: "90vw",
					animationOut: "scale-up",
					position: "bottom left",
					toastCloseTimer: "2000"
				});
			}
			else{
				props.addComment(name, email, comment);
			}
		}
		else{
			toastify({
				text: "Please fill all the details!",
				toastBoxColor: "#d91888",
				toastBoxTextColor: "white",
				toastBoxShadow: "none",
				toastBoxTextAlign: "center",
				toastWidth: "90vw",
				animationOut: "scale-up",
				position: "bottom left",
				toastCloseTimer: "2000"
			});
		}
		setName("");
		setEmail("");
		setComment("");
	}

	return (
		<Box marginTop="90px" marginBottom="15px">
			<center>
				<form onSubmit={handleSubmit}>
					<TextField style={{marginBottom: "15px"}} type="text" label="Name:" onChange={(e) => {setName(e.target.value)}} value={name}></TextField><br/>
					<TextField style={{marginBottom: "15px"}} type="email" label="Email:" onChange={(e) => {setEmail(e.target.value)}} value={email}></TextField><br/>
					<TextField style={{marginBottom: "15px"}} type="text" label="Comment:" onChange={(e) => {setComment(e.target.value)}} value={comment}></TextField><br/>
					<Button variant="contained" color="primary" type="submit"> Comment </Button>
				</form>
			</center>
		</Box>
	);
}

export default CommentForm;