import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Switch } from "wouter";

import Start from "./routes/start";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div className="flex flex-row">
			<div className="w-full h-screen flex box-border">
				<Switch>
					<Route path="/" component={Start} />

					<Route>404: No such page!</Route>
				</Switch>
			</div>
		</div>
	</React.StrictMode>,
);
