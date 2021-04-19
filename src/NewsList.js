import React from "react";
import NewsItem from "./NewsItem";
import uuid from "uuid-random";

function NewsList(props){
	const newsList = props.news.map((v, i) => {
		return (
			<NewsItem key={uuid()} data={v}/>
		);
	});

	return (
		<div> {newsList} </div>
	);
}

export default NewsList;