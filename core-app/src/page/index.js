import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./page.css";

const FleetPage = React.lazy(() => import("FleetApp/FleetPage"));
const BusinessUnityPage = React.lazy(() =>
  import("FleetApp/BusinessUnityPage")
);
const AlertPage = React.lazy(() => import("AlertApp/AlertPage"));

const Page = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <h1>HOME</h1>
        </Route>
        <Route exact path="/fleet">
          <Suspense fallback={<div>Loading...</div>}>
            <FleetPage />
          </Suspense>
        </Route>
        <Route exact path="/fleet/business-unity">
          <Suspense fallback={<div>Loading...</div>}>
            <BusinessUnityPage />
          </Suspense>
        </Route>
        <Route exact path="/alert">
          <Suspense fallback={<div>Loading...</div>}>
            <AlertPage />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
};

export default Page;
