import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
	apiKey: "AIzaSyAM2ruRtvaVL09FlfrIgiKHjflNhcmQmCw",
	authDomain: "myblogsite-react.firebaseapp.com",
	projectId: "myblogsite-react",
	storageBucket: "myblogsite-react.appspot.com",
	messagingSenderId: "282198458772",
	appId: "1:282198458772:web:42b462cfa6b6e20f414f81",
	measurementId: "G-F1GNCHGCTX"
});

const fb = firebase;

export default fb;