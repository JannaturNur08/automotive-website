import Navbar from "../../Shared/Navbar/Navbar";
import "./Banner.css";

const Banner = () => {
	return (
		<div className="banner">
			<Navbar></Navbar>
			<h1 className="text-left lg:text-6xl text-3xl text-white lg:mt-36 md:ml-16 ml-10 font-oswald">
				Welcome to the World of <br />{" "}
				<span className="text-primary">Luxury Automobiles</span>
			</h1>
		</div>
	);
};

export default Banner;
