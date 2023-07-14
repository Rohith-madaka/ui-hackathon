import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from "../components/dashboard/Dashboard.tsx";
import ErrorDetails from "../components/errorDetails/ErrorDetails.tsx";

const Routes = () => {
    return (
        <Switch>
            <Route
                key='route-path-dashboard'
                exact path ='/dashboard'
            >
                <Dashboard />
            </Route>
            <Route
                key='route-path-details'
                exact path ='/details'
            >
                <ErrorDetails />
            </Route>
            <Route
                key='route-path-root'
            >
                <Redirect to='/dashboard' />
            </Route>
        </Switch>
    )
}

export default Routes;