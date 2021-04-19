import React from "react";
import "pure-css-loader/dist/css-loader.css";

function Loader(){
	return (
		<div className="loader loader-default is-active" data-text="Loading..." data-blink></div>
	);
}

export default Loader;