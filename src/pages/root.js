import PagesLogin from './login';
import PagesDashboard from './dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Redirect } from "react-router"


export default function PagesRoot() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <PagesLogin></PagesLogin>
          </Route>
          <Route path="/dashboard">
            <PagesDashboard></PagesDashboard>
          </Route>

          <Redirect from="/" to="/login"/>
        </Switch>
      </Router>
    </div>
  )
}