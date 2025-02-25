import { RouteObject } from "react-router";
import { HomePage } from "../pages/home-page";

export const routes: RouteObject[] = [
	{
		path: "",
		element: <HomePage />,
	},
];
