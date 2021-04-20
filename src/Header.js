import React from "react";
import {AppBar, Box, CssBaseline, Typography, Toolbar, IconButton} from "@material-ui/core";
import {CalendarToday, EventNote, Comment, Info} from "@material-ui/icons";

function Header(props){
	return (
		<>
			<CssBaseline/>
			<AppBar position="fixed">
				<Toolbar>
					<CalendarToday style={{marginBottom: "1.5px", marginLeft: "5px", marginRight: "5px"}}/>
					<Typography variant="h6"> QuickNews </Typography>
						<Box position="absolute" right={10}>
							<IconButton onClick={() => {props.setContainerState("news")}}> 
								<EventNote style={{color: "white"}}/>
							</IconButton>
							<IconButton onClick={() => {props.setContainerState("comments")}}>
								<Comment style={{color: "white"}}/>
							</IconButton>
							<IconButton onClick={() => {props.setContainerState("about")}}>
								<Info style={{color: "white"}}/>
							</IconButton>
						</Box>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Header;
