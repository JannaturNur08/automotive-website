import { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

import PropTypes from "prop-types"; // ES6
import auth from "../firebasev2/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const Authentication = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		setLoading(true);

		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password);
	};

	// const signInWithGoogle = () => {
	// 	setLoading(true);
	// 	return signInWithPopup(auth, googleProvider);
	// };

	const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	//current user
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
			console.log("current user", currentUser);
			if (currentUser) {
				// User is signed in, you can access user.displayName here
				//alert(`Hello ${currentUser.displayName}`);
			} else {
				// User is signed out, handle as needed
			}
		});
		return () => unSubscribe();
	}, []);

	const authInfo = {
		auth,
		user,
		createUser,
		signIn,
		logOut,
		loading,
		signInWithGoogle,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default Authentication;

Authentication.propTypes = {
	children: PropTypes.node,
};
