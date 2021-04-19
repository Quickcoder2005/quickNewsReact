import React from "react";
import {Box} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";

function PageChanger(props){
	return (
		<Box display="flex" alignItems="center" justifyContent="center" marginTop={3} marginBottom={3}>
			<Pagination count={props.maxpage} page={props.pagenum} color="primary" onChange={props.handlePagination}/>
		</Box>
	);
}

export default PageChanger;