import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/Authentication";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {
	const {  signIn, signInWithGoogle } = useContext(AuthContext);
	const [errors, setErrors] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	const handleLogin = (e) => {
		console.log("logged in");

		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		setErrors("");

		signIn(email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(`Signed in as ${user.displayName}`);

				// updateProfile(auth.currentUser, {
				// 	displayName: "Jane User",
				// 	photoURL: "https://example.com/jane-q-user/profile.jpg",
				// })
				// 	.then(() => {
				// 		// Profile updated!
				// 		// ...
				// 		console.log();
				// 		if (user.displayName !== null) {
				// 			user.displayName = name;
				// 		}
				// 	})
				// 	.catch((error) => {
				// 		// An error occurred
				// 		// ...
				// 		console.log(error);
				// 	});

				toast.success("Successfully Logged in", {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
					toastId: "login-id",
				});

				navigate(location?.state ? location.state : "/");
			})
			.catch((error) => {
				const errorCode = error.code;
				//  const errorMessage = error.message;
				// console.log(errorCode,errorMessage);

				//)
				if (errorCode === "auth/invalid-login-credentials")
					//alert('email and password does not match' );
					setErrors("Email or password does not match");
			});
	};

	// const handleGoogleLogin = () => {
	// 	signInWithGoogle()
	// 		.then((result) => {
	// 			console.log(result.user);
	// 			toast.success("Successfully Logged in", {
	// 				position: "top-right",
	// 				autoClose: 5000,
	// 				hideProgressBar: false,
	// 				closeOnClick: true,
	// 				pauseOnHover: true,
	// 				draggable: true,
	// 				progress: undefined,
	// 				theme: "colored",
	// 				toastId: "login-id",
	// 			});

	// 			// navigate(location?.state ? location.state : "/");
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };



	const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

	return (
		<div>
            <div className="bg-slate-800 mb-10">
			<Navbar></Navbar>
			</div>
			<div className="mt-10 mb-10">
				<h2 className="md:text-4xl text-center font-bold">Please Login</h2>
				<form
					onSubmit={handleLogin}
					className="card-body lg:w-1/2 md:w-3/4 mx-auto ">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							placeholder="email"
							name="email"
							className="input input-bordered"
							required
						/>
					</div>

					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="password"
							name="password"
							className="input input-bordered"
							required
						/>
						<label className="label">
							<a
								href="#"
								className="label-text-alt link link-hover">
								Forgot password?
							</a>
						</label>
						<p className="text-left font-bold text-red-700">
							{errors}
						</p>
					</div>

					<div className="form-control mt-6">
						<button className="btn btn-secondary bg-slate-800 border-0 text-white hover:bg-black">Login</button>
					</div>
					<ToastContainer></ToastContainer>
				</form>
				<p className="text-center mt-4">
					Do not have an account{" "}
					<Link
						className="text-blue-500 text-bold"
						to="/registration">
						Register
					</Link>
				</p>
				<div className="text-center mt-3 ">
					<button
						onClick={handleGoogleSignIn}
						className="btn btn-outline ">
						<FaGoogle></FaGoogle>
						Login with Google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
