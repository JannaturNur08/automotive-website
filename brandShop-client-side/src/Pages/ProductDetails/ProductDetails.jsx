import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/Authentication";

const ProductDetails = () => {
	const { user } = useContext(AuthContext);
	const email = user.email;
	console.log(email);
	const productDetails = useLoaderData();
	console.log(productDetails);
	const { brandName, name, image, details, price, type, rating } =
		productDetails;
	//const [ratings, setRating] = useState([]);
	// setRating(rating);
	const stars = Array(5).fill(null);

	const handleMyCart = () => {
		//e.preventDefault();

		const newProduct = {
			email,

			name,
			brandName,
			type,
			price,
		};
		console.log(newProduct);

		// send data to the server
		fetch(
			"https://b8a10-brandshop-server-side-jannatur-nur08-i3h4cmoem.vercel.app/myCart",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: "Success!",
						text: "Successfully Added in th Cart",
						icon: "success",
						confirmButtonText: "Confirmed",
					});
				}
			});
	};

	console.log("product details page");
	return (
		<div>
			<div className="bg-black mb-10">
				<Navbar></Navbar>
			</div>

			<div className="card  bg-base-100 shadow-xl">
				<h1 className="text-5xl font-oswald  text-center mb-10">
					{name}
				</h1>
				<figure>
					<img className="lg:w-[1000px] " src={image} alt="Album" />
				</figure>
				<div className="card-body">
					<p className="text-xl font-roboto  text-center">
						{brandName}
					</p>
					<div className="max-w-[1000px] mx-auto">
						<p className="text-xl font-roboto  text-left">
							{details}
						</p>
						<div className="flex max-w-[300px] mt-3">
							<p>
								{" "}
								<span className="font-bold">Price</span> :{" "}
								{price}$
							</p>
							<p>
								<span className="font-bold">Type</span> : {type}
							</p>
						</div>
						<div className="mt-3">
							{stars.map((_, index) => (
								<span
									key={index}
									className={`mask mask-star-2 bg-orange-400 border-0 ${
										index + 1 <= rating
											? "bg-yellow-400 text-white"
											: "bg-gray-300"
									}`}>
									{index + 1 <= rating ? "⭐" : "✩"}
								</span>
							))}
						</div>
						<div>
							<button
								onClick={handleMyCart}
								className="btn btn-primary bg-red-600 border-0 text-secondary mt-5 hover:bg-red-400">
								Add to Cart
							</button>
						</div>
					</div>
				</div>

				{/* <div className="mx-auto lg:max-w-[1400px]">
				<h2 className="text-5xl">Product details</h2>
				<p>{name}</p>
				<div className="">
				<img src={image} alt="" />
				</div>
				<p>{details}</p>
				
				</div> */}
			</div>
		</div>
	);
};

export default ProductDetails;
