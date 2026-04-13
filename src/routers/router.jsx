import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import FixturesMatch from "../components/FixturesMatch";
import PointsTable from "../components/PointsTable";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/fixtures',
                element: <FixturesMatch/>
            },
            {
                path: '/points-table',
                element: <PointsTable/>
            },
        ]
    }
])

export default router;