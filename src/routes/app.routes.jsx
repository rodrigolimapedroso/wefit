import Home from '../pages/Home';
import { Switch, Route } from 'react-router-dom';

const AuthRoutes = () => (
    <>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </>
);

export default AuthRoutes;