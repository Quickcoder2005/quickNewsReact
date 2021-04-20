import React, {useState, useEffect} from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import Header from "./Header";
import Loader from "./Loader";
import NewsContainer from "./NewsContainer";
import CommentsContainer from "./CommentsContainer";
import AboutContainer from "./AboutContainer";
import Footer from "./Footer";
import axios from "axios";
import "./App.css";

const theme = createMuiTheme({
	palette: {
    	primary: {
      		main: "#d91888",
    	},
    	secondary: {
     		main: "#e83f74",
    	}
  	}
});

function App(){
	const [news, setNews] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [containerState, setContainerState] = useState("news");
	const [pagenum, setPagenum] = useState(1);
	const [maxpage, setMaxpage] = useState(0);

	function handlePagination(e, v){
		if (!(pagenum === v)){
			setIsLoaded(false);
		setPagenum(v);
		}
	}

	useEffect(() => {
		axios.get("https://hacker-news.firebaseio.com/v0/topstories.json").then((res) => {
			const result = res.data.slice((pagenum * 10) - 10, pagenum * 10);
			setMaxpage((res.data.length % 10 === 0 ? (res.data.length/10) : (Math.floor(res.data.length/10) + 1)));
			setNews([]);
			result.forEach((v, i) => {
				axios.get("https://hacker-news.firebaseio.com/v0/item/" + v + ".json").then((res) => {
					const newResult = res.data;
					setNews((prevNews) => {
						if (i === (result.length - 1)){
							setIsLoaded(true);
						}
						return [...prevNews, newResult];
					});
				});
			});
		});
	}, [pagenum]);

	return (
		<ThemeProvider theme={theme}>
			{!isLoaded && <Loader/>}
			<Header setContainerState={setContainerState} setIsLoaded={setIsLoaded}/>
			{containerState === "news" && <NewsContainer news={news} maxpage={maxpage} pagenum={pagenum} handlePagination={handlePagination}/>}
			{containerState === "comments" && <CommentsContainer/>}
			{containerState === "about" && <AboutContainer/>}
			<Footer/>
		</ThemeProvider>
	);
}

export default App;
