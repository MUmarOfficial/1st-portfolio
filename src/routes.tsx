import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} errorElement={<NotFoundPage />}>
            <Route index={true} element={<Home />} />
        </Route>
    ),
);

export default appRouter;