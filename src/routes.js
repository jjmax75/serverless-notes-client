import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, NotFound, Login } from "./screens";
import AppliedRoute from "./hoc/AppliedRoute";

const Routes = props => (
	<Switch>
		<AppliedRoute path="/" exact component={Home} props={props.auth} />
		<AppliedRoute path="/login" exact component={Login} props={props.auth} />
		<Route component={NotFound} />
	</Switch>
);

export default Routes;
