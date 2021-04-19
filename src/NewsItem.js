import React from "react";
import {Card, Typography, Link} from "@material-ui/core";

function NewsItem(props){
	return (
		<Card style={{paddingTop: "20px", paddingBottom: "2px",paddingLeft: "35px", paddingRight: "35px", marginTop: "15px", marginLeft: "30px", marginRight: "30px", marginBottom: "15px"}}>
			<Typography style={{marginBottom: "5px"}} variant="h5"> {props.data.title} </Typography>
			<Link href={props.data.url} target="_blank" rel="noopener noreferrer"> {props.data.url} </Link>
			<Typography style={{marginTop: "5px"}} variant="h6"> Written by - {props.data.by} </Typography>
			<br/>
		</Card>
	);
}

export default NewsItem;