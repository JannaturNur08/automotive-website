import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import MyCart from "../Pages/MyCart/MyCart";
import Registration from "../Pages/Registration/Registration";
import ProductShowcase from "../Pages/ProductShowcase/ProductShowcase";
import ProductUpdate from "../Pages/ProductUpdate/ProductUpdate";
import PrivateRoutes from "./PrivateRoutes";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () =>
					fetch(
						"https://b8a10-brandshop-server-side-jannatur-nur08-i3h4cmoem.vercel.app/brandName"
					),
			},
			{
				path: "addProduct",
				element: (
					<PrivateRoutes>
						<AddProduct></AddProduct>
					</PrivateRoutes>
				),
			},
			{
				path: "/:id/updateProduct",
				element: (
					<PrivateRoutes>
						<ProductUpdate></ProductUpdate>
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(
						`https://b8a10-brandshop-server-side-jannatur-nur08-i3h4cmoem.vercel.app/brand/${params.brandName}/${params.id}`
					),
			},
			{
				path: "myCart",
				element: (
					<PrivateRoutes>
						<MyCart></MyCart>
					</PrivateRoutes>
				),
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "registration",
				element: <Registration></Registration>,
			},
			{
				path: "brand/:brandName",
				element: (
					<PrivateRoutes>
						<ProductShowcase></ProductShowcase>
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(
						`https://b8a10-brandshop-server-side-jannatur-nur08-i3h4cmoem.vercel.app/brand/${params.brandName}`
					),
			},
			{
				path: "/:id",
				element: (
					<PrivateRoutes>
						<ProductDetails></ProductDetails>
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(
						`https://b8a10-brandshop-server-side-jannatur-nur08-i3h4cmoem.vercel.app/brand/${params.brandName}/${params.id}`
					),
			},
		],
	},
]);

export default router;
