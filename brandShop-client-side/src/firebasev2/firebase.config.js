// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_APIKEY,
// 	authDomain: import.meta.env.VITE_AUTHDOMAIN,
// 	projectId: import.meta.env.VITE_PROJECTID,
// 	storageBucket: import.meta.env.VITE_STORAGEBUCKET,
// 	messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
// 	appId: import.meta.env.VITE_APPID,
// };

const firebaseConfig = {
	apiKey: "AIzaSyDxawtWFHMQGKUbCHquEqMNe8t0Zc9oVGE",
	authDomain: "brand-shop-224f3.firebaseapp.com",
	projectId: "brand-shop-224f3",
	storageBucket: "brand-shop-224f3.appspot.com",
	messagingSenderId: "643418134971",
	appId: "1:643418134971:web:150b5a9ac3dbbc67c78c9e",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
