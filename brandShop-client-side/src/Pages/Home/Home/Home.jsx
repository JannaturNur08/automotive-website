import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandNameCard from "../BrandNamecard/BrandNameCard";
import './Home.css'
import OurServices from "../OurServices/OurServices";
import CustomerFeedback from "./Customer feedback/CustomerFeedback";


const Home = () => {
	const loadedBrandName = useLoaderData();
	console.log(loadedBrandName);

	return (
		<div className="home">
			
			<Banner></Banner>
			<h2 className="text-center mt-10 lg:text-5xl font-oswald text-3xl">
				Explore Popular Categories
			</h2>
			<div className="grid lg:grid-cols-3 mt-10 mb-10 md:max-w-[500px] mx-auto gap-4  grid-cols-2 ">
				{ loadedBrandName?.map((brandCard) => (
					<BrandNameCard
						key={brandCard._id}
						brandCard={brandCard}></BrandNameCard>
				))}
			</div>
			<div>
				<OurServices></OurServices>
			</div>
			<div>
				<CustomerFeedback></CustomerFeedback>
			</div>
		</div>
	);
};

export default Home;
