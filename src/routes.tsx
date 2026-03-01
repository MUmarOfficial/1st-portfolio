/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import RootLayout from "./pages/Root";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function SuspenseWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
    return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />} errorElement={<SuspenseWrapper><NotFoundPage /></SuspenseWrapper>}>
            <Route index={true} element={<SuspenseWrapper><Home /></SuspenseWrapper>} />
            <Route path="projects" element={<SuspenseWrapper><Projects /></SuspenseWrapper>} />
            <Route path="about" element={<SuspenseWrapper><About /></SuspenseWrapper>} />
            <Route path="contact" element={<SuspenseWrapper><Contact /></SuspenseWrapper>} />
        </Route>
    ),
);

export default appRouter;