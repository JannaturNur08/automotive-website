import { Link } from "react-router-dom";

const BrandNameCard = ({ brandCard }) => {
	const {  brandName, brandImage } = brandCard;

	return (
		<div className="lg:max-w-[150px] mx-auto max-w-[120px] ">
			<Link
				to={`brand/${brandName}`}
				onClick={() => console.log(brandName)}>
				<div className="card card-compact  bg-base-100 shadow-xl  ">
					<figure>
						<img src={brandImage} alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title justify-center ">{brandName}</h2>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default BrandNameCard;
