import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/Authentication";
import { Link, NavLink } from "react-router-dom";
import DarkMode from "../../../Components/DarkMode/DarkMode";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				//				window.location.reload();
				console.log("Sign-out successful.");
				<Link to="/"></Link>;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const navLinks = (
		<>
			<li className="font-roboto">
				<NavLink
					to="/"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active  " : ""
					}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/addProduct"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active " : ""
					}>
					Add Product
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/myCart"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "active  " : ""
					}>
					My Cart
				</NavLink>
			</li>
		</>
	);
	return (
		<nav id="sidebar" className="sticky font-roboto">
			<div className="navbar  text-neutral-content h-[200px] lg:h-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 text-xl hover:bg-primary">
							{navLinks}
						</ul>
					</div>
					{/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
					<div className="flex items-center flex-col lg:flex-row">
						<img
							className="relative"
							src="https://i.ibb.co/CQnywWj/Frame-8.png"
							alt=""
							height={100}
							width={100}
						/>
						<h2 className="lg:text-4xl font-oswald font-bold absolute mt-14 lg:mt-0 md:ml-24">
							Furious
						</h2>
					</div>
				</div>
				<div className="navbar-center ">
					<div className="hidden lg:flex">
						<ul className="menu menu-horizontal px-1 text-xl">
							{navLinks}
						</ul>
						<div className="mt-2">
							{user ? (
								<button
									onClick={handleLogOut}
									className="text-white btn btn-secondary bg-blue-950 border-0 hover:bg-[#FF5555]">
									Logout
								</button>
							) : (
								<Link to="/login">
									{" "}
									<button className="text-white  btn bg-red-600 btn-primary border-0 hover:bg-[#FF5555]">
										Login
									</button>
								</Link>
							)}
						</div>
					</div>
					<div className="lg:hidden ">
						{user ? (
							<div className="flex gap-2 flex-row md:flex-row justify-center items-center">
								<img
									src={user.photoURL}
									alt=""
									width={40}
									className="rounded-full"
								/>
								<p className="md:text-xl">{user.displayName}</p>{" "}
							</div>
						) : (
							<p>{}</p>
						)}
					</div>
				</div>

				<div className="navbar-end">
					<div className="lg:flex hidden">
						{user ? (
							<div className="flex gap-2 flex-col md:flex-row justify-center items-center">
								<p className="md:text-xl">{user.displayName}</p>{" "}
								<img
									src={user.photoURL}
									alt=""
									width={40}
									className="rounded-full"
								/>
							</div>
						) : (
							<p>{}</p>
						)}
					</div>
					<DarkMode></DarkMode>

					<div className="dropdown lg:hidden">
						<label tabIndex={0} className="btn btn-ghost ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box  text-sm hover:bg-primary">
							{user ? (
								<button
									onClick={handleLogOut}
									className="text-white btn  bg-blue-950 border-0 hover:bg-[#FF5555]">
									Logout
								</button>
							) : (
								<Link to="/login">
									{" "}
									<button className="text-white  btn bg-red-600 btn-primary border-0 hover:bg-[#FF5555]">
										Login
									</button>
								</Link>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
