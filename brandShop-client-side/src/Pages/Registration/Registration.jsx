import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Authentication";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import Navbar from "../Shared/Navbar/Navbar";

const Registration = () => {
	const { auth, createUser } = useContext(AuthContext);
	const [error, setError] = useState("");

	const handleRegistration = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");
		const photoUrl = form.get("photoUrl");
		console.log(name, email, password);
		setError("");

		if (password.length < 6) {
			setError("Password should be at least 6 characters or longer");
			return;
		} else if (!/[A-Z]/.test(password)) {
			setError("Password must contain a capital letter");
			return;
		} else if (!/[@$!%*?&]/.test(password)) {
			setError("Password must contain a special character");
			return;
		}

		createUser(email, password)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				console.log(user);

				updateProfile(auth.currentUser, {
					displayName: name,
					photoURL: photoUrl,
				})
					.then(() => {
						// Profile updated!
						// ...

						console.log("update" + user.displayName);
						// if(user.displayName !== null){
						// 	user.displayName = name;
						// }
					})
					.catch((error) => {
						// An error occurred
						// ...
						console.log(error);
					});

				toast.success("Successfully  Registered", {
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				});

				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				//const errorMessage = error.message;
				// ..
				console.log(errorCode);
				if (errorCode === "auth/email-already-in-use")
					setError("User already Exists.Please try another one.");

				// setError(errorMessage);
			});
	};
	return (
		<div>
            <div className="bg-slate-800 mb-10">
			<Navbar></Navbar>
			</div>
			<div className="mt-10 mb-10">
				<h2 className="text-4xl text-center font-bold">Please Register</h2>
				<form
					onSubmit={handleRegistration}
					className="card-body lg:w-1/2 md:w-3/4 mx-auto">
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							type="text"
							placeholder="Name"
							name="name"
							className="input input-bordered"
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Date of Birth</span>
						</label>
						<input
							type="date"
							placeholder="Date of Birth"
							name="date"
							className="input input-bordered"
						/>
					</div>
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
							<span className="label-text">Photo URL</span>
						</label>
						<input
							type="photo"
							placeholder="Photo URL"
							name="photoUrl"
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
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary bg-slate-800 border-0 text-white">Register</button>
					</div>
					<ToastContainer></ToastContainer>
				</form>
				{error && <p className="text-center  text-red-700">{error}</p>}

				<p className="text-center mt-3 text-xl">
					Already have an account{" "}
					<Link className="text-blue-500 text-bold" to="/login">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Registration;
