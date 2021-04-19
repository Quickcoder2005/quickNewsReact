import uuid from "uuid-random";
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.enc.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
firebase.initializeApp(firebaseConfig);

function showData(setComments, setIsLoaded){
	const db = firebase.database();
	let data = [];

	db.ref("comments/").orderByChild("timestamp").on("value", (s) => {
		data = [];
		s.forEach((v, i) => {
			data.push(v.val());
		});
		setComments(data);
		setIsLoaded(true);
	});
}

function sendData(name, comment){
	const db = firebase.database();

	db.ref("comments/" + uuid()).set({
		name: `${name}`,
		message: `${comment}`,
		timestamp: firebase.database.ServerValue.TIMESTAMP
	});
}

export {showData, sendData};