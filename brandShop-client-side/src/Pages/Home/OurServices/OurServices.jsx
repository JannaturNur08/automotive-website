const OurServices = () => {
	return (
		<div className="font-roboto">
			<div className="grid md:grid-cols-2 gap-5 grid-cols-1">
				<div className="relative">
					<img
						src="https://i.ibb.co/2jpbsdj/backdrop.png"
						alt=""
						className="absolute lg:h-[450px]"
					/>
					<img
						src="https://i.ibb.co/NLdXy7j/catagory-car.png"
						alt=""
						className="relative lg:left-52 lg:top-20 w-3/4"
					/>
				</div>
				<div className="lg:max-w-2xl">
					<h2 className=" lg:text-5xl font-bold font-oswald mt-14  text-3xl lg:mt-0">
						Why Did You Choose Our Car Listing Services?
					</h2>
					<p className="mt-3  lg:text-xl max-w-[300px] lg:max-w-lg">
						If you are in the market for a new car, you have
						probably done your fair share of research to car
						services. You know what kind of car you want, what
						features you need? We are here to help you at any time.
					</p>
					<div className="flex gap-6 flex-col md:flex-row">
						<div className="lg:h-[185px] w-2 bg-red-600 mt-10"></div>
						<div className="grid md:grid-cols-2 grid-cols-1 gap-7 mx-auto ">
							<div className="flex items-center gap-3">
								<div className="w-[50px] shadow-xl">
									<img
										src="https://i.ibb.co/VwX0v0B/car-wash.png"
										alt=""
										className="p-3"
									/>
									<div className="w-100 h-1 bg-red-600"></div>
								</div>
								<div>
									<h3 className="text-2xl font-bold">500+</h3>
									<p>Vehicles Available</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-[50px] shadow-xl">
									<img
										src="https://i.ibb.co/R7bqVGk/group.png"
										alt=""
										className="p-3"
									/>
									<div className="w-100 h-1 bg-red-600"></div>
								</div>
								<div>
									<h3 className="text-2xl font-bold">300+</h3>
									<p>Happy Customers</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-[50px] shadow-xl">
									<img
										src="https://i.ibb.co/NFXKd4P/customer-support.png"
										alt=""
										className="p-3"
									/>
									<div className="w-100 h-1 bg-red-600"></div>
								</div>
								<div>
									<h3 className="text-2xl font-bold">24+</h3>
									<p>24/7 Support</p>
								</div>
							</div>
							<div className="flex items-center gap-3">
								<div className="w-[50px] shadow-xl">
									<img
										src="https://i.ibb.co/NZfvjLC/key-chain.png"
										alt=""
										className="p-3"
									/>
									<div className="w-100 h-1 bg-red-600"></div>
								</div>
								<div>
									<h3 className="text-2xl font-bold">125+</h3>
									<p>Car models & Make</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurServices;
