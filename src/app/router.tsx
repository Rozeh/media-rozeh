import { Redirect, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Patient from './pages/Patient';

const Router = () => {
    return (
        <>
            <Route exact={true} path="/" component={ Home } />
            <Route path="/dashboard" component= { Dashboard } />
            <Route path="/patient/:id" component= {Patient} />
            <Redirect from="*" to="/" />
        </>
    )
}

export default Router;