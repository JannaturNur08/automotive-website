import { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar/Navbar";

const AddProduct = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [ratings, setRating] = useState(0);

	const handleDropdownChange = (e) => {
		setSelectedCategory(e.target.value);
	};
	const handleRatingChange = (event) => {
		setRating(parseInt(event.target.value, 10));
	};
	const handleAddProduct = (e) => {
		e.preventDefault();
		const form = e.target;
		const image = form.image.value;
		const name = form.name.value;
		const brandName = form.brandName.value;
		const type = selectedCategory;
		const price = form.price.value;
		const details = form.details.value;
		const rating = ratings;
		const newProduct = {
			image,
			name,
			brandName,
			type,
			price,
			details,
			rating,
		};
		console.log(newProduct);

		// send data to the server
		fetch(
			"https://b8a10-brandshop-server-side-jannatur-nur08-i3h4cmoem.vercel.app/brand",
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
						text: "Product Added Successfully",
						icon: "success",
						confirmButtonText: "Confirmed",
					});
				}
			});
	};

	return (
		<div className="bg-[#223a47] font-roboto">
			<div className="bg-slate-800 mb-10">
				<Navbar></Navbar>
			</div>
			<div className="bg-[#223a47] p-24 mx-auto container ">
				<h2 className="lg:text-5xl font-extrabold text-center text-[#e2e2e2] font-oswald">
					Add Product
				</h2>
				<form onSubmit={handleAddProduct}>
					{/* form row */}
					<div className="mb-8 mt-5">
						<div className="form-control md:w-1/2 mx-auto mb-2">
							<label className="label">
								<span className="label-text text-[#e2e2e2]">
									Image
								</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="image"
									placeholder="Enter photo URL"
									className="input input-bordered w-full"
								/>
							</label>
						</div>
						<div className="form-control md:w-1/2 mx-auto mb-2">
							<label className="label">
								<span className="label-text text-[#e2e2e2]">
									Name
								</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="name"
									placeholder="Name"
									className="input input-bordered w-full"
								/>
							</label>
						</div>
						<div className="form-control md:w-1/2 mx-auto mb-2">
							<label className="label">
								<span className="label-text text-[#e2e2e2]">
									Brand Name
								</span>
							</label>
							<label className="input-group border-0">
								<input
									type="text"
									name="brandName"
									placeholder="Brand Name"
									className="input input-bordered w-full"
								/>
							</label>
						</div>

						{/* form supplier row */}

						<div className="form-control md:w-1/2 mx-auto mb-2">
							<label className="label">
								<span className="label-text text-[#e2e2e2]">
									Type
								</span>
							</label>
							<select
								className="p-3"
								value={selectedCategory}
								onChange={handleDropdownChange}
								id="carCategory"
								name="type">
								<option value="">Type</option>
								<option value="Sedan">Sedan</option>
								<option value="SUV">SUV</option>
								<option value="Sports Car">Sports Car</option>
								<option value="Hybrid">Hybrid</option>
								<option value="Electric Car">
									Electric Car
								</option>
							</select>
						</div>
						<div className="form-control md:w-1/2 mx-auto mb-2">
							<label className="label">
								<span className="label-text text-[#e2e2e2]">
									Price
								</span>
							</label>
							<label className="input-group">
								<input
									type="text"
									name="price"
									placeholder="Enter Price here"
									className="input input-bordered w-full"
								/>
							</label>
						</div>

						{/* form category row */}
						<div className=" mb-8">
							<div className="form-control md:w-1/2 mx-auto mb-2">
								<label className="label">
									<span className="label-text text-[#e2e2e2]">
										Description
									</span>
								</label>
								<label className="input-group">
									<input
										type="text"
										name="details"
										placeholder="Short Description"
										className="input input-bordered w-full"
									/>
								</label>
							</div>
							<div className="form-control md:w-1/2 mx-auto mb-2">
								<label className="label">
									<span className="label-text text-[#e2e2e2]">
										Rating
									</span>
								</label>
								<div className="rating">
									<input
										type="radio"
										name="rating"
										className="mask mask-star-2 bg-orange-400"
										onChange={handleRatingChange}
										value="1"
										checked={ratings === 1}
									/>
									<input
										type="radio"
										name="rating"
										className="mask mask-star-2 bg-orange-400"
										onChange={handleRatingChange}
										value="2"
										checked={ratings === 2}
									/>
									<input
										type="radio"
										name="rating"
										className="mask mask-star-2 bg-orange-400"
										value="3"
										checked={ratings === 3}
										onChange={handleRatingChange}
									/>
									<input
										type="radio"
										name="rating"
										className="mask mask-star-2 bg-orange-400"
										value="4"
										checked={ratings === 4}
										onChange={handleRatingChange}
									/>
									<input
										type="radio"
										name="rating"
										className="mask mask-star-2 bg-orange-400"
										value="5"
										checked={ratings === 5}
										onChange={handleRatingChange}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* photo url row */}

					{/** submit button  **/}

					<div className="text-center">
						<input
							type="submit"
							value="Add Product"
							className="btn bg-[#20292e] text-[#c5c4c4]  md:w-1/2 text-center border-0"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
