import React from "react";
import {AppBar, Box, Button, ButtonGroup, CssBaseline, Typography, Toolbar, IconButton} from "@material-ui/core";
import {CalendarToday, EventNote, Comment, Info} from "@material-ui/icons";

function Header(props){
	return (
		<>
			<CssBaseline/>
			<AppBar position="fixed">
				<Toolbar>
					<CalendarToday style={{marginBottom: "1.5px", marginLeft: "5px", marginRight: "5px"}}/>
					<Typography variant="h6"> QuickNews </Typography>
						{!("ontouchstart" in document) &&
							<Box position="relative" left={15}>
									<ButtonGroup>
										<Button variant="contained" color="primary" onClick={() => {props.setContainerState("news")}}> News </Button>
										<Button variant="contained" color="primary" onClick={() => {props.setContainerState("comments")}}> Comments </Button>
										<Button variant="contained" color="primary" onClick={() => {props.setContainerState("about")}}> About </Button>
									</ButtonGroup>
							</Box>
						}
						{("ontouchstart" in document) &&
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
						}
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Header;