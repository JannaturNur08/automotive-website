import { useLoaderData } from "react-router-dom";
import Imagecarousel from "./Imagecarousel";
import Navbar from "../Shared/Navbar/Navbar";

const ProductShowcase = () => {
	const loadedBrandName = useLoaderData();
	console.log(loadedBrandName);

	//const {image,name,brandName,type,price,rating} = loadedBrandName;
	//console.log("adimages.......", loadedBrandName[0].adImage);
	const adImages = loadedBrandName
		.filter((car) => car.adImage)
		.map((car) => car.adImage);

	return (
		<div>
			<div className="bg-slate-800">
				<Navbar></Navbar>
			</div>
			{ loadedBrandName.length>0 ? (
				<div>
					<div className="relative">
						<div className="carousel w-full">
							{adImages.map((adImage, index) => (
								<div
									key={index}
									id={`slide${index + 1}`}
									className={`carousel-item relative w-full ${
										index === 0 ? "active" : ""
									}`}>
									<img src={adImage} className="w-full" />
									<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
										<a
											href={`#slide${
												index === 0
													? adImages.length
													: index
											}`}
											className="btn btn-circle">
											❮
										</a>
										<a
											href={`#slide${
												index === adImages.length - 1
													? 0
													: index + 2
											}`}
											className="btn btn-circle">
											❯
										</a>
									</div>
								</div>
							))}
						</div>
						<h2 className="lg:text-6xl text-black md:pt-5 md:pl-5 text-2xl absolute top-0 font-oswald lg:mt-20">
						Welcome to our <span className="text-primary font-bold">product showcase</span>, <br />where automotive excellence meets your desires. 
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto container mt-10 mb-10 md:p-20">
						{loadedBrandName?.map((productCard) => (
							<Imagecarousel
								key={productCard._id}
								productCard={productCard}></Imagecarousel>
						))}
					</div>
				</div>
			) : (
				<div className="lg:mt-40 container text-center lg:mb-20">
					<img src="https://i.ibb.co/bWRJZyp/no-data-concept-illustration-114360-2506.jpg" className="mx-auto" alt="" />
					<p className="lg:text-7xl">No Product Data Found</p>
				</div>
			)}
		</div>
	);
};

export default ProductShowcase;
