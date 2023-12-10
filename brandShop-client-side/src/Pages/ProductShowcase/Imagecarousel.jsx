import { Link } from "react-router-dom";

const Imagecarousel = ({ productCard }) => {
	const { _id, image, name, brandName, type, price, adImage, rating } =
		productCard;
	console.log(productCard);
	const stars = Array(5).fill(null);
	//console.log(adimages);
	return (
		<div>
			<div className="card  shadow-xl bg-base pb-5">
				<figure className="px-10 pt-10">
					<img src={image} className="rounded-xl w-full h-[280px]" />
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title font-semibold">{name}</h2>
					<p className="text-sm  text-[#585858] text-left">
						{brandName}
					</p>

					<div>
						<p>Price :{price} $ </p>
						{stars.map((_, index) => (
							<span
								key={index}
								className={`mask mask-star-2 bg-orange-400 border-0 ${
									index + 1 <= rating
										? "bg-yellow-400 text-white"
										: "bg-gray-300 "
								}`}>
								{index + 1 <= rating ? "⭐" : "✩"}
							</span>
						))}
					</div>
				</div>
				<div className="card-actions flex justify-center pb-3">
					<Link to={`/${_id}`}>
						<button className="btn  bg-primary text-secondary border-0 hover:bg-[#FF5555]">
							Details
						</button>
					</Link>
					<Link to={`/${_id}/updateProduct`}>
						<button className="btn btn-primary bg-[#3dbb86] text-secondary border-0 hover:bg-[#79dab1]">
							Update
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Imagecarousel;
