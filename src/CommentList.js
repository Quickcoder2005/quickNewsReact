import React from "react";
import {Card, Typography} from "@material-ui/core";

function CommentList(props){
	const arr = props.data;
	const list = arr.slice(0).reverse().map((v, i) => {
		return (
		    <Card style={{marginBottom: "10px", marginLeft: "50px", marginRight: "50px", paddingTop: "10px", paddingLeft: "20px", paddingRight: "20px"}} key={i}>
		    	<Typography style={{fontSize: "15px"}} variant="h6" color="textSecondary" paragraph> {v.name} </Typography>
                <Typography variant="h6" color="textPrimary" align="center" paragraph> {v.message} </Typography>
            </Card>
		);
	});

	return (
		<div> {list} </div>
	);
}

export default CommentList;