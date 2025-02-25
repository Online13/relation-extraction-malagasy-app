import { createBrowserRouter, RouterProvider } from "react-router";
import { routes } from "./routes";
import { TooltipProvider } from "./components/ui/tooltip";

const router = createBrowserRouter(routes);

export function App() {
	return (
		<TooltipProvider>
			<RouterProvider router={router} />
		</TooltipProvider>
	);
}
