import React from "react";
import {Box} from "@material-ui/core";
import PageChanger from "./PageChanger";
import NewsList from "./NewsList";

function NewsContainer(props){
	return (
		<>
			<Box marginTop="85px">
				<PageChanger maxpage={props.maxpage} pagenum={props.pagenum} handlePagination={props.handlePagination}/>
				<NewsList news={props.news}/>
				<PageChanger maxpage={props.maxpage} pagenum={props.pagenum} handlePagination={props.handlePagination}/>
			</Box>
		</>
	);
}

export default NewsContainer;