import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFound";

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} errorElement={<NotFoundPage />}>
            <Route index={true} element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
        </Route>
    ),
);

export default appRouter;