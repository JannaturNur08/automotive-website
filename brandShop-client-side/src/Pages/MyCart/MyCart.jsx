import Navbar from "../Shared/Navbar/Navbar";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/Authentication";
import Swal from "sweetalert2";

const MyCart = () => {
	const { user } = useContext(AuthContext);
	const email = user.email;

	const [myCart, setMyCart] = useState([]);

	//console.log(myCart);

	useEffect(() => {
		//fetch data here and set state accordingly
		fetch(
			`https://b8a10-brandshop-server-side-jannatur-nur08-i3h4cmoem.vercel.app/myCart/${email}`
		)
			.then((res) => res.json())
			.then((data) => setMyCart(data));
	}, []);

	console.log(myCart);
	//console.log(users);

	const handleDelete = (id) => {
		// make sure user confirm to delete
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://b8a10-brandshop-server-side-jannatur-nur08-i3h4cmoem.vercel.app/myCart/${id}`,
					{
						method: "DELETE",
					}
				)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire(
								"Deleted!",
								"Item has removed from the cart",
								"success"
							);
							const remaining = myCart.filter(
								(cart) => cart._id !== id
							);
							setMyCart(remaining);
						}
					});
			}
		});
	};

	console.log("loaded cart", myCart);
	return (
		<div>
			<div className="bg-slate-800 mb-10">
				<Navbar></Navbar>
			</div>
			<h2 className="text-4xl font-bold text-center font-oswald">
				My cart Collection
			</h2>
			<div className="mx-auto container mt-10 mb-10">
				<div>
					<table className=" table ">
						{/* head */}
						<thead>
							<tr>
								<th>Index</th>
								{/* <th>Email</th> */}
								<th>Name</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{myCart.map((user, index) => (
								<tr key={user._id}>
									<th>{index + 1}</th>
									{/* <td>{user.email}</td> */}
									<td>{user.name}</td>
									<td>{user.price}</td>
									<td>
										<button
											onClick={() =>
												handleDelete(user._id)
											}
											className="btn">
											X
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyCart;
