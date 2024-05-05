import Report from "../pages/Report";
import Login from "../pages/Login";
import BrowsePage from "../pages/Browse";

export const BACKEND_BASE_PATH = 'https://fa23-lec9-demo-soln.fly.dev/api';

export const PATHS: {
    link: string;
    label: string;
    element?: JSX.Element;
}[] = [
    {
        link: "/",
        label: "Browse",
        element: <BrowsePage />,
    },
    {
        link: "/report",
        label: "Report",
        element: <Report />,
    },
    {
        link: "/login",
        label: "Login",
        element: <Login />,
    },
];
