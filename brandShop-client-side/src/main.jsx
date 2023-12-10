import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import Authentication from "./Provider/Authentication";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Authentication>
			<RouterProvider router={router}></RouterProvider>
		</Authentication>
	</React.StrictMode>
);
